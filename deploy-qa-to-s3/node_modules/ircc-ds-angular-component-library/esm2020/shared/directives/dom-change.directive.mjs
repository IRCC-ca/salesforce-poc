import { Directive, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @see https://stackblitz.com/edit/angular-mutationobserver-example?file=app%2Fapp.module.ts,app%2Fdom-change.directive.ts,app%2Fapp.component.ts
 */
export class DomChangeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.domChange = new EventEmitter();
        const element = this.elementRef.nativeElement;
        this.changes = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => this.domChange.emit(mutation));
        });
        this.changes.observe(element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    ngOnDestroy() {
        this.changes.disconnect();
    }
}
DomChangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomChangeDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
DomChangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: DomChangeDirective, selector: "[domChange]", outputs: { domChange: "domChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomChangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domChange]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { domChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWNoYW5nZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9zaGFyZWQvZGlyZWN0aXZlcy9kb20tY2hhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFFWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7O0FBRXZCOztHQUVHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtJQU03QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRm5DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3BDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLFNBQTJCLEVBQUUsRUFBRTtZQUNsRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBd0IsRUFBRSxFQUFFLENBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM5QixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDNUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0hBeEJVLGtCQUFrQjtvR0FBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCO2lHQUtRLFNBQVM7c0JBRGYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9hbmd1bGFyLW11dGF0aW9ub2JzZXJ2ZXItZXhhbXBsZT9maWxlPWFwcCUyRmFwcC5tb2R1bGUudHMsYXBwJTJGZG9tLWNoYW5nZS5kaXJlY3RpdmUudHMsYXBwJTJGYXBwLmNvbXBvbmVudC50c1xuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZG9tQ2hhbmdlXSdcbn0pXG5leHBvcnQgY2xhc3MgRG9tQ2hhbmdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZG9tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+XG4gICAgICAgIHRoaXMuZG9tQ2hhbmdlLmVtaXQobXV0YXRpb24pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGFuZ2VzLm9ic2VydmUoZWxlbWVudCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlcy5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbiJdfQ==