import { MdLooks } from "react-icons/md";

export default {
  name: "brands",
  type: "document",
  title: "Brand",
  icon: MdLooks,
  description:
    "The brand component is a container that can be used to display information about the product.",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "colors",
      type: "object",
      fields: [
        {
          name: "primary",
          type: "color",
        },
        {
          name: "secondary",
          type: "color",
        },
        {
          name: "ambient",
          type: "color",
        },
      ],
    },
    {
      name: "logo",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logo",
    },
  },
};
