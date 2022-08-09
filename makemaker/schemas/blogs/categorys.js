export default {
  name: "categorys",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "parents",
      title: "Parents",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "categorys" }],
        },
      ],
    },
  ],
};
