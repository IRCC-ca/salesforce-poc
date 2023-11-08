import { INavigationConfig, INavigationItem, INavigationItemAccordion, INavigationItemHeading, INavigationItemLink } from './navigation.types';
import * as i0 from "@angular/core";
export interface INavItemEvent {
    id: string;
    event: any;
}
export declare class NavigationService {
    private itemChangeSubj;
    itemChangeObs$: import("rxjs").Observable<string>;
    private navEventSubj;
    navEventObs$: import("rxjs").Observable<INavItemEvent>;
    private navConfigSubj;
    navConfigObs$: import("rxjs").Observable<INavigationConfig>;
    flattenedNavigation: Array<INavigationItem>;
    /**
     * Broadcast the config object of the value and flatten the array
     * @param update: INavigationConfig
     */
    setNavConfig(update: INavigationConfig): void;
    /**
     * General broadcast of an element update
     * @param event
     */
    setNavItem(update: INavigationItemLink | INavigationItemAccordion | INavigationItemHeading): void;
    /**
     * Broadcast element events
     * @param event: INavItemEvent where id is the id of the component broadcasting and event is the Event
     */
    navEvent(event: INavItemEvent): void;
    /**
     * Flatten an object into a simple array
     * @param obj object being flattened
     * @returns flattened array
     */
    private flatten;
    /**
     *
     * @param items flattened array
     * @param key of the key value pair ('id')
     * @param value id of the piece being searched for (update.id)
     * @returns
     */
    private findByKey;
    /**
     * Replace the contents of one object with those of another. This is done to keep our
     * memory trick going
     * @param obj1 object being updated
     * @param obj2 values to put in obj1
     */
    private setNavItemFields;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationService>;
}
