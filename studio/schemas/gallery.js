export default {
  name: "gallery",
  title: "Gallerie",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "text",
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
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "publishedAt",
      title: "Publié le",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      time: "publishedAt",
      media: "img",
    },
    prepare(selection) {
      const { publishedAt } = selection;
      return Object.assign({}, selection, {
        subtitle: publishedAt && `le ${publishedAt}`,
      });
    },
  },
};
