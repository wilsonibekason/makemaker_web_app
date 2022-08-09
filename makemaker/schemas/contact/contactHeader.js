import { MdGroupWork } from "react-icons/md";

export default {
  name: "contactHeader",
  title: "Contact Header",
  icon: MdGroupWork,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      required: true,
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      required: true,
      type: "text",
    },
  ],
};
