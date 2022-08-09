import { BsBook } from "react-icons/bs";

export default {
  name: "header",
  title: "Header",
  type: "document",
  icon: BsBook,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
      required: true,
      placeholder: "Title",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      required: true,
    },
    {
      name: "headerImage",
      title: "Header Image",
      type: "image",
      options: { hostpot: true },
    },
    {
      name: "imageSlide",
      title: "Image Slide",
      type: "array",

      of: [
        {
          name: "imageItem",
          title: "Image Item",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
