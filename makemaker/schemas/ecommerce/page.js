export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page Sections",
      of: [{ type: "hero" }, { type: "imageSection" }, { type: "textSection" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description:
        "Image for sharing previews for Facebook , Instagram, Twitter. etc ",
      fieldsets: "metadata",
      options: { hostpot: true },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
