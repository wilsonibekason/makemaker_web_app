import supportedLanguages from "./supportedLanguages";

export default {
  name: "localeBlockContent",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "blockContent",
    layout: "horizontal",
    fieldsets: lang.isDefault ? null : "translations",
  })),
};
