declare interface Window {
    ym?: (counterId: number, action: string, event: string, options?: string) => void;
    ymaps?: typeof ymaps; // глобальный объект Яндекс.Карт
    initYMap?: () => void;
}

declare const ym: typeof window.ym;

export {};

declare global {
    namespace ymaps {
        class Map {
            constructor(
                element: string | HTMLElement,
                state: {
                    center: number[];
                    zoom: number;
                    controls?: string[];
                }
            );

            geoObjects: {
                add: (obj: any) => void;
            };

            destroy(): void;
        }

        class Placemark {
            constructor(
                geometry: number[],
                properties?: object,
                options?: object
            );
        }

        function ready(callback: () => void): void;
    }

    interface Window {
        ym?: (
            counterId: number,
            action: string,
            event: string,
            options?: string
        ) => void;

        ymaps?: typeof ymaps;
        initYMap?: () => void;
    }

    const ym: (
        counterId: number,
        action: string,
        event: string,
        options?: string
    ) => void;
}
