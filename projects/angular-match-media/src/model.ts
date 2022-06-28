export enum ViewportType {
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
    SMALL_DESKTOP_SCREEN = 'SMALL_DESKTOP_SCREEN',
    DESKTOP_SCREEN = 'DESKTOP_SCREEN',
    LARGE_DESKTOP_SCREEN = 'LARGE_DESKTOP_SCREEN'
}

export interface MediaQueryItem {
    name: string;
    query: string;
}