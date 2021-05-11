export default {
  name: "event",
  title: "Evenement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sous-Titre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "badge",
      title: "Bande",
      type: "string",
    },
    {
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
