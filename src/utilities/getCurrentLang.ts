import type { Language } from "../interfaces/Language";

function getCurrentLang(pathname: string): Language {
  const currentLang = pathname.split("/")[2] === "es" ? pathname.split("/")[2] : "en";
  return currentLang as Language;
}

export default getCurrentLang;