import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @see https://stackblitz.com/edit/angular-mutationobserver-example?file=app%2Fapp.module.ts,app%2Fdom-change.directive.ts,app%2Fapp.component.ts
 */
export declare class DomChangeDirective implements OnDestroy {
    private elementRef;
    private changes;
    domChange: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomChangeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DomChangeDirective, "[domChange]", never, {}, { "domChange": "domChange"; }, never, never, false>;
}
