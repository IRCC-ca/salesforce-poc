import { Component, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HiddenNavComponent {
    constructor() {
        this.config = {
            id: ''
        };
    }
    scrollToAnchor(id) {
        if (id) {
            const el = document.getElementById(id);
            el?.scrollIntoView();
            el?.setAttribute('tabindex', '-1');
            el?.focus();
        }
    }
    handleKeyDown(key, link) {
        key === 'Tab' ? this.showNav() : null;
        key === 'Enter' && link ? this.scrollToAnchor(link) : null;
    }
    showNav() {
        const container = document.getElementById('hidden-nav-container');
        const btns = document.getElementsByClassName('hidden-btns');
        container?.classList.add('active-nav');
    }
}
HiddenNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HiddenNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HiddenNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: HiddenNavComponent, selector: "ircc-cl-lib-hidden-nav", inputs: { config: "config" }, host: { listeners: { "keydown": "handleKeyDown($event.key)" } }, ngImport: i0, template: "<div id=\"hidden-nav-container\">\n  <ng-container *ngFor=\"let link of config?.skipLinks; let i = index\">\n    <button\n      class=\"hidden-btns\"\n      role=\"link\"\n      (click)=\"scrollToAnchor(link.href)\"\n      (keydown)=\"handleKeyDown($event.key, link.href)\"\n      [tabindex]=\"i + 1\"\n      [attr.aria-label]=\"link.ariaLabel\"\n    >\n      {{ link.title }}\n    </button>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], preserveWhitespaces: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HiddenNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ircc-cl-lib-hidden-nav', template: "<div id=\"hidden-nav-container\">\n  <ng-container *ngFor=\"let link of config?.skipLinks; let i = index\">\n    <button\n      class=\"hidden-btns\"\n      role=\"link\"\n      (click)=\"scrollToAnchor(link.href)\"\n      (keydown)=\"handleKeyDown($event.key, link.href)\"\n      [tabindex]=\"i + 1\"\n      [attr.aria-label]=\"link.ariaLabel\"\n    >\n      {{ link.title }}\n    </button>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { config: [{
                type: Input
            }], handleKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event.key']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZGVuLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvaGVhZGVyLWZvb3Rlci9oaWRkZW4tbmF2L2hpZGRlbi1uYXYuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2hlYWRlci1mb290ZXIvaGlkZGVuLW5hdi9oaWRkZW4tbmF2LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBaUJ2RSxNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBS1csV0FBTSxHQUFxQjtZQUNsQyxFQUFFLEVBQUUsRUFBRTtTQUNQLENBQUM7S0FzQkg7SUFwQkMsY0FBYyxDQUFDLEVBQVU7UUFDdkIsSUFBSSxFQUFFLEVBQUU7WUFDTixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQztZQUNyQixFQUFFLEVBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFHRCxhQUFhLENBQUMsR0FBVyxFQUFFLElBQWE7UUFDdEMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEMsR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RCxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsU0FBUyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0hBeEJVLGtCQUFrQjtvR0FBbEIsa0JBQWtCLDZKQ2pCL0Isc2FBY0E7NEZER2Esa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLHdCQUF3Qjs4QkFJekIsTUFBTTtzQkFBZCxLQUFLO2dCQWNOLGFBQWE7c0JBRFosWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTa2lwTGlua0NvbmZpZyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIaWRkZW5OYXZDb25maWcge1xuICBpZDogc3RyaW5nO1xuICBza2lwTGlua3M/OiBJU2tpcExpbmtDb25maWdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXJjYy1jbC1saWItaGlkZGVuLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oaWRkZW4tbmF2LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWRkZW5OYXZDb21wb25lbnQge1xuICBASW5wdXQoKSBjb25maWc6IElIaWRkZW5OYXZDb25maWcgPSB7XG4gICAgaWQ6ICcnXG4gIH07XG5cbiAgc2Nyb2xsVG9BbmNob3IoaWQ6IHN0cmluZykge1xuICAgIGlmIChpZCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICBlbD8uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIGVsPy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBlbD8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQua2V5J10pXG4gIGhhbmRsZUtleURvd24oa2V5OiBzdHJpbmcsIGxpbms/OiBzdHJpbmcpIHtcbiAgICBrZXkgPT09ICdUYWInID8gdGhpcy5zaG93TmF2KCkgOiBudWxsO1xuICAgIGtleSA9PT0gJ0VudGVyJyAmJiBsaW5rID8gdGhpcy5zY3JvbGxUb0FuY2hvcihsaW5rKSA6IG51bGw7XG4gIH1cblxuICBzaG93TmF2KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbmF2LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWRkZW4tYnRucycpO1xuICAgIGNvbnRhaW5lcj8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW5hdicpO1xuICB9XG59XG4iLCI8ZGl2IGlkPVwiaGlkZGVuLW5hdi1jb250YWluZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGluayBvZiBjb25maWc/LnNraXBMaW5rczsgbGV0IGkgPSBpbmRleFwiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiaGlkZGVuLWJ0bnNcIlxuICAgICAgcm9sZT1cImxpbmtcIlxuICAgICAgKGNsaWNrKT1cInNjcm9sbFRvQW5jaG9yKGxpbmsuaHJlZilcIlxuICAgICAgKGtleWRvd24pPVwiaGFuZGxlS2V5RG93bigkZXZlbnQua2V5LCBsaW5rLmhyZWYpXCJcbiAgICAgIFt0YWJpbmRleF09XCJpICsgMVwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxpbmsuYXJpYUxhYmVsXCJcbiAgICA+XG4gICAgICB7eyBsaW5rLnRpdGxlIH19XG4gICAgPC9idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=