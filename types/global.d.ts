declare interface Window {
    ym?: (counterId: number, action: string, event: string, options?: any) => void;
}

declare const ym: typeof window.ym;
