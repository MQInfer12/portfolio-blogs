import type { Language } from "../interfaces/Language";

const langRender = (
  lang: Language,
  obj: {
    es: string;
    en: string;
  }
) => {
  return obj[lang];
};

export default langRender;