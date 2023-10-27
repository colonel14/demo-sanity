import { defineField, defineType } from "sanity";
export default defineType({
  name: "post",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
   
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
