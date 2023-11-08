import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface ITabNavConfig {
    id: string;
    tab?: ITabConfig[];
    size?: keyof typeof DSSizes;
    selected?: string;
    showContent?: boolean;
}
export interface ITabConfig {
    id?: string;
    title: string;
    value?: string;
}
export declare class TabsComponent implements OnInit {
    private translate;
    config: ITabNavConfig;
    id?: string;
    tab?: ITabConfig[];
    size?: keyof typeof DSSizes;
    selected?: string;
    showContent?: boolean;
    valueChange: EventEmitter<string>;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    setSelected(selectedID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "ircc-cl-lib-tabs", never, { "config": "config"; "id": "id"; "tab": "tab"; "size": "size"; "selected": "selected"; "showContent": "showContent"; }, { "valueChange": "valueChange"; }, never, never, false>;
}
