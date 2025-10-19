import type { GlobalConfig } from 'payload'

export const PromoModal: GlobalConfig = {
  slug: 'promo-modal',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'show',
      type: 'checkbox',
      label: 'Показать на сайте',
      defaultValue: false,
    },
    {
      name: 'title',
      label: 'Заголовок',
      type: 'richText',
      required: true,
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'richText',
      required: false,
    },
    {
      name: 'discount',
      label: 'Размер скидки',
      type: 'number',
      defaultValue: 0,
      required: false,
      validate: (value: number | null | undefined) => {
        if (typeof value !== 'number') return 'Введите число';
        if (value < 0) return 'Значение не может быть меньше 0';
        return true;
      },
    },
    {
      name: 'delay',
      label: 'Показать через (в мс)',
      type: 'number',
      defaultValue: 0,
      required: false,
      validate: (value: number | null | undefined) => {
        if (typeof value !== 'number') return 'Введите число';
        if (value < 0) return 'Значение не может быть меньше 0';
        return true;
      },
    },
    {
      name: 'disclaimer',
      label: 'Дисклеймер',
      type: 'richText',
      required: false,
    },
  ],
}
