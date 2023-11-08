import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import * as i0 from "@angular/core";
export interface IIconConfig {
    ariaLabel?: string;
    FA_keywords?: string;
    size?: keyof typeof DSSizes;
}
export declare class IconComponent implements OnChanges, OnInit {
    iconSpan: ElementRef;
    config: IIconConfig;
    ariaLabel?: string;
    FA_keywords?: string;
    size?: keyof typeof DSSizes;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "ircc-cl-lib-icon", never, { "config": "config"; "ariaLabel": "ariaLabel"; "FA_keywords": "FA_keywords"; "size": "size"; }, {}, never, never, false>;
}
