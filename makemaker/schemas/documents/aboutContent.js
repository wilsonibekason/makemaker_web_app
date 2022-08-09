import { TbLayersIntersect } from "react-icons/tb";

export default {
  name: "aboutContent",
  title: "About Content",
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
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "icons",
      type: "string",
      required: true,
      title: "Description for FontAwesome Icons",
      description: "Note: Only one item is needed",
    },
    {
      name: "categoriesItem",
      title: "CategoriesItem",
      type: "array",
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: "string", // type is required
          title: "items",
        },
      ],
    },
  ],
};
