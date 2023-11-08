import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../chip-item/chip-item.component";
export class ChipListComponent {
    constructor() {
        this.chipListChange = new EventEmitter();
    }
    ngOnInit() { }
    removeChipItem(chipIdx) {
        this.chipList?.splice(chipIdx, 1);
        this.chipListChange.emit(this.chipList);
    }
    onSubmit() {
        if (this.chipContentText) {
            this.chipList?.push(this.chipContentText);
            this.chipListChange.emit(this.chipList);
            this.chipContentText = '';
        }
    }
}
ChipListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ChipListComponent, selector: "lib-chip-list", inputs: { chipList: "chipList" }, outputs: { chipListChange: "chipListChange" }, ngImport: i0, template: "<form\n  #form=\"ngForm\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <ircc-cl-lib-input\n    name=\"chipContentText\"\n    [(ngModel)]=\"chipContentText\"\n    placeholder=\"Add Chip\"\n  >\n  </ircc-cl-lib-input>\n</form>\n<div class=\"chip-list\">\n  <lib-chip-item\n    *ngFor=\"let chip of chipList; let idx = index\"\n    [chipContent]=\"chip\"\n    (iconClickEvent)=\"removeChipItem(idx)\"\n  ></lib-chip-item>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i3.ChipItemComponent, selector: "lib-chip-item", inputs: ["chipContent"], outputs: ["iconClickEvent"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chip-list', template: "<form\n  #form=\"ngForm\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <ircc-cl-lib-input\n    name=\"chipContentText\"\n    [(ngModel)]=\"chipContentText\"\n    placeholder=\"Add Chip\"\n  >\n  </ircc-cl-lib-input>\n</form>\n<div class=\"chip-list\">\n  <lib-chip-item\n    *ngFor=\"let chip of chipList; let idx = index\"\n    [chipContent]=\"chip\"\n    (iconClickEvent)=\"removeChipItem(idx)\"\n  ></lib-chip-item>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { chipList: [{
                type: Input
            }], chipListChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9sZWdhY3ktb2xkL2NoaXBzL2NoaXAtbGlzdC9jaGlwLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2xlZ2FjeS1vbGQvY2hpcHMvY2hpcC1saXN0L2NoaXAtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU0vRSxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO1FBRlUsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUU5QyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsY0FBYyxDQUFDLE9BQWU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7K0dBbkJVLGlCQUFpQjttR0FBakIsaUJBQWlCLHNJQ045QixvYUFrQkE7NEZEWmEsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLGVBQWU7MEVBSWhCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0ksY0FBYztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoaXAtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwLWxpc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoaXBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hpcExpc3Q/OiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIGNoaXBMaXN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxzdHJpbmc+PigpO1xuICBjaGlwQ29udGVudFRleHQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgcmVtb3ZlQ2hpcEl0ZW0oY2hpcElkeDogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGlwTGlzdD8uc3BsaWNlKGNoaXBJZHgsIDEpO1xuICAgIHRoaXMuY2hpcExpc3RDaGFuZ2UuZW1pdCh0aGlzLmNoaXBMaXN0KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmNoaXBDb250ZW50VGV4dCkge1xuICAgICAgdGhpcy5jaGlwTGlzdD8ucHVzaCh0aGlzLmNoaXBDb250ZW50VGV4dCk7XG4gICAgICB0aGlzLmNoaXBMaXN0Q2hhbmdlLmVtaXQodGhpcy5jaGlwTGlzdCk7XG4gICAgICB0aGlzLmNoaXBDb250ZW50VGV4dCA9ICcnO1xuICAgIH1cbiAgfVxufVxuIiwiPGZvcm1cbiAgI2Zvcm09XCJuZ0Zvcm1cIlxuICAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiXG4+XG4gIDxpcmNjLWNsLWxpYi1pbnB1dFxuICAgIG5hbWU9XCJjaGlwQ29udGVudFRleHRcIlxuICAgIFsobmdNb2RlbCldPVwiY2hpcENvbnRlbnRUZXh0XCJcbiAgICBwbGFjZWhvbGRlcj1cIkFkZCBDaGlwXCJcbiAgPlxuICA8L2lyY2MtY2wtbGliLWlucHV0PlxuPC9mb3JtPlxuPGRpdiBjbGFzcz1cImNoaXAtbGlzdFwiPlxuICA8bGliLWNoaXAtaXRlbVxuICAgICpuZ0Zvcj1cImxldCBjaGlwIG9mIGNoaXBMaXN0OyBsZXQgaWR4ID0gaW5kZXhcIlxuICAgIFtjaGlwQ29udGVudF09XCJjaGlwXCJcbiAgICAoaWNvbkNsaWNrRXZlbnQpPVwicmVtb3ZlQ2hpcEl0ZW0oaWR4KVwiXG4gID48L2xpYi1jaGlwLWl0ZW0+XG48L2Rpdj5cbiJdfQ==