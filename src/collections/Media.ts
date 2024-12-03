import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Collapsible",
      type: 'collapsible',
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        }
      ]
    }
  ],
  hooks: {
    beforeChange: [( { operation }) => console.log(`operation: ${operation}`)]
  }
}
