import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DSFullSizes, DSOrientations } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export declare const SPINNER_LABELS_EN: string[];
export declare const SPINNER_LABELS_FR: string[];
export declare enum SpinnerType {
    active = "active",
    success = "success",
    critical = "critical"
}
export interface ISpinnerConfig {
    id: string;
    type?: keyof typeof SpinnerType;
    size?: keyof typeof DSFullSizes;
    orientation?: keyof typeof DSOrientations;
    label?: string;
    description?: string;
}
export declare class SpinnerComponent implements OnInit {
    private translate;
    text: string[];
    config: ISpinnerConfig;
    id: string;
    type?: keyof typeof SpinnerType | SpinnerType;
    size?: keyof typeof DSFullSizes | DSFullSizes;
    orientation?: keyof typeof DSOrientations | DSOrientations;
    label?: '';
    description?: '';
    constructor(translate: TranslateService);
    ngOnInit(): void;
    ngOnChanges(): void;
    setTypeTitle(): void;
    removeVertical(): void;
    getSuccessTitle(): string;
    getErrorTitle(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpinnerComponent, "ircc-cl-lib-spinner", never, { "config": "config"; "id": "id"; "type": "type"; "size": "size"; "orientation": "orientation"; "label": "label"; "description": "description"; }, {}, never, never, false>;
}
