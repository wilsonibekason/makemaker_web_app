import { TbNewSection } from "react-icons/tb";

export default {
  name: "sectionContent",
  title: "SectionContent",
  icon: TbNewSection,
  type: "document",
  description: "Length must be four",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      required: true,
      display: {
        render: (text, context) => {
          return `<p>${text}</p>`;
        },
      },
      elements: [
        {
          name: "title",
          type: "text",
          display: {
            render: (text, context) => {
              return `<h3>${text}</h3>`;
            },
          },
        },
      ],
    },
    {
      name: "icons",
      type: "string",
      required: true,
      title: "Description for FontAwesome Icons",
    },
  ],
};
