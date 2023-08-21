import { derived, writable } from "svelte/store";
import { lang } from "./lang";

export const locale = writable("IT");
export const locales = Object.keys(lang);

export function translate(locale: any, key: any, vars: any) {
    // Let's throw some errors if we're trying to use keys/locales that don't exist.
    // We could improve this by using Typescript and/or fallback values.
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);

    // Grab the translation from the translations object.
    let text: any = lang[locale as keyof Object][key as keyof Object];

    if (!text) throw new Error(`no translation found for ${locale}.${key}`);

    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, vars[k]);
    });

    return text;
}

export const t = derived(
    locale,
    ($locale) =>
        (key: any, vars = {}) =>
            translate($locale, key, vars)
);
