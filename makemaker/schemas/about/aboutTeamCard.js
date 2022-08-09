export default {
  name: "CardContent",
  title: "Card Content",
  type: "document",
  fields: [
    {
      name: "cardTitle",
      title: "Card Title",
      type: "string",
    },
    {
      name: "cardDesc",
      title: "Card Description",
      type: "string",
    },
    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "Twitter",
      title: "Twitter",
      type: "text",
    },
    {
      name: "LinkedIn",
      title: "LinkedIn",
      type: "text",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "text",
    },
  ],
};
