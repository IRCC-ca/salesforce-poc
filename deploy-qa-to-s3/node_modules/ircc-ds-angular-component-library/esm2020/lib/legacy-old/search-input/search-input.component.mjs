import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SearchInputComponent {
    constructor() {
        this.searchEvent = new EventEmitter();
        this.searchInputControl = new FormControl();
    }
    ngOnInit() {
        console.log('testing');
    }
}
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: SearchInputComponent, selector: "lib-search-input", inputs: { config: "config" }, outputs: { searchEvent: "searchEvent" }, ngImport: i0, template: "<input formControlName=\"searchInputControl\" />\n<!-- TODO: Translation? -->\n<ng-container *ngIf=\"config?.searchButton\">\n  <button>{{ config?.searchButton?.text }}</button>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-search-input', template: "<input formControlName=\"searchInputControl\" />\n<!-- TODO: Translation? -->\n<ng-container *ngIf=\"config?.searchButton\">\n  <button>{{ config?.searchButton?.text }}</button>\n</ng-container>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], searchEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9sZWdhY3ktb2xkL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2xlZ2FjeS1vbGQvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWlCN0MsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQjtRQUhVLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsdUJBQWtCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRWhCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2tIQVRVLG9CQUFvQjtzR0FBcEIsb0JBQW9CLCtIQ2xCakMsc01BS0E7NEZEYWEsb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGtCQUFrQjswRUFJbkIsTUFBTTtzQkFBZCxLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoSW5wdXRDb25maWcge1xuICBwbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XG4gIGN1c3RvbUljb24/OiBzdHJpbmc7XG4gIHNlYXJjaEJ1dHRvbj86IElTZWFyY2hJbnB1dEJ1dHRvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoSW5wdXRCdXR0b25Db25maWcge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBjb2xvdXI/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZWFyY2gtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZz86IElTZWFyY2hJbnB1dENvbmZpZztcbiAgQE91dHB1dCgpIHNlYXJjaEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZWFyY2hJbnB1dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0aW5nJyk7XG4gIH1cbn1cbiIsIjxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hJbnB1dENvbnRyb2xcIiAvPlxuPCEtLSBUT0RPOiBUcmFuc2xhdGlvbj8gLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnPy5zZWFyY2hCdXR0b25cIj5cbiAgPGJ1dHRvbj57eyBjb25maWc/LnNlYXJjaEJ1dHRvbj8udGV4dCB9fTwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG4iXX0=