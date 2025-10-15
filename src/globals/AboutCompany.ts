import { GlobalConfig } from 'payload'

export const AboutCompany : GlobalConfig = {
  slug: 'about-company',
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
      name: 'text',
      label: 'Текст описание',
      type: 'richText',
      required: true,
    },
    {
      name: 'poster',
      label: 'Постер к видео',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'video',
      label: 'Видео',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'contactType',
      label: 'Контакты',
      type: 'array',
      fields: [
        {
          name: 'type',
          label: 'Тип контакта',
          type: 'select',
          options: [
            {
              label: 'Телефон',
              value: 'phone',
            },
            {
              label: 'Адрес',
              value: 'address',
            },
            {
              label: 'График работы',
              value: 'timing',
            },
          ]
        },
        {
          name: 'value',
          label: 'Значение',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Ссылка',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Описание',
          type: 'text',
        },
      ]
    },
    {
      name: 'socials',
      label: 'Соц.сети',
      type: 'array',
      fields: [
        {
          name: 'type',
          label: 'Тип соц.сети',
          type: 'select',
          options: [
            {
              label: 'Telegram',
              value: 'telegram',
            },
            {
              label: 'WhatsApp',
              value: 'whatsapp',
            },
          ]
        },
        {
          name: 'link',
          label: 'Ссылка',
          type: 'text',
        },
      ]
    },
  ]
}
