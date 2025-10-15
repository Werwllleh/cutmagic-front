import type { GlobalConfig } from 'payload'

export const MainSeoBlock: GlobalConfig = {
  slug: 'main-seo-block',
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
      label: 'Описание для SEO блока на главной',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      label: 'Изображение',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
