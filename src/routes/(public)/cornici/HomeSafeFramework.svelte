<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n"; // add
    import ButtonMiddle from "./ButtonMiddle.svelte";

    export var Title = "Cassaforte a muro";
    export var Description =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vitae beatae pariatur dignissimos? Dolore commodi, reprehenderit ab esse pariatur non dicta in ad modi. Voluptate laudantium hic magnam eaque sit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem non a. Quod harum illum excepturi iste quo, facere dolore, perferendis commodi fuga fugiat quia autem magnam rerum soluta quidem. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi sint, aut praesentium at odio debitis ipsam laboriosam ducimus, sed reprehenderit eos? Provident nemo laudantium, labore consectetur itaque quibusdam magnam.";
    export var Statistics = [
        ["Costo", "500.-"],
        ["Tempo Montaggio", "2 ore"],
    ];

    var safeVideo: HTMLVideoElement;
    var buttonVideo: HTMLImageElement;
    function buttonVideoClick() {
        let status = togglePlayPause();

        if (status) {
            // video active
            buttonVideo.src = "/video/stopCircle.svg";
            if (window.innerWidth <= 640) {
                safeVideo.requestFullscreen();
            }
            return;
        }

        // video paused
        buttonVideo.src = "/video/playCircle.svg";
        return;
    }

    function togglePlayPause() {
        if (safeVideo.paused) {
            safeVideo.play();
            return true;
        } else {
            safeVideo.pause();
            return false;
        }
    }

    var mounted = false;
    onMount(() => {
        mounted = true;

        buttonVideo.addEventListener("click", buttonVideoClick);

        togglePlayPause();
    });
</script>

<main
    class="flex items-center justify-center lg:flex-row flex-col min-h-screen w-screen bg-gradient-to-br from-black from-5% to-expo to-95%"
>
    <div class="relative h-full w-3/4 flex items-center justify-center p-5">
        <div
            class="absolute w-full h-full flex items-center justify-center z-2 group"
        >
            <img
                bind:this={buttonVideo}
                class="clickable transition-all group-hover:opacity-60 hover:group-hover:opacity-100 hover:group-hover:bg-expo-80 hover:group-hover:rounded-full opacity-0"
                src="/video/stopCircle.svg"
                alt="Video Button"
            />
        </div>
        <video
            muted={true}
            bind:this={safeVideo}
            class="object-cover w-full z-0 border-2 border-white shadow-theater"
        >
            <source src="/video/cats.mp4" type="video/mp4" />
            <track kind="captions" />
        </video>
    </div>

    <div class="h-full w-full flex flex-col items-center justify-center gap-10">
        <div class="flex items-center justify-center w-full h-full">
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

        <div
            class="flex items-center justify-center flex-col sm:flex-row gap-5"
        >
            <div>
                <ButtonMiddle placeholder="Acquista" route="/preventivo" />
            </div>
            <div>
                <ButtonMiddle
                    placeholder="Scopri"
                    route="/cornici/cassaforte"
                />
            </div>
        </div>
    </div>
</main>
