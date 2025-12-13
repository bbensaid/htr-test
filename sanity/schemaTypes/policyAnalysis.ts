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

    // --- UPDATED PILLAR LIST (5 PILLARS) ---
    defineField({
      name: 'pillar',
      title: 'Pillar',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          {title: 'Policy (Orange)', value: 'Policy'},
          {title: 'Economics (Green)', value: 'Economics'},
          {title: 'Technology (Indigo)', value: 'Technology'},
          {title: 'Operations (Rose)', value: 'Operations'}, // NEW
          {title: 'Science (Teal)', value: 'Science'}, // NEW
        ],
      },
    }),

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

    // --- BODY FIELD (Updated with New Colors) ---
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        // 1. Text Block
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Policy Orange', value: 'highlight-policy'},
              {title: 'Econ Green', value: 'highlight-economics'},
              {title: 'Tech Indigo', value: 'highlight-tech'},
            ],
            // NEW: ANNOTATIONS (Links & Tooltips)
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
              {
                name: 'definition',
                type: 'object',
                title: 'Define Term',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [{type: 'definition'}], // Links to the schema we just made
                  },
                ],
              },
            ],
          },
        },

        // 2. Video Block
        {
          type: 'object',
          name: 'video',
          title: 'Video Player',
          fields: [
            {name: 'url', type: 'url', title: 'YouTube/Vimeo URL'},
            {
              name: 'videoFile',
              type: 'file',
              title: 'Upload Video File',
              options: {accept: 'video/*'},
            },
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },

        // 3. Image Block
        {
          type: 'image',
          title: 'Chart / Image',
          options: {hotspot: true},
          fields: [
            {name: 'caption', type: 'string', title: 'Caption'},
            {name: 'alt', type: 'string', title: 'Alt Text'},
          ],
        },

        // 4. Code/Table Block
        {
          type: 'object',
          name: 'code',
          title: 'Data Table',
          fields: [
            {name: 'code', type: 'text'},
            {name: 'language', type: 'string'},
          ],
        },
        // Add this inside the 'body' array in policyAnalysis.ts
        {
          type: 'object',
          name: 'audio',
          title: 'Audio Player',
          fields: [
            {name: 'title', type: 'string', title: 'Audio Title'},
            {name: 'summary', type: 'string', title: 'Summary'},
            {
              name: 'file',
              type: 'file',
              title: 'Audio File',
              options: {accept: 'audio/*'},
            },
          ],
        },
      ],
    }),
  ],
})
