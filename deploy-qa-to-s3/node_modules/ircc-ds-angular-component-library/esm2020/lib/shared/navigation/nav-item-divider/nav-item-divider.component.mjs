import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class navItemDividerComponent {
    constructor() {
        this.config = {
            id: '',
            children: [],
            label: '',
            type: 'link'
        };
        this.id = '';
    }
    ngOnInit() {
        this.id !== '' ? (this.config.id = this.id) : undefined;
    }
}
navItemDividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemDividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
navItemDividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: navItemDividerComponent, selector: "ircc-cl-lib-nav-divider", inputs: { config: "config", id: "id" }, ngImport: i0, template: "<div\n  [id]=\"config.id\"\n  class=\"nav-seperator\"\n></div>\n", preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: navItemDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-nav-divider', template: "<div\n  [id]=\"config.id\"\n  class=\"nav-seperator\"\n></div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], id: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0tZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL25hdmlnYXRpb24vbmF2LWl0ZW0tZGl2aWRlci9uYXYtaXRlbS1kaXZpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9zaGFyZWQvbmF2aWdhdGlvbi9uYXYtaXRlbS1kaXZpZGVyL25hdi1pdGVtLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyx1QkFBdUI7SUFVbEM7UUFUUyxXQUFNLEdBQXVCO1lBQ3BDLEVBQUUsRUFBRSxFQUFFO1lBQ04sUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQztRQUVPLE9BQUUsR0FBVyxFQUFFLENBQUM7SUFFVixDQUFDO0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRCxDQUFDOztxSEFkVSx1QkFBdUI7eUdBQXZCLHVCQUF1Qix1R0NQcEMsa0VBSUE7NEZER2EsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLHlCQUF5QjswRUFJMUIsTUFBTTtzQkFBZCxLQUFLO2dCQU9HLEVBQUU7c0JBQVYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU5hdmlnYXRpb25EaXZpZGVyIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lyY2MtY2wtbGliLW5hdi1kaXZpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1pdGVtLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIG5hdkl0ZW1EaXZpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBJTmF2aWdhdGlvbkRpdmlkZXIgPSB7XG4gICAgaWQ6ICcnLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBsYWJlbDogJycsXG4gICAgdHlwZTogJ2xpbmsnXG4gIH07XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkICE9PSAnJyA/ICh0aGlzLmNvbmZpZy5pZCA9IHRoaXMuaWQpIDogdW5kZWZpbmVkO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtpZF09XCJjb25maWcuaWRcIlxuICBjbGFzcz1cIm5hdi1zZXBlcmF0b3JcIlxuPjwvZGl2PlxuIl19