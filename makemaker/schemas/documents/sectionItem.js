import { TbLayersIntersect } from "react-icons/tb";

export default {
  name: "sectionItems",
  title: "SectionItems",
  type: "document",
  icon: TbLayersIntersect,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      required: true,
    },
    {
      name: "sectionIcons",
      title: "SectionIcons",
      type: "array",
      options: { hotspot: true },
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: "logo", // type is required
          title: "Author",
        },
      ],
      items: [
        {
          name: "icon",
          title: "Icon",
          type: "image",
          required: true,
        },
      ],
    },
  ],
};
