// sanity/schemaTypes/policyAnalysis.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'policyAnalysis',
  title: 'Policy Analysis',
  type: 'document',
  groups: [
    {name: 'meta', title: 'Metadata'},
    {name: 'content', title: 'Content'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'meta',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Pillar',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          {title: 'Policy', value: 'Policy'},
          {title: 'Economics', value: 'Economics'},
          {title: 'Technology', value: 'Technology'},
        ],
      },
    }),
    // FIX FOR UNKNOWN FIELDS ERROR: Explicitly defining them here
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          {title: 'Active', value: 'Active'},
          {title: 'Proposed', value: 'Proposed'},
          {title: 'In Committee', value: 'In Committee'},
        ],
      },
    }),
    defineField({
      name: 'impactLevel',
      title: 'Impact Level',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          {title: 'Critical', value: 'Critical'},
          {title: 'High', value: 'High'},
          {title: 'Medium', value: 'Medium'},
        ],
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'meta',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}],
    }),
  ],
})
