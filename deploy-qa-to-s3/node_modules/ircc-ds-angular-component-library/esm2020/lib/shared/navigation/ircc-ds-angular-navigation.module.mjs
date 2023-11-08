import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrccDsAngularComponentsSharedModule } from '../../shared/ircc-ds-angular-component-shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { navigationComponent } from './navigation.component';
import { navItemHeadingComponent } from './nav-item-heading/nav-item-heading.component';
import { navItemNavComponent } from './nav-item-nav/nav-item-nav.component';
import { navItemAccordionComponent } from './nav-item-accordion/nav-item-accordion.component';
import { navItemStatusComponent } from './nav-item-status/nav-item-status.component';
import { navItemDividerComponent } from './nav-item-divider/nav-item-divider.component';
import * as i0 from "@angular/core";
const IrccDsNavigationComponents = [
    navigationComponent,
    navItemHeadingComponent,
    navItemNavComponent,
    navItemAccordionComponent,
    navItemDividerComponent,
    navItemStatusComponent
];
export class IrccDsAngularNavigationModule {
}
IrccDsAngularNavigationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularNavigationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, declarations: [navigationComponent,
        navItemHeadingComponent,
        navItemNavComponent,
        navItemAccordionComponent,
        navItemDividerComponent,
        navItemStatusComponent], imports: [CommonModule, IrccDsAngularComponentsSharedModule, TranslateModule], exports: [navigationComponent,
        navItemHeadingComponent,
        navItemNavComponent,
        navItemAccordionComponent,
        navItemDividerComponent,
        navItemStatusComponent] });
IrccDsAngularNavigationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, imports: [CommonModule, IrccDsAngularComponentsSharedModule, TranslateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularNavigationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsNavigationComponents],
                    imports: [CommonModule, IrccDsAngularComponentsSharedModule, TranslateModule],
                    exports: [...IrccDsNavigationComponents]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXJjYy1kcy1hbmd1bGFyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL3NoYXJlZC9uYXZpZ2F0aW9uL2lyY2MtZHMtYW5ndWxhci1uYXZpZ2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBRXhGLE1BQU0sMEJBQTBCLEdBQUc7SUFDakMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixzQkFBc0I7Q0FDdkIsQ0FBQztBQU9GLE1BQU0sT0FBTyw2QkFBNkI7OzJIQUE3Qiw2QkFBNkI7NEhBQTdCLDZCQUE2QixpQkFieEMsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixzQkFBc0IsYUFLWixZQUFZLEVBQUUsbUNBQW1DLEVBQUUsZUFBZSxhQVY1RSxtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjs0SEFRWCw2QkFBNkIsWUFIOUIsWUFBWSxFQUFFLG1DQUFtQyxFQUFFLGVBQWU7NEZBR2pFLDZCQUE2QjtrQkFMekMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLDBCQUEwQixDQUFDO29CQUM3QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUNBQW1DLEVBQUUsZUFBZSxDQUFDO29CQUM3RSxPQUFPLEVBQUUsQ0FBQyxHQUFHLDBCQUEwQixDQUFDO2lCQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSXJjY0RzQW5ndWxhckNvbXBvbmVudHNTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvaXJjYy1kcy1hbmd1bGFyLWNvbXBvbmVudC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgbmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgbmF2SXRlbUhlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL25hdi1pdGVtLWhlYWRpbmcvbmF2LWl0ZW0taGVhZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgbmF2SXRlbU5hdkNvbXBvbmVudCB9IGZyb20gJy4vbmF2LWl0ZW0tbmF2L25hdi1pdGVtLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgbmF2SXRlbUFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2LWl0ZW0tYWNjb3JkaW9uL25hdi1pdGVtLWFjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgbmF2SXRlbVN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vbmF2LWl0ZW0tc3RhdHVzL25hdi1pdGVtLXN0YXR1cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgbmF2SXRlbURpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL25hdi1pdGVtLWRpdmlkZXIvbmF2LWl0ZW0tZGl2aWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBJcmNjRHNOYXZpZ2F0aW9uQ29tcG9uZW50cyA9IFtcbiAgbmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgbmF2SXRlbUhlYWRpbmdDb21wb25lbnQsXG4gIG5hdkl0ZW1OYXZDb21wb25lbnQsXG4gIG5hdkl0ZW1BY2NvcmRpb25Db21wb25lbnQsXG4gIG5hdkl0ZW1EaXZpZGVyQ29tcG9uZW50LFxuICBuYXZJdGVtU3RhdHVzQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5JcmNjRHNOYXZpZ2F0aW9uQ29tcG9uZW50c10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElyY2NEc0FuZ3VsYXJDb21wb25lbnRzU2hhcmVkTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBleHBvcnRzOiBbLi4uSXJjY0RzTmF2aWdhdGlvbkNvbXBvbmVudHNdXG59KVxuZXhwb3J0IGNsYXNzIElyY2NEc0FuZ3VsYXJOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=