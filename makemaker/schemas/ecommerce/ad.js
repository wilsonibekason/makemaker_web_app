import {MdInserEmoticon} from 'react-icons/md';

export default {
  name: "ad",
  type: "document",
  title: "Ad",
  icon: MdInserEmoticon,
  fields: [
{
    name: "heading",
    type: "string",
    title: "Heading"
},
{
    name: "tagLine",
    type: "string",
    title: "TagLine"
},
{
    name: "illustration",
    type: "string",
    title: "Illustration"
}
  ]
};
