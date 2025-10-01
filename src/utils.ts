export const normalizePhone = (number: string): string => {

    const digitsOnly = number.replace(/\D/g, '');

    if (digitsOnly.length === 11) {
        if (digitsOnly.startsWith('8')) {
            return '+7' + digitsOnly.slice(1);
        }
        if (digitsOnly.startsWith('7')) {
            return '+' + digitsOnly;
        }
    }

    if (digitsOnly.length === 10) {
        return '+7' + digitsOnly;
    }

    return number;

}

export const ymReach = (method: string, target: string, options?: string) => {
    if (typeof window === "undefined") return;

    const ymId = Number(process.env.NEXT_PUBLIC_YMETRIKA);

    if (window.ym) {
        window.ym(ymId, method, target, options);
    } else {
        const interval = setInterval(() => {
            if (window.ym) {
                window.ym(ymId, method, target, options);
                clearInterval(interval);
            }
        }, 300);

        setTimeout(() => clearInterval(interval), 5000);
    }
};

export function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');

    if (!outer) return;

    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    // @ts-expect-error its_ok
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    // @ts-expect-error its_ok
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}
