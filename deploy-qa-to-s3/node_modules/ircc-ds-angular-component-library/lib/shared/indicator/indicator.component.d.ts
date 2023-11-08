import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export declare enum IndicatorType {
    dot = 0,
    text = 1,
    number = 2
}
export declare enum IndicatorTreatment {
    strong = "strong",
    weak = "weak"
}
export declare enum IndicatorPurpose {
    status = "status",
    palette = "palette"
}
export declare enum IndicatorStatus {
    information = "information",
    warning = "warning",
    critical = "critical",
    neutral = "neutral",
    primary = "primary",
    success = "success"
}
export declare enum IndicatorPalette {
    teal = 0,
    orange = 1,
    red = 2,
    grey = 3,
    blue = 4,
    green = 5,
    purple = 6,
    navy = 7
}
export interface IIndicatorConfig {
    label?: string | number;
    size?: keyof typeof DSSizes;
    type: keyof typeof IndicatorType;
    icon?: string;
    tabIndex?: number | undefined;
    category: keyof typeof IndicatorTreatment;
    purpose: keyof typeof IndicatorPurpose;
    status?: keyof typeof IndicatorStatus;
    palette?: keyof typeof IndicatorPalette;
    ariaLabel?: string;
}
export declare class IndicatorComponent implements OnInit, AfterViewInit, OnChanges {
    config: IIndicatorConfig;
    size?: keyof typeof DSSizes;
    type?: keyof typeof IndicatorType;
    icon?: string;
    category?: keyof typeof IndicatorTreatment;
    purpose?: keyof typeof IndicatorPurpose;
    status?: keyof typeof IndicatorStatus;
    palette?: keyof typeof IndicatorPalette;
    ariaLabel?: string;
    tabIndex: undefined;
    label?: ElementRef<HTMLDivElement>;
    EIndicatorStatus: typeof IndicatorStatus;
    rounded?: boolean;
    abbr?: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private checkNumber;
    private checkLabelRounded;
    private checkLabelLength;
    static ɵfac: i0.ɵɵFactoryDeclaration<IndicatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IndicatorComponent, "ircc-cl-lib-indicator", never, { "config": "config"; "size": "size"; "type": "type"; "icon": "icon"; "category": "category"; "purpose": "purpose"; "status": "status"; "palette": "palette"; "ariaLabel": "ariaLabel"; "tabIndex": "tabIndex"; }, {}, never, never, false>;
}
