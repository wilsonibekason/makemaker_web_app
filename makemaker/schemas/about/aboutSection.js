export default {
  name: "aboutSection",
  title: "About Section",
  type: "document",
  description: "These is the artticle section of makemakers about page",
  fields: [
    {
      name: "articleTitle",
      title: "Article Title",
      type: "string",
    },
    {
      name: "articleDesc",
      title: "Article Description",
      type: "string",
    },
    {
      name: "comapanyName",
      title: "Company Name",
      type: "string",
    },
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
      name: "cardImgUrl",
      title: "Card Image Url",
      type: "image",
      description:
        "image size must be at least 800-1500px for proper adjustment",
      options: { hotspot: true },
    },
  ],
};
