import * as AWS from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { exec } from "child_process";
import { resolve } from "path";
import { readdir } from "node:fs/promises";
import * as fs from "fs";
import * as mime from "mime-types";
import * as cheerio from "cheerio";

const getBranch = () =>
  new Promise((resolve, reject) => {
    return exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
      if (err) reject(`getBranch Error: ${err}`);
      else if (typeof stdout === "string")
        resolve(stdout.trim().replaceAll("/", "-").toLowerCase());
    });
  });

const buildCode = () =>
  new Promise((resolve, reject) => {
    return exec("cd .. && npm run deploy-build && cd deploy-qa-to-s3", (err, stdout, stderr) => {
      if (err) reject(`getBranch Error: ${err}`);
      else if (typeof stdout === "string") resolve(stdout.trim());
    });
  });

const UploadFile = (branchName, path, client) =>
  new Promise((resolve, reject) => {
    const fileObject = fs.readFileSync(
      `../dist/${path[1]}`
    );
    const upload = new Upload({
      client: client,
      params: {
        Bucket: BUCKET_NAME,
        Key: `${branchName}/${path[1]}`,
        Body: fileObject,
        ContentType: mime.lookup(
          `../dist/${path[1]}`
        ),
      },
    });

    upload.done().then((res, error) => {
      resolve(`Uploaded: ../dist/${path[1]}`);
    });
  });

const editBaseHref = (branchName) =>
  new Promise((resolve, reject) => {
    let file = cheerio.load(
      fs.readFileSync("../dist/index.html")
    );

    // console.log();
    file("base").attr("href");
    file("base").attr("href", `/${branchName}/`);
    console.log(file("base").attr("href"));
    fs.writeFile(
      "../dist/index.html",
      file.html(),
      (err) => {
        if (err) {
          console.error(err);
        }
        resolve();
      }
    );
  });

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;
const REGION = "ca-central-1";
const BUCKET_NAME = "salesforce-demo-poc-bucket";
const params = {
  region: "REGION",
};

(async () => {
  let branchName = await getBranch();
  // if (!branchName.startsWith("qa")) {
  //   console.log("\x1b[34m%s\x1b[0m", "Not sending branch to QA");
  //   return;
  // }

  console.log("Building Code");
  let buildingCode = await buildCode();
  console.log(buildingCode);
  console.log("---");

  if (ID === undefined || SECRET === undefined) {
    console.log("\x1b[31m%s\x1b[0m", "Please enter your AWS Credentials");
    return;
  }

  await editBaseHref(branchName);

  const client = new AWS.S3Client({
    region: REGION,
    credentials: {
      accessKeyId: ID,
      secretAccessKey: SECRET,
    },
  });

  const response = await client.send(
    new AWS.PutObjectCommand({ Bucket: BUCKET_NAME, Key: `${branchName}/` })
  );
  console.log("---");
  console.log("Connnecting to AWS", response);
  console.log("---");

  for await (const f of getFiles("../dist/")) {
    const path = f.split("dist/");
    console.log("Path", path);
    console.log(await UploadFile(branchName, path, client));
  }

  console.log(`Upload Done!`);
  console.log(
    `Visit your QA site at: https://dnzkezxc9e5e7.cloudfront.net/${branchName}/index.html`
  );
})();
