import { dictionary } from "../../messages/dictionary";

export default function getTranslations(locale: string) {
  return function (key: string): string {
    return dictionary[locale][key];
  };
}
