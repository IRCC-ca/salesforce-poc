import * as i0 from "@angular/core";
export interface ILinkComponentConfig {
    text: string;
    linkKey?: string;
    href?: string;
    routerLink?: string;
    overflow?: boolean;
}
export declare class BreadcrumbLinkComponent {
    config: ILinkComponentConfig;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbLinkComponent, "ircc-cl-lib-breadcrumb-link", never, { "config": "config"; }, {}, never, never, false>;
}
