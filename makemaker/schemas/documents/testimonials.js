import { MdEmojiPeople, MdPeople } from "react-icons/md";


export default {
    name: "testimonials",
    title: "Testimonials",
    icon: MdEmojiPeople,
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: 'company',
        title: "Company",
        type: "string",
      },
      {
        name: 'address',
        title: "Address",
        type: "string",
      },
      {
        name: 'imgUrl',
        title: "ImageUrl",
        type: "image",
        options: {
            hotspot: true,
        },
      },
      {
        name: "feedback",
        title: "Feedback",
        type: "string",
      }
    ]
}