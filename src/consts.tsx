

export const PHONE: string = '+7 (900) 451-59-00' as const;
export const VK: string = 'vk.ru' as const;
export const INSTAGRAM: string = 'instagram.com' as const;

export const MAP_KEY = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YKEY}&lang=ru_RU` as const;
export const MAP_PLACE_LINK = "https://yandex.ru/maps/-/CLeBvK7a" as const;

export const MAP_PLACE: {
    center: [number, number],
    zoom: number,
} = {
    center: [47.208568, 56.114587],
    zoom: 19
};

export const MAP_PLACE_MARKER: [number, number] = [47.208570, 56.114584]

export const TELEGRAM_LINK = "https://t.me/Hairdresser_Magic_Scissors" as const;
export const WHATSAPP_LINK = "https://wtsp.cc/79004515900" as const;
export const ADDRESS = "г.&nbsp;Чебоксары, ул.&nbsp;Академика В.Н.Челомея,&nbsp;12";

export const BUTTON_TYPE = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

export const BUTTON_SIZE = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
} as const;


export const MENU = [
    {
        TEXT: 'Услуги',
        PATH: '/services'
    },
    {
        TEXT: 'Специалисты',
        PATH: '/specialists'
    },
    {
        TEXT: 'О нас',
        PATH: '/about'
    },
    {
        TEXT: 'Контакты',
        PATH: '/contacts'
    },
]

export const YM_METHOD = {
    HIT: 'hit',
    REACH_GOAL: 'reachGoal',
}
