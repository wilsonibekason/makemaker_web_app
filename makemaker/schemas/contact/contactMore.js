import { MdGroupWork } from "react-icons/md";

export default {
  name: "contactMore",
  title: "Contact More",
  icon: MdGroupWork,
  description: "Shows a list of all contacts in a group.",
  initial: true,
  type: "document",
  fields: [
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "text",
      placeholder: "phone number",
      required: true,
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "text",
      placeholder: "whatsapp number",
      required: true,
    },
  ],
};
