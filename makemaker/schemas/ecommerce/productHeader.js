export default {
  name: "productHeader",
  title: "productHeader",
  type: "document",
  description:
    "These specifies the heading of the contents that shows in the carousel component",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
