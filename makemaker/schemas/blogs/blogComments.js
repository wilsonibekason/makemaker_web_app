import { GrContact } from "react-icons/gr";

export default {
  name: "blogComments",
  title: "Blog Comments",
  type: "document",
  icon: GrContact,
  fields: [
    {
      name: "fullName",
      title: "FullName",
      type: "string",
      required: true,
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      required: true,
    },
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      display: {
        placeholder: "Enter Your Comment Title",
        rules: [
          {
            required: true,
            message: "Please enter the title of your comment",
          },
        ],
      },
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
};
