/**
 * TODO: This particular component, while functional, is not ideal. Components should not import other components directly in the .ts
 * unless absolutely necessary. Furthermore, the use of DoCheck, while interesting, is not ideal, since it ignores the built-in
 * angular lifecycle hooks and change detection.
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { InputComponent } from '../../form-components/input/input.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../chips/chip-item/chip-item.component";
import * as i3 from "@ngx-translate/core";
export class AutocompleteComponent {
    constructor(differs) {
        this.differs = differs;
        //TODO: Change this to a config
        this.options = [];
        this.title = `Title`;
        this.hintText = `Hint Text`;
        this.name = `Add Name`;
        this.error = false;
        this.limit = 0;
        this.selectValueChange = new EventEmitter();
        this.savedSelectedOptions = [];
        this.selectedOptions = [];
        this.originalOptions = [];
        this.hideDropdown = true;
        this.isFocusInsideComponent = false;
        this.isComponentClicked = false;
        this.addHover = false;
        this.emptyResults = false;
        this.differ = this.differs.find({}).create();
    }
    handleKeyDown(event) {
        event.stopPropagation();
        if (this.hideDropdown === false || this.options.length > 0) {
            this.inputComponent?.clearvalue();
            this.returnOptionsToDefault();
            this.isComponentClicked = false;
            this.isFocusInsideComponent = false;
            this.hideDropdown = true;
        }
    }
    clickInside(event) {
        const target = event.target;
        if (this.hideDropdown === true &&
            target.type === `text` &&
            this.options.length > 0) {
            this.isFocusInsideComponent = true;
            this.isComponentClicked = true;
            this.toggleDropDown();
            this.addHover = true;
        }
        else if (target.classList.contains('select-target') ||
            target.classList.contains(`selected`)) {
            this.isComponentClicked = false;
            this.isFocusInsideComponent = false;
            this.toggleDropDown();
        }
    }
    clickout() {
        if (!this.isFocusInsideComponent && this.isComponentClicked) {
            this.toggleDropDown();
            this.inputComponent?.clearvalue();
            this.returnOptionsToDefault();
            this.isComponentClicked = false;
        }
        this.isFocusInsideComponent = false;
    }
    onMouseEnter() {
        this.addHover = false;
    }
    ngDoCheck() {
        const change = this.differ.diff(this);
        if (change) {
            change.forEachChangedItem((item) => {
                if (item.key === `options`) {
                    this.selectValueChange.emit(this.selectedOptions);
                }
            });
        }
    }
    valueChange(event) {
        this.filterList(event);
    }
    filterList(filterValue) {
        if (filterValue.length < 1) {
            this.returnOptionsToDefault();
        }
        else {
            const filteredOptions = this.originalOptions.filter((value) => {
                return value.text.toLowerCase().includes(filterValue.toLowerCase());
            });
            this.options = filteredOptions.slice(0);
            if (this.options.length === 0) {
                this.emptyResults = true;
            }
            else {
                this.emptyResults = false;
            }
        }
    }
    checkActive(value) {
        for (const selectedOption of this.selectedOptions) {
            if (selectedOption.value === value) {
                return true;
            }
        }
        return false;
    }
    returnOptionsToDefault() {
        this.emptyResults = false;
        this.options = this.originalOptions.slice(0);
    }
    toggleDropDown() {
        this.hideDropdown = !this.hideDropdown;
        this.inputComponent?.focusInput(this.hideDropdown);
    }
    toggleDropDownKey(event) {
        if (event.keyCode === 13) {
            this.toggleDropDown();
        }
    }
    removeChipItem(index) {
        this.selectedOptions.splice(index, 1);
        this.returnOptionsToDefault();
    }
    removeAllChipItems() {
        this.selectedOptions = [];
        this.returnOptionsToDefault();
    }
    selectAll() {
        for (const option of this.options) {
            this.selectedOptions.push(option);
        }
        this.returnOptionsToDefault();
    }
    selectIndex(index) {
        if (this.limit !== 0 && this.selectedOptions.length >= this.limit) {
            return;
        }
        else {
            this.inputComponent?.clearvalue();
            this.returnOptionsToDefault();
            if (this.checkDuplicated(index) === false) {
                this.selectedOptions.push(this.options[index]);
            }
        }
    }
    checkDuplicated(index) {
        return this.selectedOptions.some((element) => {
            if (element.value === this.options[index].value) {
                return true;
            }
            return false;
        });
    }
    ngOnInit() {
        this.selectedOptions = [];
        this.originalOptions = this.options.slice(0);
        this.selectedOptions = this.savedSelectedOptions;
        this.savedSelectedOptions = [];
        this.returnOptionsToDefault();
    }
}
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i0.KeyValueDiffers }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: AutocompleteComponent, selector: "lib-autocomplete", inputs: { options: "options", title: "title", hintText: "hintText", name: "name", error: "error", limit: "limit", savedSelectedOptions: "savedSelectedOptions" }, outputs: { selectValueChange: "selectValueChange" }, host: { listeners: { "window:keydown.escape": "handleKeyDown($event)", "click": "clickInside($event)", "document:click": "clickout()" } }, viewQueries: [{ propertyName: "inputComponent", first: true, predicate: InputComponent, descendants: true, static: true }], ngImport: i0, template: "<div\n  class=\"autocomplete-container\"\n  [ngClass]=\"{ error: error }\"\n>\n  <div>\n    <!-- <jl-pr-sclp-input\n      [label]=\"title\"\n      [hintText]=\"hintText\"\n      [placeholder]=\"'+ ' + (name | translate)\"\n      [error]=\"error\"\n      (valueChange)=\"valueChange($event)\"\n    > -->\n    <lib-chip-item\n      *ngFor=\"let option of selectedOptions; let index = index\"\n      [chipContent]=\"option['text']\"\n      (iconClickEvent)=\"removeChipItem(index)\"\n    ></lib-chip-item>\n    <!-- </jl-pr-sclp-input> -->\n  </div>\n\n  <div\n    class=\"autocomplete-options\"\n    [ngClass]=\"hideDropdown === false ? '' : 'hide'\"\n    (mouseenter)=\"onMouseEnter()\"\n  >\n    <div\n      *ngIf=\"limit === 0\"\n      class=\"option autocomplete-target all-results\"\n      (click)=\"selectAll()\"\n      [tabindex]=\"0\"\n      [ngClass]=\"emptyResults === false ? '' : 'hide-option'\"\n    >\n      <p class=\"select-target\">\n        {{ 'AllOptionsForAutocomplete' | translate }} {{ title | translate }}s\n      </p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      *ngFor=\"let option of options; let index = index; first as isFirst\"\n      (click)=\"selectIndex(index)\"\n      [tabindex]=\"index + 1\"\n      [ngClass]=\"checkActive(option['value']) ? 'active' : ''\"\n    >\n      <p class=\"select-target\">{{ option['text'] }}</p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      [ngClass]=\"emptyResults === false ? 'hide-option' : ''\"\n    >\n      <p>{{ 'NoResults' | translate }}</p>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.ChipItemComponent, selector: "lib-chip-item", inputs: ["chipContent"], outputs: ["iconClickEvent"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-autocomplete', template: "<div\n  class=\"autocomplete-container\"\n  [ngClass]=\"{ error: error }\"\n>\n  <div>\n    <!-- <jl-pr-sclp-input\n      [label]=\"title\"\n      [hintText]=\"hintText\"\n      [placeholder]=\"'+ ' + (name | translate)\"\n      [error]=\"error\"\n      (valueChange)=\"valueChange($event)\"\n    > -->\n    <lib-chip-item\n      *ngFor=\"let option of selectedOptions; let index = index\"\n      [chipContent]=\"option['text']\"\n      (iconClickEvent)=\"removeChipItem(index)\"\n    ></lib-chip-item>\n    <!-- </jl-pr-sclp-input> -->\n  </div>\n\n  <div\n    class=\"autocomplete-options\"\n    [ngClass]=\"hideDropdown === false ? '' : 'hide'\"\n    (mouseenter)=\"onMouseEnter()\"\n  >\n    <div\n      *ngIf=\"limit === 0\"\n      class=\"option autocomplete-target all-results\"\n      (click)=\"selectAll()\"\n      [tabindex]=\"0\"\n      [ngClass]=\"emptyResults === false ? '' : 'hide-option'\"\n    >\n      <p class=\"select-target\">\n        {{ 'AllOptionsForAutocomplete' | translate }} {{ title | translate }}s\n      </p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      *ngFor=\"let option of options; let index = index; first as isFirst\"\n      (click)=\"selectIndex(index)\"\n      [tabindex]=\"index + 1\"\n      [ngClass]=\"checkActive(option['value']) ? 'active' : ''\"\n    >\n      <p class=\"select-target\">{{ option['text'] }}</p>\n    </div>\n    <div\n      class=\"option autocomplete-target\"\n      [ngClass]=\"emptyResults === false ? 'hide-option' : ''\"\n    >\n      <p>{{ 'NoResults' | translate }}</p>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.KeyValueDiffers }]; }, propDecorators: { inputComponent: [{
                type: ViewChild,
                args: [InputComponent, { static: true }]
            }], options: [{
                type: Input
            }], title: [{
                type: Input
            }], hintText: [{
                type: Input
            }], name: [{
                type: Input
            }], error: [{
                type: Input
            }], limit: [{
                type: Input
            }], selectValueChange: [{
                type: Output
            }], savedSelectedOptions: [{
                type: Input
            }], handleKeyDown: [{
                type: HostListener,
                args: ['window:keydown.escape', ['$event']]
            }], clickInside: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], clickout: [{
                type: HostListener,
                args: ['document:click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudC1saWIvc3JjL2xpYi9sZWdhY3ktb2xkL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2xlZ2FjeS1vbGQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBSVosU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFlN0UsTUFBTSxPQUFPLHFCQUFxQjtJQXdCaEMsWUFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFwQjVDLCtCQUErQjtRQUN0QixZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN2QixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Qsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBYyxFQUFFLENBQUM7UUFFOUMsb0JBQWUsR0FBYyxFQUFFLENBQUM7UUFDaEMsb0JBQWUsR0FBYyxFQUFFLENBQUM7UUFFaEMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQUcsS0FBSyxDQUFD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IHdoaWxlIGZ1bmN0aW9uYWwsIGlzIG5vdCBpZGVhbC4gQ29tcG9uZW50cyBzaG91bGQgbm90IGltcG9ydCBvdGhlciBjb21wb25lbnRzIGRpcmVjdGx5IGluIHRoZSAudHNcbiAqIHVubGVzcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4gRnVydGhlcm1vcmUsIHRoZSB1c2Ugb2YgRG9DaGVjaywgd2hpbGUgaW50ZXJlc3RpbmcsIGlzIG5vdCBpZGVhbCwgc2luY2UgaXQgaWdub3JlcyB0aGUgYnVpbHQtaW5cbiAqIGFuZ3VsYXIgbGlmZWN5Y2xlIGhvb2tzIGFuZCBjaGFuZ2UgZGV0ZWN0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRG9DaGVjayxcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBLZXlWYWx1ZURpZmZlcixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mb3JtLWNvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Jztcbi8vVE9ETzogVGhpcyBzaG91bGQgYmUgY2hhbmdlZC4gSWRlYWxseSB0aGUgY29tcG9uZW50IGRvZXNuJ3QgbmVlZCB0byBrbm93IGFib3V0IHRoZXNlLCBhbmQgY2FuIGp1c3Rcbi8vYWRkIHRoZW0gaW4gdXNpbmcgdGhlIHRlbXBsYXRlLlxuaW1wb3J0IHsgQ2hpcEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9jaGlwcy9jaGlwLWl0ZW0vY2hpcC1pdGVtLmNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBJT3B0aW9uIHtcbiAgLy9DaGFuZ2VkOiBJbnRlcmZhY2VzIHNob3VsZCBBTFdBWVMgc3RhcnQgd2l0aCAnSScuXG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG4gIEBWaWV3Q2hpbGQoSW5wdXRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGlucHV0Q29tcG9uZW50PzogSW5wdXRDb21wb25lbnQ7XG5cbiAgLy9UT0RPOiBDaGFuZ2UgdGhpcyB0byBhIGNvbmZpZ1xuICBASW5wdXQoKSBvcHRpb25zOiBJT3B0aW9uW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGUgPSBgVGl0bGVgO1xuICBASW5wdXQoKSBoaW50VGV4dCA9IGBIaW50IFRleHRgO1xuICBASW5wdXQoKSBuYW1lID0gYEFkZCBOYW1lYDtcbiAgQElucHV0KCkgZXJyb3IgPSBmYWxzZTtcbiAgQElucHV0KCkgbGltaXQgPSAwO1xuICBAT3V0cHV0KCkgc2VsZWN0VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHNhdmVkU2VsZWN0ZWRPcHRpb25zOiBJT3B0aW9uW10gPSBbXTtcblxuICBzZWxlY3RlZE9wdGlvbnM6IElPcHRpb25bXSA9IFtdO1xuICBvcmlnaW5hbE9wdGlvbnM6IElPcHRpb25bXSA9IFtdO1xuICBpbnB1dFZhbHVlPzogc3RyaW5nO1xuICBoaWRlRHJvcGRvd24gPSB0cnVlO1xuICBpc0ZvY3VzSW5zaWRlQ29tcG9uZW50ID0gZmFsc2U7XG4gIGlzQ29tcG9uZW50Q2xpY2tlZCA9IGZhbHNlO1xuICBhZGRIb3ZlciA9IGZhbHNlO1xuICBlbXB0eVJlc3VsdHMgPSBmYWxzZTtcblxuICBkaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcbiAgICB0aGlzLmRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHt9KS5jcmVhdGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5oaWRlRHJvcGRvd24gPT09IGZhbHNlIHx8IHRoaXMub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlucHV0Q29tcG9uZW50Py5jbGVhcnZhbHVlKCk7XG4gICAgICB0aGlzLnJldHVybk9wdGlvbnNUb0RlZmF1bHQoKTtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzRm9jdXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrSW5zaWRlKGV2ZW50OiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duID09PSB0cnVlICYmXG4gICAgICB0YXJnZXQudHlwZSA9PT0gYHRleHRgICYmXG4gICAgICB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy5pc0ZvY3VzSW5zaWRlQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcERvd24oKTtcbiAgICAgIHRoaXMuYWRkSG92ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtdGFyZ2V0JykgfHxcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYHNlbGVjdGVkYClcbiAgICApIHtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzRm9jdXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcERvd24oKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycpXG4gIGNsaWNrb3V0KCkge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzSW5zaWRlQ29tcG9uZW50ICYmIHRoaXMuaXNDb21wb25lbnRDbGlja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3BEb3duKCk7XG4gICAgICB0aGlzLmlucHV0Q29tcG9uZW50Py5jbGVhcnZhbHVlKCk7XG4gICAgICB0aGlzLnJldHVybk9wdGlvbnNUb0RlZmF1bHQoKTtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNGb2N1c0luc2lkZUNvbXBvbmVudCA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuYWRkSG92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBjaGFuZ2UgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMpO1xuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIGNoYW5nZS5mb3JFYWNoQ2hhbmdlZEl0ZW0oKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBgb3B0aW9uc2ApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5maWx0ZXJMaXN0KGV2ZW50KTtcbiAgfVxuXG4gIGZpbHRlckxpc3QoZmlsdGVyVmFsdWU6IGFueSkge1xuICAgIGlmIChmaWx0ZXJWYWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICB0aGlzLnJldHVybk9wdGlvbnNUb0RlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcmlnaW5hbE9wdGlvbnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBmaWx0ZXJlZE9wdGlvbnMuc2xpY2UoMCk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmVtcHR5UmVzdWx0cyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtcHR5UmVzdWx0cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGVja0FjdGl2ZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCBzZWxlY3RlZE9wdGlvbiBvZiB0aGlzLnNlbGVjdGVkT3B0aW9ucykge1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuT3B0aW9uc1RvRGVmYXVsdCgpIHtcbiAgICB0aGlzLmVtcHR5UmVzdWx0cyA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3JpZ2luYWxPcHRpb25zLnNsaWNlKDApO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURyb3BEb3duKCkge1xuICAgIHRoaXMuaGlkZURyb3Bkb3duID0gIXRoaXMuaGlkZURyb3Bkb3duO1xuICAgIHRoaXMuaW5wdXRDb21wb25lbnQ/LmZvY3VzSW5wdXQodGhpcy5oaWRlRHJvcGRvd24pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURyb3BEb3duS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3BEb3duKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ2hpcEl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5yZXR1cm5PcHRpb25zVG9EZWZhdWx0KCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQWxsQ2hpcEl0ZW1zKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5yZXR1cm5PcHRpb25zVG9EZWZhdWx0KCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWxsKCkge1xuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgIH1cbiAgICB0aGlzLnJldHVybk9wdGlvbnNUb0RlZmF1bHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGltaXQgIT09IDAgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID49IHRoaXMubGltaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dENvbXBvbmVudD8uY2xlYXJ2YWx1ZSgpO1xuICAgICAgdGhpcy5yZXR1cm5PcHRpb25zVG9EZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5jaGVja0R1cGxpY2F0ZWQoaW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKHRoaXMub3B0aW9uc1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrRHVwbGljYXRlZChpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNvbWUoKGVsZW1lbnQ6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PT0gdGhpcy5vcHRpb25zW2luZGV4XS52YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLm9yaWdpbmFsT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5zbGljZSgwKTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2F2ZWRTZWxlY3RlZE9wdGlvbnM7XG4gICAgdGhpcy5zYXZlZFNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMucmV0dXJuT3B0aW9uc1RvRGVmYXVsdCgpO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRhaW5lclwiXG4gIFtuZ0NsYXNzXT1cInsgZXJyb3I6IGVycm9yIH1cIlxuPlxuICA8ZGl2PlxuICAgIDwhLS0gPGpsLXByLXNjbHAtaW5wdXRcbiAgICAgIFtsYWJlbF09XCJ0aXRsZVwiXG4gICAgICBbaGludFRleHRdPVwiaGludFRleHRcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cIicrICcgKyAobmFtZSB8IHRyYW5zbGF0ZSlcIlxuICAgICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICAgICh2YWx1ZUNoYW5nZSk9XCJ2YWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+IC0tPlxuICAgIDxsaWItY2hpcC1pdGVtXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9uczsgbGV0IGluZGV4ID0gaW5kZXhcIlxuICAgICAgW2NoaXBDb250ZW50XT1cIm9wdGlvblsndGV4dCddXCJcbiAgICAgIChpY29uQ2xpY2tFdmVudCk9XCJyZW1vdmVDaGlwSXRlbShpbmRleClcIlxuICAgID48L2xpYi1jaGlwLWl0ZW0+XG4gICAgPCEtLSA8L2psLXByLXNjbHAtaW5wdXQ+IC0tPlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgY2xhc3M9XCJhdXRvY29tcGxldGUtb3B0aW9uc1wiXG4gICAgW25nQ2xhc3NdPVwiaGlkZURyb3Bkb3duID09PSBmYWxzZSA/ICcnIDogJ2hpZGUnXCJcbiAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoKVwiXG4gID5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cImxpbWl0ID09PSAwXCJcbiAgICAgIGNsYXNzPVwib3B0aW9uIGF1dG9jb21wbGV0ZS10YXJnZXQgYWxsLXJlc3VsdHNcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbCgpXCJcbiAgICAgIFt0YWJpbmRleF09XCIwXCJcbiAgICAgIFtuZ0NsYXNzXT1cImVtcHR5UmVzdWx0cyA9PT0gZmFsc2UgPyAnJyA6ICdoaWRlLW9wdGlvbidcIlxuICAgID5cbiAgICAgIDxwIGNsYXNzPVwic2VsZWN0LXRhcmdldFwiPlxuICAgICAgICB7eyAnQWxsT3B0aW9uc0ZvckF1dG9jb21wbGV0ZScgfCB0cmFuc2xhdGUgfX0ge3sgdGl0bGUgfCB0cmFuc2xhdGUgfX1zXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJvcHRpb24gYXV0b2NvbXBsZXRlLXRhcmdldFwiXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IGxldCBpbmRleCA9IGluZGV4OyBmaXJzdCBhcyBpc0ZpcnN0XCJcbiAgICAgIChjbGljayk9XCJzZWxlY3RJbmRleChpbmRleClcIlxuICAgICAgW3RhYmluZGV4XT1cImluZGV4ICsgMVwiXG4gICAgICBbbmdDbGFzc109XCJjaGVja0FjdGl2ZShvcHRpb25bJ3ZhbHVlJ10pID8gJ2FjdGl2ZScgOiAnJ1wiXG4gICAgPlxuICAgICAgPHAgY2xhc3M9XCJzZWxlY3QtdGFyZ2V0XCI+e3sgb3B0aW9uWyd0ZXh0J10gfX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJvcHRpb24gYXV0b2NvbXBsZXRlLXRhcmdldFwiXG4gICAgICBbbmdDbGFzc109XCJlbXB0eVJlc3VsdHMgPT09IGZhbHNlID8gJ2hpZGUtb3B0aW9uJyA6ICcnXCJcbiAgICA+XG4gICAgICA8cD57eyAnTm9SZXN1bHRzJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==