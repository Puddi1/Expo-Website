// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";

export var homeOffsetHeight = writable(0);
export var headerList = writable([[""]]);
export var arredo = writable(false);
export var cornici = writable(false);
