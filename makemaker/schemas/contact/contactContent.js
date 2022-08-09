import { MdOutlineGroupWork } from "react-icons/md";

export default {
  name: "contact",
  title: "Contact",
  type: "document",
  icon: MdOutlineGroupWork,
  fields: [
    {
      name: "name",
      title: "Name",
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
      type: "text",
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
      name: "message",
      title: "Message",
      type: "text",
      required: true,
    },
  ],
};
