import { Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ThemeSwitchComponent {
    private renderer;
    isDarkTheme: boolean;
    currentTheme: string;
    previousTheme: string;
    darkModeQuery: any;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    toggleTheme(): void;
    handleDarkModeChange(event: MediaQueryListEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeSwitchComponent, "ircc-cl-lib-theme-switch", never, {}, {}, never, never, false>;
}
