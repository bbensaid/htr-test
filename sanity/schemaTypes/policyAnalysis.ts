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
    // --- METADATA FIELDS ---
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

    // --- THE BODY (Where the Image lives) ---
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
          },
        },
        // 2. IMAGE BLOCK (This enables the UI)
        {
          type: 'image',
          title: 'Chart / Image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
        // 3. TABLE BLOCK
        {
          type: 'object',
          name: 'code',
          title: 'Data Table',
          fields: [
            {name: 'code', type: 'text'},
            {name: 'language', type: 'string'},
          ],
        },
        // 4. VIDEO BLOCK (Upgraded for Local Uploads)
        {
          type: 'object',
          name: 'video',
          title: 'Video Player',
          fields: [
            // Option A: YouTube Link
            {
              name: 'url',
              type: 'url',
              title: 'YouTube/Vimeo URL',
            },
            // Option B: Local File Upload (NEW)
            {
              name: 'videoFile',
              type: 'file',
              title: 'Upload Video File (MP4/WebM)',
              options: {accept: 'video/*'},
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        // 5. AUDIO BLOCK (New!)
        {
          type: 'object',
          name: 'audio',
          title: 'Audio Player',
          fields: [
            {
              name: 'audioFile',
              type: 'file',
              title: 'Upload Audio File (MP3/WAV)',
              options: {accept: 'audio/*'},
            },
            {
              name: 'title',
              type: 'string',
              title: 'Episode Title',
            },
            {
              name: 'duration',
              type: 'string',
              title: 'Duration (e.g. 14:20)',
            },
          ],
        },
      ],
    }),
  ],
})
