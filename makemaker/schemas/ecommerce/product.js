import { MdLocalDrink } from "react-icons/md";

export default {
  name: "product",
  type: "document",
  title: "Product",
  icon: MdLocalDrink,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
      options: { hotspot: true },
    },
    {
      name: "blurb",
      type: "localeString",
      title: "Blurb",
    },
    {
      name: "body",
      type: "localeBlockContent",
      title: "Body",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "defaultProductVariant",
      title: "DefaultProductVariant",
      type: "productVariant",
    },
    {
      name: "variants",
      type: "array",
      title: "Variants",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      madia: "defaultProductVariant.images[0]",
    },
  },
};
