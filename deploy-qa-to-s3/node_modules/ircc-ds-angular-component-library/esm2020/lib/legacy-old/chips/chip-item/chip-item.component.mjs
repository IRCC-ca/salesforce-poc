import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ChipItemComponent {
    constructor() {
        this.iconClickEvent = new EventEmitter();
    }
    onIconClick() {
        this.iconClickEvent.emit();
    }
    onEnterKeyPress() {
        this.iconClickEvent.emit();
    }
}
ChipItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ChipItemComponent, selector: "lib-chip-item", inputs: { chipContent: "chipContent" }, outputs: { iconClickEvent: "iconClickEvent" }, ngImport: i0, template: "<div\n  class=\"chip-item\"\n  tabindex=\"0\"\n  (keydown.enter)=\"onEnterKeyPress()\"\n>\n  <span class=\"chip-text\">{{ chipContent || '' }}</span>\n  <span\n    class=\"icon-container\"\n    (click)=\"onIconClick()\"\n  >\n    <i class=\"fa-solid fa-circle-xmark clickable-icon\"></i>\n  </span>\n</div>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ChipItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chip-item', template: "<div\n  class=\"chip-item\"\n  tabindex=\"0\"\n  (keydown.enter)=\"onEnterKeyPress()\"\n>\n  <span class=\"chip-text\">{{ chipContent || '' }}</span>\n  <span\n    class=\"icon-container\"\n    (click)=\"onIconClick()\"\n  >\n    <i class=\"fa-solid fa-circle-xmark clickable-icon\"></i>\n  </span>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { chipContent: [{
                type: Input
            }], iconClickEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9sZWdhY3ktb2xkL2NoaXBzL2NoaXAtaXRlbS9jaGlwLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2xlZ2FjeS1vbGQvY2hpcHMvY2hpcC1pdGVtL2NoaXAtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU12RSxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO1FBRlUsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFaEIsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7OytHQVpVLGlCQUFpQjttR0FBakIsaUJBQWlCLDRJQ045QixzVEFhQTs0RkRQYSxpQkFBaUI7a0JBSjdCLFNBQVM7K0JBQ0UsZUFBZTswRUFJaEIsV0FBVztzQkFBbkIsS0FBSztnQkFDSSxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoaXAtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwLWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoaXBJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2hpcENvbnRlbnQ/OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBpY29uQ2xpY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25JY29uQ2xpY2soKSB7XG4gICAgdGhpcy5pY29uQ2xpY2tFdmVudC5lbWl0KCk7XG4gIH1cblxuICBvbkVudGVyS2V5UHJlc3MoKSB7XG4gICAgdGhpcy5pY29uQ2xpY2tFdmVudC5lbWl0KCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJjaGlwLWl0ZW1cIlxuICB0YWJpbmRleD1cIjBcIlxuICAoa2V5ZG93bi5lbnRlcik9XCJvbkVudGVyS2V5UHJlc3MoKVwiXG4+XG4gIDxzcGFuIGNsYXNzPVwiY2hpcC10ZXh0XCI+e3sgY2hpcENvbnRlbnQgfHwgJycgfX08L3NwYW4+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiXG4gICAgKGNsaWNrKT1cIm9uSWNvbkNsaWNrKClcIlxuICA+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUteG1hcmsgY2xpY2thYmxlLWljb25cIj48L2k+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19