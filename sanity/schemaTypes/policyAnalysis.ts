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
      of: [
        {
          type: 'block',
          // 1. DEFINE THE STYLES (Normal, H2, H3, Quote)
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          // 2. DEFINE THE DECORATORS (Bold, Italic, AND COLORS)
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              // NEW: Custom Color Highlighters
              {title: 'Policy Orange', value: 'highlight-policy'},
              {title: 'Econ Green', value: 'highlight-economics'},
              {title: 'Tech Indigo', value: 'highlight-tech'},
            ],
          },
        },
      ],
    }),
  ],
})
