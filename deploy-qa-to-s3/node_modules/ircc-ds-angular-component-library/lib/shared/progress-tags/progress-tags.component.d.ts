import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export declare const TAG_LABELS_EN: string[];
export declare const TAG_LABELS_FR: string[];
export declare enum TagType {
    primary = "primary",
    success = "success",
    critical = "critical",
    locked = "locked",
    notStarted = "notStarted"
}
export interface IProgressTagsConfig {
    id: string;
    type?: keyof typeof TagType;
    size?: keyof typeof DSSizes;
}
export declare class ProgressTagsComponent implements OnInit {
    private translate;
    text: string[];
    config: IProgressTagsConfig;
    id: string;
    type?: keyof typeof TagType | TagType;
    size?: keyof typeof DSSizes | DSSizes;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    ngOnChanges(): void;
    setTypeTitle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressTagsComponent, "ircc-cl-lib-progress-tags", never, { "config": "config"; "id": "id"; "type": "type"; "size": "size"; }, {}, never, never, false>;
}
