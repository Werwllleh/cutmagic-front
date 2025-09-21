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

export const ymReach = (event: string, options?: string): void => {
    if (typeof window === 'undefined' || window.location.origin.includes('localhost')) {
        return;
    }

    const ymCounterId = Number(process.env.NEXT_PUBLIC_YMETRIKA);
    if (!ymCounterId || isNaN(ymCounterId)) {
        console.warn('Yandex Metrika counter ID is not configured');
        return;
    }

    if (typeof window.ym === 'function') {
        window.ym(ymCounterId, 'reachGoal', event, options);
    }
}
