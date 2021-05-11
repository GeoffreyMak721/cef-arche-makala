export default {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
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
      name: "categorie",
      title: "Categorie",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      title: "Visible",
      name: "approved",
      type: "boolean",
      description: "L'article ne sera pas visible dans l'application.",
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
      title: "Publiée le",
      type: "datetime",
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
  ],

  preview: {
    select: {
      title: "title",
      author: "categorie.title",
      media: "img",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `categorie: ${author}`,
      });
    },
  },
};
