import { Input } from '@angular/core';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../indicator/indicator.component";
export class navItemStatusComponent {
    constructor() {
        this.status = 'notStarted';
    }
    ngOnInit() {
    }
}
navItemStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemStatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
navItemStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemStatusComponent, selector: "ircc-cl-lib-nav-item-status", inputs: { status: "status" }, ngImport: i0, template: "<div>\n  <ng-container [ngSwitch]=\"status\">\n    <ng-container *ngSwitchCase=\"'notStarted'\">\n      <ircc-cl-lib-indicator></ircc-cl-lib-indicator>\n    </ng-container>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: i2.IndicatorComponent, selector: "ircc-cl-lib-indicator", inputs: ["config", "size", "type", "icon", "category", "purpose", "status", "palette", "ariaLabel", "tabIndex"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-item-status', template: "<div>\n  <ng-container [ngSwitch]=\"status\">\n    <ng-container *ngSwitchCase=\"'notStarted'\">\n      <ircc-cl-lib-indicator></ircc-cl-lib-indicator>\n    </ng-container>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { status: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0tc3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1zdGF0dXMvbmF2LWl0ZW0tc3RhdHVzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1zdGF0dXMvbmF2LWl0ZW0tc3RhdHVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPbEQsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQU1XLFdBQU0sR0FBbUMsWUFBWSxDQUFDO0tBS2hFO0lBSEMsUUFBUTtJQUVSLENBQUM7O29IQU5VLHNCQUFzQjt3R0FBdEIsc0JBQXNCLGlHQ1RuQywyTUFPQTs0RkRFYSxzQkFBc0I7a0JBSmxDLFNBQVM7K0JBQ0UsNkJBQTZCOzhCQUs5QixNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERTU2l6ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29uc3RhbnRzL2psLWNvbXBvbmVudHMuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhdHVzIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLW5hdi1pdGVtLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtaXRlbS1zdGF0dXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIG5hdkl0ZW1TdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHN0YXR1cyA6IGtleW9mIHR5cGVvZiBOYXZpZ2F0aW9uU3RhdHVzID0gJ25vdFN0YXJ0ZWQnO1xuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInN0YXR1c1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidub3RTdGFydGVkJ1wiPlxuICAgICAgPGlyY2MtY2wtbGliLWluZGljYXRvcj48L2lyY2MtY2wtbGliLWluZGljYXRvcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==