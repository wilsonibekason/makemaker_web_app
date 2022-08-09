import { TbLayersIntersect } from "react-icons/tb";

export default {
  name: "strengthContent",
  title: "StrengthContent",
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
      name: "strengthIcon",
      title: "StrengthIcons",
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
      name: "linkUrl",
      title: "LinkUrl",
      type: "array",
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: "string", // type is required
          title: "items",
        },
      ],
    },
    {
      name: "strengthItem",
      title: "StrengthItem",
      type: "array",
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: "string", // type is required
          title: "items",
        },
      ],
    },
    {
      name: "strengthIcons",
      title: "StrengthIcons",
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
