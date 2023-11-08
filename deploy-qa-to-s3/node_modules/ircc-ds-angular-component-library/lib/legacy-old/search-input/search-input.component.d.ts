import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface ISearchInputConfig {
    placeholderText?: string;
    customIcon?: string;
    searchButton?: ISearchInputButtonConfig;
}
export interface ISearchInputButtonConfig {
    text?: string;
    colour?: string;
}
export declare class SearchInputComponent implements OnInit {
    config?: ISearchInputConfig;
    searchEvent: EventEmitter<any>;
    searchInputControl: FormControl<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchInputComponent, "lib-search-input", never, { "config": "config"; }, { "searchEvent": "searchEvent"; }, never, never, false>;
}
