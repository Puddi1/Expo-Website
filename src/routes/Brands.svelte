<script lang="ts">
    import { t } from "$lib/i18n";
    import { onMount } from "svelte";

    var lightLamp: HTMLElement;

    var lastElementSelected: HTMLElement | null = null;
    function typeSelected(e: Event) {
        if (!mounted) return;

        let element = e.target as HTMLElement | null;

        if (element == null) {
            return;
        }

        if (element.nodeName == "BUTTON") {
            element = element.firstChild as HTMLElement;
        }

        if (element == null) {
            return;
        }

        element.classList.remove("border-opacity-0");

        // Add if click on outside lastEl = el = null and pass to update ?? rlly?

        if (lastElementSelected != null) {
            if (lastElementSelected.innerText == element.innerText) {
                lastElementSelected.classList.add("border-opacity-0");
                lastElementSelected = null;
                element = null;
                updateSelectedTypes(element);
                return;
            }

            lastElementSelected.classList.add("border-opacity-0");
            lastElementSelected = element;
        } else {
            lastElementSelected = element;
        }

        updateSelectedTypes(element);
    }
    function updateSelectedTypes(lastElementSelected: HTMLElement | null) {
        if (lastElementSelected == null) {
            for (let i = 0; i < imagesBrands.length; ++i) {
                imagesBrands[i].imel?.classList.remove("opacity-100");
                imagesBrands[i].imel?.classList.add("opacity-30");
            }
            return;
        }

        // Clear all
        for (let i = 0; i < imagesBrands.length; ++i) {
            imagesBrands[i].imel?.classList.remove("opacity-100");
            imagesBrands[i].imel?.classList.add("opacity-20");
        }

        if (lastElementSelected.id == "brands-type-" + 0) {
            // E
            var cases: number[] = [
                1, 2, 3, 7, 13, 14, 15, 19, 20, 21, 25, 31, 32, 33,
            ];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
        if (lastElementSelected.id == "brands-type-" + 1) {
            // X
            var cases: number[] = [0, 5, 7, 10, 14, 15, 20, 21, 25, 28, 30, 35];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
        if (lastElementSelected.id == "brands-type-" + 2) {
            // P
            var cases: number[] = [
                1, 2, 3, 4, 7, 10, 13, 16, 19, 20, 21, 22, 25, 31,
            ];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
        if (lastElementSelected.id == "brands-type-" + 3) {
            // O
            var cases: number[] = [
                1, 2, 3, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 32, 33, 34,
            ];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
        if (lastElementSelected.id == "brands-type-" + 4) {
            // Casual
            var cases: number[] = [1, 34, 2, 5, 23, 17, 18, 24];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
        if (lastElementSelected.id == "brands-type-" + 5) {
            // Casual
            var cases: number[] = [8, 9, 13, 16, 19, 25, 26, 26, 35];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
        if (lastElementSelected.id == "brands-type-" + 6) {
            // Casual
            var cases: number[] = [3, 7, 13, 18, 22, 23, 26, 27, 28, 34, 35];
            for (let i = 0; i < cases.length; ++i) {
                imagesBrands[cases[i]].imel?.classList.add("opacity-100");
                imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
            }
        }
    }

    type Imel = {
        idx: number;
        imel: HTMLElement | null;
    };
    function Imel(n: number, e: HTMLElement | null): Imel {
        return {
            idx: n,
            imel: e,
        };
    }
    var imagesBrands: Imel[] = [];
    for (let i = 0; i < 36; ++i) {
        let o = Imel(i, null);
        imagesBrands.push(o);
    }

    var mounted = false;
    onMount(() => {
        mounted = true;

        let rect = lightLamp.getBoundingClientRect();
        if (rect.top + 400 <= rect.height) {
            lightLamp.classList.add("opacity-50");
            lightLamp.classList.remove("opacity-0");
            isLightTriggered = true;
        } else if (rect.top + 400 > rect.height) {
            lightLamp.classList.add("opacity-0");
            lightLamp.classList.remove("opacity-50");
            isLightTriggered = false;
        }

        var isLightTriggered = false;
        window.addEventListener("scroll", (e) => {
            let rect = lightLamp.getBoundingClientRect();
            if (rect.top + 400 <= rect.height && !isLightTriggered) {
                lightLamp.classList.add("opacity-50");
                lightLamp.classList.remove("opacity-0");
                isLightTriggered = true;
            } else if (rect.top + 400 > rect.height && isLightTriggered) {
                lightLamp.classList.add("opacity-0");
                lightLamp.classList.remove("opacity-50");
                isLightTriggered = false;
            }
        });
    });
</script>

<section
    id="brands"
    class="flex items-center justify-center h-screen w-screen overflow-hidden z-0 bg-slate-900"
>
    <div class="z-40 w-full h-full pt-28 pb-10 px-4 sm:px-16">
        <div
            class="w-full h-full border-t-2 border-r-2 border-white border-opacity-50 bg-gradient-to-bl from-expo-30 to-black-60 to-60% drop-shadow-2xl backdrop-blur-sm rounded-xl flex flex-col sm:flex-row items-center justify-between gap-5 p-2 pr-5"
        >
            <div
                class="flex flex-col items-center justify-center w-full sm:h-full sm:w-1/4"
            >
                <div
                    class="flex sm:h-3/4 justify-around items-start flex-col w-full sm:w-auto gap-2 sm:gap-0"
                >
                    <div
                        class="flex items-center justify-start sm:justify-end w-full"
                    >
                        <h1 class="font-extrabold text-3xl sm:text-4xl">
                            {$t("header.brands")}
                        </h1>
                    </div>
                    <div
                        class="flex flex-row sm:flex-col flex-wrap gap-3 sm:gap-0 w-full items-end justify-evenly h-3/4 text-xl"
                    >
                        {#each $t("brands.types") as el, i}
                            <button on:click={typeSelected}
                                ><p
                                    id={"brands-type-" + String(i)}
                                    class="clickable text-sm sm:text-2xl hover:text-expo hover:border-opacity-100 border-opacity-0 border-b-2 border-white transition-all"
                                >
                                    {el}
                                </p></button
                            >
                        {/each}
                    </div>
                </div>
            </div>
            <div
                class="grid grid-cols-6 grid-rows-6 items-center justify-center flex-wrap h-full gap-5"
            >
                {#each imagesBrands as i}
                    <div
                        class="h-full w-full flex items-center justify-center transition-all relative imgBkgP"
                    >
                        <!-- Image 1.5:1 -->
                        <img
                            class="absolute object-cover w-full h-full opacity-0 z-0 imgBkgC transition-all"
                            src="/background/gatto.jpeg"
                            alt=""
                        />
                        <a class="z-50" href="expoarredo.ch" target="_blank">
                            <img
                                bind:this={i.imel}
                                class="opacity-20 hover:opacity-100 transition-all"
                                src="/brands/franke.svg"
                                alt="Brands Llogos"
                            />
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div
        class="z-0 w-full h-full flex items-center justify-end absolute right-0"
    >
        <div
            class="w-full h-full absolute bg-light-sm sm:bg-light opacity-0 transition-all"
            bind:this={lightLamp}
        />
        <img
            class="object-cover h-full z-0"
            src="/brands/lampadaBackground.svg"
            alt="Lamp background"
        />
    </div>
</section>

<style>
    .imgBkgP:hover > .imgBkgC {
        opacity: 1;
    }
</style>
