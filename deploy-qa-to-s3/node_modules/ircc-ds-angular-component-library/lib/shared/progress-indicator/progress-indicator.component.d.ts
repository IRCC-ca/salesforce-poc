import { OnInit, EventEmitter } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IProgressTagsConfig } from '../progress-tags/progress-tags.component';
import { ITabConfig, ITabNavConfig } from '../tabs/tabs.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare const PROGRESS_INDICATOR_STEP_EN = "Step";
export declare const PROGRESS_INDICATOR_STEP_FR = "\u00C9tap";
export interface IStepConfig {
    title?: string;
    tagConfig: IProgressTagsConfig;
}
export interface IProgressIndicatorConfig {
    id: string;
    size?: keyof typeof DSSizes;
    orientation?: keyof typeof Orientations;
    steps?: IStepConfig[];
    selected?: number;
}
export declare enum Orientations {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare class ProgressIndicatorComponent implements OnInit {
    private translate;
    config: IProgressIndicatorConfig;
    id?: string;
    size?: keyof typeof DSSizes;
    orientation?: keyof typeof Orientations;
    steps?: IStepConfig[];
    selected?: number;
    tabClick: EventEmitter<any>;
    tabConfig: ITabConfig;
    tabNavConfig: ITabNavConfig;
    stepText: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    tabClickFn(selected: number): void;
    setLang(lang: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressIndicatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressIndicatorComponent, "ircc-cl-lib-progress-indicator", never, { "config": "config"; "id": "id"; "size": "size"; "orientation": "orientation"; "steps": "steps"; "selected": "selected"; }, { "tabClick": "tabClick"; }, never, never, false>;
}
