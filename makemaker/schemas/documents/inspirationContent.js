import { TbBulb } from "react-icons/tb";

export default {
  name: "inspirationContent",
  title: "InspirationContent",
  icon: TbBulb,
  type: "document",
  description: "This is a schema for documenting ",
  fields: [
    {
      name: "inspireTitle",
      title: "Inspiration Title",
      type: "string",
      description: "title should be assigned only once in the schema",
      required: true,
    },
    {
      name: "description",
      title: "Description",
      maxLength: 200,
      type: "string",
      description: "description should be assigned only once in the schema",
      required: true,
    },
    {
      name: "inspireImage",
      title: "Inspiration Image",
      type: "image",
      description: "image should be assigned only once in the schema",
      required: true,
      options: {
        // list: [{ value: "Introduction" }, { value: "Advanced" }],
        hotspot: true,
      },
    },
  ],
};
