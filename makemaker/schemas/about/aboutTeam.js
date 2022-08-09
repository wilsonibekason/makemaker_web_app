import { MdGroupWork } from "react-icons/md";

export default {
  name: "aboutTeam",
  title: "About Team ",
  icon: MdGroupWork,
  description: "This schema is only for Makemakers team",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
