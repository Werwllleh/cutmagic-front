import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'selectedFeatures', // required
      type: 'select', // required
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'Metallic Paint',
          value: 'metallic_paint',
        },
        {
          label: 'Alloy Wheels',
          value: 'alloy_wheels',
        },
        {
          label: 'Carbon Fiber Dashboard',
          value: 'carbon_fiber_dashboard',
        },
      ],
    },
  ],
  access: {
    read: () => true,
  }
}
