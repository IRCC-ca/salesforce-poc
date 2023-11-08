import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { IrccDsAngularComponentsSharedModule } from '../shared/ircc-ds-angular-component-shared.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export class IrccDsAngularBannerModule {
}
IrccDsAngularBannerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularBannerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, declarations: [BannerComponent], imports: [IrccDsAngularComponentsSharedModule, CommonModule, TranslateModule], exports: [BannerComponent] });
IrccDsAngularBannerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, imports: [IrccDsAngularComponentsSharedModule, CommonModule, TranslateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularBannerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BannerComponent],
                    imports: [IrccDsAngularComponentsSharedModule, CommonModule, TranslateModule],
                    exports: [BannerComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXJjYy1kcy1hbmd1bGFyLWJhbm5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvYmFubmVyLWNvbXBvbmVudC9pcmNjLWRzLWFuZ3VsYXItYmFubmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQU90RCxNQUFNLE9BQU8seUJBQXlCOzt1SEFBekIseUJBQXlCO3dIQUF6Qix5QkFBeUIsaUJBSnJCLGVBQWUsYUFDcEIsbUNBQW1DLEVBQUUsWUFBWSxFQUFFLGVBQWUsYUFDbEUsZUFBZTt3SEFFZCx5QkFBeUIsWUFIMUIsbUNBQW1DLEVBQUUsWUFBWSxFQUFFLGVBQWU7NEZBR2pFLHlCQUF5QjtrQkFMckMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLG1DQUFtQyxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQzdFLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJcmNjRHNBbmd1bGFyQ29tcG9uZW50c1NoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pcmNjLWRzLWFuZ3VsYXItY29tcG9uZW50LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCYW5uZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbSXJjY0RzQW5ndWxhckNvbXBvbmVudHNTaGFyZWRNb2R1bGUsIENvbW1vbk1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlXSxcbiAgZXhwb3J0czogW0Jhbm5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSXJjY0RzQW5ndWxhckJhbm5lck1vZHVsZSB7fVxuIl19