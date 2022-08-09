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
      type: "text",
      required: true,
      display: {
        placeholder: "Enter Name",
        rules: [
          {
            required: true,
            message: "Please enter a name",
          },
        ],
      },
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      required: true,
      display: {
        placeholder: "Enter Email",
        rules: [
          {
            required: true,
            message: "Please enter a valid email address",
          },
        ],
      },
    },
    {
      name: "title",
      title: "Blog Title",
      type: "text",
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
