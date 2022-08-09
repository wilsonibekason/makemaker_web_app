import supportedLanguages from "./supportedLanguages";

export default {
  name: "localeText",
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
    type: "text",
    required: true,
    fieldsets: lang.isDefault ? null : "translations",
  })),
};
