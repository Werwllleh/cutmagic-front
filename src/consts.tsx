export const PHONE:string = '+7 (900) 451-59-00' as const;
export const VK:string = 'vk.ru' as const;
export const INSTAGRAM:string = 'instagram.com' as const;

export const MAP_LINK = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YKEY}&lang=ru_RU`;
export const MAP_PLACE = {
  center: [47.209361, 56.114425],
  zoom: 18
}