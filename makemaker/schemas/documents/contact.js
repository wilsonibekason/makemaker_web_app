import { GrContact } from "react-icons/gr";

export default {
  name: "contacts",
  title: "Contact",
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
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
};
