export default {
  name: "vendor",
  title: "Vendor",
  description: "A set of features for building and deploying websites.",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: { hotspot: true },
    },
    {
      name: "description",
      type: "blockContent",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
