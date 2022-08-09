import { MdLocationOn } from "react-icons/md";

export default {
  name: "popup",
  type: "document",
  title: "Popup",
  icon: MdLocationOn,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "loaction",
      type: "geopoint",
    },
    {
      name: "openingHours",
      type: "object",
      title: "OpeningHours",
      fields: [
        {
          name: "from",
          type: "datetime",
        },
        {
          name: "to",
          type: "datetime",
        },
      ],
    },
  ],
};
