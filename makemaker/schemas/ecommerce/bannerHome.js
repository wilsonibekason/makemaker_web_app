import { format } from "date-fns";

export default {
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
    {
      name: "productImage",
      title: " ProductImage",
      description:
        "This is the main image to be displayed on the products page",
      type: "array",
      of: [
        {
          type: "image",
          name: "imageItem",
          description: "The maxlength of the image should be three",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "This is the title that would appear on the products section displayed on the home page ",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      placeholder: "What is the description of this banner?",
      required: true,
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "discount",
      type: "number",
      title: "Discount",
      min: 0,
      max: 1,
      step: 0.01,
      required: true,
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      min: 0,
      max: 1,
      step: 0.01,
      required: true,
    },
    {
      name: "product",
      type: "string",
      title: "Product",
      required: true,
      description: "Important to add the products name",
    },
    {
      name: "saleTime",
      type: "string",
      title: "Sale Time",
      required: true,
      description: "The time at which the sale will be active",
    },
    {
      name: "tags",
      title: "Tags",
      description:
        "The tag schema query represents th categories for your ecommerce products ",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          description:
            "Make sure to add lowercase tags that rhyme with the category items you have in the  product section of the website",
          type: "string",
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     description: "Select the product you want to preview",
  //     publishedAt: "publishedAt",
  //   },
  //   prepare({ publishedAt }) {
  //     return {
  //       subtitle: publishedAt
  //         ? format(new Date(publishedAt), "p, dd/MM/YYYY")
  //         : "",
  //     };
  //   },
  // },
};
