import supportedLanguages from "./supportedLanguages";

export default {
  name: "localeString",
  description: "A set of languages to be used by the user.",
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
    type: "string",
    required: true,
    fieldsets: lang.isDefault ? null : "translations",
  })),
};
