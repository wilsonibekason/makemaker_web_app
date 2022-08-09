import { MdFamilyRestroom } from "react-icons/md";

export default {
  name: "reactOut",
  title: "Reach Out",
  description: "A reach out of the world.",
  type: "document",
  icon: MdFamilyRestroom,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
      required: true,
      minLength: 1,
      maxLength: 100,
      description: "This should be assigned only once in the schema",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      required: true,
      minLength: 1,
      maxLength: 100,
      description: "This should be assigned only once in the schema",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      required: true,
      description: "This should be assigned only once in the schema",
      options: { hotspot: true },
    },
  ],
};
