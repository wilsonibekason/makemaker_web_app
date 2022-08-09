export default {
  name: "aboutHeader",
  title: "About Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      required: true,
      minLength: 10,
      maxLength: 50,
      type: "string",
    },
    {
      name: "description",
      title: "Descrition",
      required: true,
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      required: true,
      description: "Image must be at 1000 -2000px for proper adjustment",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
