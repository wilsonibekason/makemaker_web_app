import { MdPeople } from "react-icons/md";

export default {
  name: "social",
  type: "document",
  title: "social",
  icon: MdPeople,
  fields: [
    {
      name: "channel",
      type: "string",
      description: "check your channels to see the social media links required",
      options: {
        list: ["twitter", "linkedIn", "facebook", "instagram"],
      },
    },
    {
      name: "title",
      title: "Title",
      description: "Initials must be a capital letter",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Initials must be a capital letter",
      type: "string",
    },

    {
      name: "socialName",
      type: "array",
      description:
        "describe your social media names and links based on the channel list",
      of: [
        {
          name: "names",
          title: "name",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "name",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "socialLink",
      type: "array",
      description:
        "describe your social media names and links based on the channel list",
      of: [
        {
          name: "links",
          title: "link",
          type: "object",
          fields: [
            {
              title: "link",
              name: "link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "socialIcons",
      type: "array",
      description: "This is a special kind of icons called fontAwesome icons",
      of: [
        {
          name: "icons",
          title: "icon",
          type: "object",
          fields: [
            {
              title: "icon",
              name: "icon",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
