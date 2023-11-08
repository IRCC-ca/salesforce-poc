import { OnInit } from '@angular/core';
import { NavigationStatus } from '../navigation.types';
import * as i0 from "@angular/core";
export declare class navItemStatusComponent implements OnInit {
    status: keyof typeof NavigationStatus;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<navItemStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<navItemStatusComponent, "ircc-cl-lib-nav-item-status", never, { "status": "status"; }, {}, never, never, false>;
}
