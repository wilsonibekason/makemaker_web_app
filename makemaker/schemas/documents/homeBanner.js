export default {
  name: "banners",
  title: "PageSection",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutusImage",
      title: "AboutImage",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "productImage",
      title: "ProductImage",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "blogImage",
      title: "BlogImage",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "desc",
      title: "Desc",
      type: "string",
    },

    {
      name: "pageName",
      title: "Page Name",
      type: "string",
      required: true,
    },
  ],
};
