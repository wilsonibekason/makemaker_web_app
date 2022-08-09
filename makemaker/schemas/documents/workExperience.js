import { MdGroupWork } from "react-icons/md";



export default {

    name: "workExperience",
    title: "Work Experience",
    icon: MdGroupWork,
    description: "The work experience of the web.",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
            },
            {
                name: "description",
                title: "Description",
                type: "string"
                },
                {
                    name: "company",
                    title: "Company",
                    type: "string"
                },
                    {
                        name: "image",
                        title: "Image",
                        type: "image"
                        },
                    ],
                    props: {
                        workExperience: {
                            type: Object,
                            required: true,
                            },
                            },
                            data() {
                                return {
                                    loading: false,
                                    };
                                    },
                                    computed: {
                                        workExperience() {
                                            if (this.data.workExperience) {
                                                return this.data.workExperience;
                                                } else {
                                                    return null;
                                                    }
                                                    },
                                                    },
                                                    methods: {
                                                        getWorkExperience() {
                                                            return this.data.workExperience;
                                                            },
                                                            },
                                                        
                                                            mounted() {
                                                                this.loading = true;
                                                                },
                                                                updated() {
                                                                    this.loading = false;
                                                                    },
}