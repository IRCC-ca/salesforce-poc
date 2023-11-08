import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipListComponent } from './chips/chip-list/chip-list.component';
import { SecondaryChipsComponent } from './chips/secondary-chips/secondary-chips.component';
import { ChipItemComponent } from './chips/chip-item/chip-item.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { IrccDsAngularComponentsSharedModule } from '../shared/ircc-ds-angular-component-shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
const IrccDsLegacyOldComponents = [
    AutocompleteComponent,
    ChipListComponent,
    SecondaryChipsComponent,
    ChipItemComponent,
    SearchInputComponent
];
export class IrccDsAngularLegacyOldModule {
}
IrccDsAngularLegacyOldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IrccDsAngularLegacyOldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, declarations: [AutocompleteComponent,
        ChipListComponent,
        SecondaryChipsComponent,
        ChipItemComponent,
        SearchInputComponent], imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule], exports: [AutocompleteComponent,
        ChipListComponent,
        SecondaryChipsComponent,
        ChipItemComponent,
        SearchInputComponent] });
IrccDsAngularLegacyOldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, imports: [CommonModule,
        IrccDsAngularComponentsSharedModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IrccDsAngularLegacyOldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...IrccDsLegacyOldComponents],
                    imports: [
                        CommonModule,
                        IrccDsAngularComponentsSharedModule,
                        TranslateModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [...IrccDsLegacyOldComponents]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXJjYy1kcy1hbmd1bGFyLWxlZ2FjeS1vbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50LWxpYi9zcmMvbGliL2xlZ2FjeS1vbGQvaXJjYy1kcy1hbmd1bGFyLWxlZ2FjeS1vbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWxFLE1BQU0seUJBQXlCLEdBQUc7SUFDaEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUNyQixDQUFDO0FBYUYsTUFBTSxPQUFPLDRCQUE0Qjs7MEhBQTVCLDRCQUE0QjsySEFBNUIsNEJBQTRCLGlCQWxCdkMscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLG9CQUFvQixhQU1sQixZQUFZO1FBQ1osbUNBQW1DO1FBQ25DLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CLGFBZHJCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixvQkFBb0I7MkhBY1QsNEJBQTRCLFlBUnJDLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7NEZBSVYsNEJBQTRCO2tCQVh4QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLEdBQUcseUJBQXlCLENBQUM7b0JBQzVDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1DQUFtQzt3QkFDbkMsZUFBZTt3QkFDZixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyx5QkFBeUIsQ0FBQztpQkFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hpcExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NoaXBzL2NoaXAtbGlzdC9jaGlwLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY29uZGFyeUNoaXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGlwcy9zZWNvbmRhcnktY2hpcHMvc2Vjb25kYXJ5LWNoaXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGlwSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2hpcHMvY2hpcC1pdGVtL2NoaXAtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IElyY2NEc0FuZ3VsYXJDb21wb25lbnRzU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2lyY2MtZHMtYW5ndWxhci1jb21wb25lbnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBJcmNjRHNMZWdhY3lPbGRDb21wb25lbnRzID0gW1xuICBBdXRvY29tcGxldGVDb21wb25lbnQsXG4gIENoaXBMaXN0Q29tcG9uZW50LFxuICBTZWNvbmRhcnlDaGlwc0NvbXBvbmVudCxcbiAgQ2hpcEl0ZW1Db21wb25lbnQsXG4gIFNlYXJjaElucHV0Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5JcmNjRHNMZWdhY3lPbGRDb21wb25lbnRzXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJcmNjRHNBbmd1bGFyQ29tcG9uZW50c1NoYXJlZE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbLi4uSXJjY0RzTGVnYWN5T2xkQ29tcG9uZW50c11cbn0pXG5leHBvcnQgY2xhc3MgSXJjY0RzQW5ndWxhckxlZ2FjeU9sZE1vZHVsZSB7fVxuIl19