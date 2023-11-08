import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChipItemComponent {
    chipContent?: string;
    iconClickEvent: EventEmitter<any>;
    constructor();
    onIconClick(): void;
    onEnterKeyPress(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipItemComponent, "lib-chip-item", never, { "chipContent": "chipContent"; }, { "iconClickEvent": "iconClickEvent"; }, never, never, false>;
}
