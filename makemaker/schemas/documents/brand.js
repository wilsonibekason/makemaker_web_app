import {GiSkills} from 'react-icons/gi';

export default {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    icon: GiSkills,
    fields: [
        {
            name: "imgUrl",
            type: "image",
            title: "imageUrl",
            size: "small",
            options: {hotspot: true},
        },
        {
            name: 'name',
            title: "name",
            type: "string",
        }
    ]
}