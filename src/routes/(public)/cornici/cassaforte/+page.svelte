<script lang="ts">
    import { onMount } from "svelte";
    import { homeOffsetHeight } from "$lib/index";
    import { t } from "$lib/i18n"; // Add
    import { headerList } from "$lib/index";
    $: headerList.set([
        ["/", $t("header.arredo")],
        ["/cornici#servizi", "Servizi"],
        ["/preventivo", $t("header.contatta")],
    ]);
    import { cornici, arredo } from "$lib/index";
    arredo.set(false);
    cornici.set(true);

    import ButtonMiddle from "../ButtonMiddle.svelte";
    import ButtonMiddleHighContrast from "./ButtonMiddleHighContrast.svelte";

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
            safeVideo.muted = false;

            return true;
        } else {
            safeVideo.pause();
            return false;
        }
    }

    var mounted = false;
    onMount(() => {
        mounted = true;
        homeOffsetHeight.set(128);

        buttonVideo.addEventListener("click", buttonVideoClick);

        togglePlayPause();
    });
</script>

<main
    class="flex items-center justify-center flex-col gap-0 h-sixthyScreen sm:min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% pt-40 px-5 sm:px-10"
>
    <div
        class="relative h-full w-full lg:w-3/4 flex items-center justify-center p-5"
    >
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
            class="object-cover w-full z-0 border-2 border-white shadow-dark-theater"
        >
            <source src="/video/cats.mp4" type="video/mp4" />
            <track kind="captions" />
        </video>
    </div>

    <div class="flex items-center flex-col justify-center gap-20 w-full h-full">
        <h1 class="font-bold text-2xl z-2 text-center">
            Cassaforte a muro, semplice ed efficace: <span
                class="underline font-extrabold">Impossibile notarla</span
            >.
        </h1>
        <div class="flex items-center justify-center w-full">
            <ButtonMiddleHighContrast
                placeholder="Acquista"
                route="/preventivo"
            />
        </div>
    </div>
</main>

<section
    class="flex items-center justify-center min-h-half-viewport gap-10 flex-col sm:flex-row w-screen bg-gradient-to-b from-expo from-5% to-black py-20 sm:py-5 px-5 sm:px-10"
>
    <!-- Left -->
    <div class="flex items-center justify-center flex-col gap-14">
        <div class="flex items-center justify-start w-full h-full">
            <h1 class=" font-bold text-2xl">Value prop</h1>
        </div>
        <div
            class="flex items-center justify-center w-full h-full flex-col gap-6"
        >
            <div class="flex items-center justify-start w-full h-full">
                <p class=" text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, voluptatum? Beatae et doloribus impedit saepe
                    provident quia odio omnis error, rerum voluptas fugiat
                    consequuntur, atque iusto maiores culpa natus minus! <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    optio dolorum repudiandae quae impedit, eum tempore blanditiis
                    quis atque dolorem, neque ullam nemo corrupti esse officiis iste
                    saepe vel aspernatur.
                    <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam cupiditate culpa quasi. Eveniet, quos doloribus similique
                    nulla doloremque vero minus dolorem. Libero sunt dolor ut quibusdam
                    ullam ipsam, iure quos.
                </p>
            </div>
            <div class="flex items-center justify-center w-full h-full">
                <ul class="flex items-center justify-evenly flex-row w-full">
                    <li class="p-2 border-l-2 border-white">
                        <p class="font-semibold">Cost</p>
                        <p>500.-</p>
                    </li>
                    <li class="p-2 border-l-2 border-white">
                        <p class="font-semibold">Montaggio</p>
                        <p>2 ore</p>
                    </li>
                    <li class="p-2 border-l-2 border-white">
                        <p class="font-semibold">Garanzia</p>
                        <p>2 anni</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Right -->
    <div class="flex items-center justify-center w-3/4 h-full">
        <div
            class="flex items-center justify-center flex-col w-full h-full gap-8"
        >
            <div class="relative w-3/4 flex items-center justify-center">
                <img
                    class="object-cover w-full h-full"
                    src="/cornici/woman.jpeg"
                    alt="Cassaforte"
                />
            </div>

            <ButtonMiddle placeholder="Acquista" route="/preventivo" />
        </div>
    </div>
</section>
