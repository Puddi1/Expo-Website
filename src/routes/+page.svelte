<script lang="ts">
    import { onMount } from "svelte";
    import ButtonHome from "./ButtonHome.svelte";

    import { homeOffsetHeight } from "$lib/index";
    import { headerList } from "$lib/index";
    headerList.set([
        ["/cornici", "Cornici"],
        ["/servizio", "Servizio"],
        ["/progetti", "Progetti"],
        ["/", "Noi"],
        ["/", "Brands"],
    ]);

    import { arredo } from "$lib/index";
    arredo.set(true);

    var home: HTMLElement;

    let mounted = false;
    onMount(() => {
        mounted = true;

        homeOffsetHeight.set(home.offsetHeight);
        window.addEventListener("resize", onResize);

        function onResize() {
            homeOffsetHeight.set(home.offsetHeight);
        }
    });
</script>

<main
    class="bg-white w-screen h-screen flex items-center justify-center flex-col z-40 relative overflow-hidden"
    bind:this={home}
    id="main-home"
>
    <div
        class="w-full h-full z-10 flex items-center justify-evenly sm:justify-around flex-col sm:flex-row bg-gradient-to-r sm:bg-gradient-to-tr from-black from-25% to-transparent to-80%"
    >
        <img
            class="w-8/12 sm:w-4/12"
            src="/home/expoArredo.svg"
            alt="Expo Arredo Home Logo"
        />

        <div class="flex flex-col flex-wrap items-start justify-center gap-10">
            <!-- <div
                class="flex flex-col flex-wrap items-center justify-center text-justify gap-6 bg-blue-900 bg-opacity-80 border-2 border-white px-6 py-4 rounded-md"
            >
                <p class="flex items-center justify-center flex-wrap">
                    Ridefiniamo ogni spazio presente nella tua vita, <br /> la
                    nostra proposta è un nuovo modo di <br /> immaginare, organizzare,
                    e vivere la casa in ogni suo spazio
                </p>

                <ul
                    class="flex flex-col flex-wrap items-start justify-center gap-4"
                >
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img src="/favicon/envelope.svg" alt="Envelope icon" />
                        <a
                            class="clickable hover:border-b-white hover:border-b-2 border-b-2 border-transparent transition-all"
                            href="mailto:email@example.com"
                            >info@expoarredo.ch</a
                        >
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img src="/favicon/phone.svg" alt="Phone icon" />
                        <a
                            class="clickable hover:border-b-white hover:border-b-2 border-b-2 border-transparent transition-all"
                            href="tel:+41916461047">+41 91 646 10 47</a
                        >
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img src="/favicon/mapMaker.svg" alt="Map Maker icon" />
                        <p>
                            Via Vignalunga, 2c<br />6850 Mendrisio - Svizzera
                        </p>
                    </li>
                </ul>
            </div> -->

            <ButtonHome />
        </div>
    </div>
    <img
        class="absolute object-top sm:object-right-top object-cover w-full h-full z-0"
        src="/background/cucinaHome.png"
        alt="Home Cucina Background"
    />
</main>
