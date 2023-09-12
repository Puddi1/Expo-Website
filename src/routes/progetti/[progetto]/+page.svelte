<script lang="ts">
    import { onMount } from "svelte";
    import { homeOffsetHeight } from "$lib/index";
    import { t } from "$lib/i18n";
    import { headerList } from "$lib/index";

    $: headerList.set([
        ["/cornici", $t("header.cornici")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
        ["/preventivo", $t("header.contatta")],
    ]);

    export var Title = "Casa con gatto";
    export var Description =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vitae beatae pariatur dignissimos? Dolore commodi, reprehenderit ab esse pariatur non dicta in ad modi. Voluptate laudantium hic magnam eaque sit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem non a. Quod harum illum excepturi iste quo, facere dolore, perferendis commodi fuga fugiat quia autem magnam rerum soluta quidem. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi sint, aut praesentium at odio debitis ipsam laboriosam ducimus, sed reprehenderit eos? Provident nemo laudantium, labore consectetur itaque quibusdam magnam.";
    export var Statistics = [
        ["Tempo", "1 giorno"],
        ["Costo", "10.-"],
        ["Numero mobili", "111"],
    ];

    export var photosProject = [
        [
            "/background/gattoLook.jpeg",
            "/background/cucinaHome.png",
            "Cucina Cucina Cucina Cucina Cucina Cucina",
        ],
        [
            "/background/cucinaHome.png",
            "/background/gattoLook.jpeg",
            "Descrizione immagini",
        ],
        [
            "/background/cucinaHome.png",
            "/background/gattoLook.jpeg",
            "Descrizione immagini",
        ],
    ];

    var leftSide: HTMLElement;
    var rightSide: HTMLElement;
    var imagesFrame: HTMLElement;
    function handleCarouselleChange(e: any) {
        let length = e.target.id.length;
        let id = e.target.id[length - 1];
        console.log(id);

        console.log(leftSide);
        console.log(rightSide);
    }

    var loadingScreenImagesFrame: HTMLElement;
    var loadingScreenFaviconImagesFrame: HTMLElement;
    function onPageLoaded() {
        const element = document.querySelector(".jx-knightlab") as HTMLElement;
        element.style.visibility = "hidden";
        loadingScreenFaviconImagesFrame.classList.add("bg-opacity-0");
        loadingScreenImagesFrame.classList.add("pointer-events-none");
        loadingScreenImagesFrame.classList.add("opacity-0");
    }

    var mounted = false;
    onMount(() => {
        window.addEventListener("load", onPageLoaded);
        mounted = true;
        homeOffsetHeight.set(0);

        loadingScreenFaviconImagesFrame.classList.add(
            "animate-loading-spinner"
        );
    });
</script>

<head>
    <script
        src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"
    ></script>
    <link
        rel="stylesheet"
        href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css"
    />
</head>

<main
    class="flex items-center justify-evenly lg:justify-center flex-col lg:flex-row gap-24 lg:gap-1 min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% py-36 lg:py-24 px-5 lg:px-10"
>
    <div
        class="flex items-center justify-center flex-col w-full h-full gap-10 order-2 lg:order-1"
    >
        <div class="relative w-full h-full flex items-center justify-center">
            <div
                bind:this={loadingScreenImagesFrame}
                class="absolute w-full-2 h-full-2 bg-black z-2 flex items-center justify-center transition-all"
            >
                <img
                    bind:this={loadingScreenFaviconImagesFrame}
                    class="transition-all"
                    src="/favicon/expoArredoWhite.svg"
                    alt="Expo Arredo Logo White"
                />
            </div>
            <div
                bind:this={imagesFrame}
                class="juxtapose relative overflow-hidden border-2 border-white w-full h-108 cursor-col-resize shadow-light-theater z-0"
            >
                <img
                    bind:this={leftSide}
                    class=""
                    src="/background/cucinaHome.png"
                    alt=""
                />
                <img
                    bind:this={rightSide}
                    src="/background/gattoLook.jpeg"
                    alt=""
                />
            </div>
        </div>

        <div class="flex items-center justify-center flex-col gap-3">
            <div class="">Cucina Cucina Cucina Cucina Cucina Cucina</div>
            <div>
                <ul class="flex items-center justify-center flex-row gap-5">
                    {#each photosProject as p, i}
                        <li class="flex items-center justify-center">
                            <input
                                on:click={handleCarouselleChange}
                                class="appearance-none w-4 h-4
                                    bg-white focus:bg-expo
                                    focus:ring-2 ring-white ring-offset-1
                                    checked:bg-expo checked:ring-2
                                    cursor-pointer transition-all"
                                type="radio"
                                name="carouselleImages"
                                id={"carouselle-input-" + i}
                            />
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center w-full h-full lg:order-2">
        <!-- Titolo descrizione e statistiche -->
        <div
            class="flex items-start justify-around flex-col gap-7 w-11/12 sm:w-10/12"
        >
            <h1 class="text-5xl font-extrabold w-full">{Title}</h1>

            <div
                class="flex items-center sm:items-start justify-center flex-col gap-5 w-full h-full"
            >
                <div
                    class="flex items-start justify-center overflow-auto w-11/12 sm:w-full"
                >
                    <p class="text-justify w-full">
                        {@html Description}
                    </p>
                </div>

                <div class="flex items-center justify-center w-full">
                    <ul
                        class="flex items-center justify-evenly flex-row w-full"
                    >
                        {#each Statistics as s}
                            <li class="p-2 border-l-2 border-white">
                                <p class="font-semibold">{s[0]}</p>
                                <p>{s[1]}</p>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
