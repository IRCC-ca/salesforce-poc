import { OnInit } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export declare enum IFlyoutOptionType {
    text = "text",
    checkbox = "checkbox",
    dropdown = "dropdown",
    line = "line",
    heading = "heading"
}
export interface IFlyoutOptionConfig {
    id?: string;
    value: string;
    selected?: boolean;
    active?: boolean;
    disabled?: boolean;
    type?: keyof typeof IFlyoutOptionType;
    clickable?: boolean;
    size?: keyof typeof DSSizes;
}
export declare class FlyoutOptionComponent implements OnInit {
    config: IFlyoutOptionConfig;
    id?: string;
    size?: keyof typeof DSSizes;
    value?: string;
    selected?: boolean;
    active?: boolean;
    disabled?: boolean;
    type?: keyof typeof IFlyoutOptionType;
    clickable?: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlyoutOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlyoutOptionComponent, "ircc-cl-lib-flyout-option", never, { "config": "config"; "id": "id"; "size": "size"; "value": "value"; "selected": "selected"; "active": "active"; "disabled": "disabled"; "type": "type"; "clickable": "clickable"; }, {}, never, never, false>;
}
