import { GrContact } from "react-icons/gr";

export default {
  name: "reviews",
  title: "Reviews",
  icon: GrContact,
  type: "document",
  description: "A collection of reviews from the customers .",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "review",
      title: "review",
      type: "string",
    },
  ],
};
