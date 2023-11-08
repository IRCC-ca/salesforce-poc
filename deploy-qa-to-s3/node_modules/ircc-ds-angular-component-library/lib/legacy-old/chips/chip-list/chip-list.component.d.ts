import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChipListComponent implements OnInit {
    chipList?: string[];
    chipListChange: EventEmitter<string[]>;
    chipContentText?: string;
    constructor();
    ngOnInit(): void;
    removeChipItem(chipIdx: number): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipListComponent, "lib-chip-list", never, { "chipList": "chipList"; }, { "chipListChange": "chipListChange"; }, never, never, false>;
}
