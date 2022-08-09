import { MdLink } from "react-icons/md";

export default {
  name: "route",
  type: "document",
  title: "Route",
  icon: MdLink,
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      description: "Select the page that this route should point to",
      to: [
        {
          type: "page",
        },
      ],
    },
    {
      name: "includeInSiteMap",
      type: "boolean",
      title: "Include in Site Map",
      description: "for search engines will be added to /sitemap.xml",
    },
    {
      name: "disallowRobots",
      type: "boolean",
      title: "Disallow Robots",
      description: "Hide this route for search engines",
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "page.title",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === "/" ? "/" : `/${slug}`,
        subtitle: `Page : ${pageTitle}`,
      };
    },
  },
};
