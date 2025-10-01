

export const PHONE: string = '+7 (900) 451-59-00' as const;
export const VK: string = 'vk.ru' as const;
export const INSTAGRAM: string = 'instagram.com' as const;

export const MAP_KEY = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YKEY}&lang=ru_RU` as const;
export const MAP_PLACE_LINK = "https://yandex.ru/maps/-/CLeBvK7a" as const;
export const MAP_PLACE_ROUTE = "https://yandex.ru/maps/45/cheboksary/?ll=47.209389%2C56.114563&mode=routes&rtext=~56.114586%2C47.208570&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D151100985099&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=19.44" as const;
export const MAP_PLACE_COMPANY = "https://yandex.ru/maps/45/cheboksary/?ll=47.209502%2C56.114489&mode=poi&poi%5Bpoint%5D=47.208569%2C56.114585&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D151100985099&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=18.83" as const;

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
