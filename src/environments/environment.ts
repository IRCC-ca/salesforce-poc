import LASTDATEMODIFIED from '../assets/date-modified.json';

export const environment = {
  production: false,
  version: '1.0.0' + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
  dateModified: LASTDATEMODIFIED.LASTDATEMODIFIED,
  baseUrl: '',

  CognitoRegion: '',
  CognitoUserPoolID: '',
  CognitoWebClientID: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
