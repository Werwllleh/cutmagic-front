import type { GlobalConfig } from 'payload'

export const MainSeoBlock: GlobalConfig = {
  slug: 'main-seo-block',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      label: 'Описание для SEO блока на главной',
      type: 'textarea',
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
