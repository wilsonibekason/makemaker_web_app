export default {
  name: "aboutTip",
  title: "About Tip",
  type: "document",
  description: "This schema should only contain the contents frim the  CEO ",
  fields: [
    {
      name: "headName",
      title: "Head Name",
      type: "string",
    },
    {
      name: "headDesc",
      title: "Head Description",
      type: "string",
    },
    {
      name: "headImageUrl",
      title: "Head Image ",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
