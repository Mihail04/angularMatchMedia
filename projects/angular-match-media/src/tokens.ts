import {InjectionToken} from "@angular/core";
import {MediaQueryItem, ViewportType} from "./model";

export const DEFAULT_MEDIA_QUERY = new InjectionToken<MediaQueryItem[]>('DEFAULT_MEDIA_QUERY', {
    factory: () => [
        {
            name: ViewportType.MOBILE,
            query: 'only screen and (min-width: 320px) and (max-width: 550px)'
        },
        {
            name: ViewportType.TABLET,
            query: 'only screen and (min-width:551px) and (max-width: 1024px)'
        },
        {
            name: ViewportType.SMALL_DESKTOP_SCREEN,
            query: 'only screen and (min-width: 1025px) and (max-width: 1440px)'
        },
        {
            name: ViewportType.DESKTOP_SCREEN,
            query: 'only screen and (min-width: 1440px) and (max-width: 1920px)'
        },
        {
            name: ViewportType.LARGE_DESKTOP_SCREEN,
            query: 'only screen and (min-width: 1921px)'
        }
    ]
});