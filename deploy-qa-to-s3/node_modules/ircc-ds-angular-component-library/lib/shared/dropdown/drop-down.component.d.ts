import { OnInit } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { ButtonCategories } from '../button/button.component';
import { IIconButtonIconConfig } from '../icon-button/icon-button.component';
import { IFlyoutConfig } from '../flyout/flyout.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IDropdownConfig {
    id: string;
    label?: string;
    size?: keyof typeof DSSizes;
    category?: keyof typeof ButtonCategories;
    placeholderText?: string;
    disabled?: boolean;
    icon?: IIconButtonIconConfig;
    flyout?: IFlyoutConfig;
}
export declare const DROPDOWN_ARIA: {
    en: string;
    fr: string;
};
export declare class DropdownComponent implements OnInit {
    private translate;
    constructor(translate: TranslateService);
    config: IDropdownConfig;
    id: string;
    size?: keyof typeof DSSizes;
    label?: string;
    placeholderText?: string;
    disabled?: boolean;
    category?: keyof typeof ButtonCategories;
    icon?: IIconButtonIconConfig;
    flyout?: IFlyoutConfig;
    btnAriaLabel: string;
    showPlaceholder: boolean;
    selected: boolean;
    flyoutConfig: IFlyoutConfig;
    ngOnInit(): void;
    /**
     * setLang(lang: string) if a function which accepts a string value.
     * This value currently needs to be 'en' or 'en-US' to trigger English translations otherwise
     * french translations will be triggered.
     */
    setLang(lang: string): void;
    selectedOption(e: Event): void;
    /**
     * function receives a truthy value which determines wether it closes or opens,
     * but also looks for FocusEvent to check if flyout is being interacted with
     * @param status
     * @param e
     */
    toggleFlyout(status: boolean, e?: FocusEvent): void;
    /**
     * Clear the flyout active state
     */
    clearFlyoutFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "ircc-cl-lib-dropdown", never, { "config": "config"; "id": "id"; "size": "size"; "label": "label"; "placeholderText": "placeholderText"; "disabled": "disabled"; "category": "category"; "icon": "icon"; "flyout": "flyout"; }, {}, never, never, false>;
}
