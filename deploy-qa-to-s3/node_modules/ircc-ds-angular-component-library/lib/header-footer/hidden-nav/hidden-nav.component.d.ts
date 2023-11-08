import * as i0 from "@angular/core";
export interface ISkipLinkConfig {
    title: string;
    href: string;
    ariaLabel?: string;
}
export interface IHiddenNavConfig {
    id: string;
    skipLinks?: ISkipLinkConfig[];
}
export declare class HiddenNavComponent {
    config: IHiddenNavConfig;
    scrollToAnchor(id: string): void;
    handleKeyDown(key: string, link?: string): void;
    showNav(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HiddenNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HiddenNavComponent, "ircc-cl-lib-hidden-nav", never, { "config": "config"; }, {}, never, never, false>;
}
