import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LabelButtonService {
    constructor() {
        this.labelButtonClickSubj = new BehaviorSubject('');
        this.labelButtonClickObs$ = this.labelButtonClickSubj.asObservable();
    }
    buttonPress(id) {
        this.labelButtonClickSubj.next(id);
    }
}
LabelButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LabelButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LabelButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwtYnV0dG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnQtbGliL3NyYy9saWIvc2hhcmVkL2xhYmVsL2xhYmVsLWJ1dHRvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUlVLHlCQUFvQixHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELHlCQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUtqRTtJQUhDLFdBQVcsQ0FBQyxFQUFVO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0hBTlUsa0JBQWtCO29IQUFsQixrQkFBa0IsY0FGakIsTUFBTTs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQnV0dG9uU2VydmljZSB7XG4gIHByaXZhdGUgbGFiZWxCdXR0b25DbGlja1N1YmogPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICBsYWJlbEJ1dHRvbkNsaWNrT2JzJCA9IHRoaXMubGFiZWxCdXR0b25DbGlja1N1YmouYXNPYnNlcnZhYmxlKCk7XG5cbiAgYnV0dG9uUHJlc3MoaWQ6IHN0cmluZykge1xuICAgIHRoaXMubGFiZWxCdXR0b25DbGlja1N1YmoubmV4dChpZCk7XG4gIH1cbn1cbiJdfQ==