<script lang="ts">
    import { onMount } from "svelte";
    import ButtonHome from "./ButtonHome.svelte";
    import Brands from "./Brands.svelte";

    import { t } from "$lib/i18n";

    import { homeOffsetHeight } from "$lib/index";
    import { headerList } from "$lib/index";
    $: headerList.set([
        ["/cornici", $t("header.cornici")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
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
            src={$t("home.heroImageArredo")}
            alt="Expo Arredo Home Logo"
        />

        <div class="flex flex-col flex-wrap items-start justify-center gap-10">
            <ButtonHome placeholder={$t("home.heroButtonArredo")} />
        </div>
    </div>
    <img
        class="absolute object-top sm:object-right-top object-cover w-full h-full z-0"
        src="/background/cucinaHome.png"
        alt="Home Cucina Background"
    />
</main>

<section
    id="noi"
    class="flex items-center justify-center h-screen w-screen bg-black"
>
    <div>{$t("header.noi")}</div>
</section>

<section
    id="servizi"
    class="flex items-center justify-center h-screen w-screen bg-black"
>
    <div>Intro su servizi</div>
</section>
<section
    id="progetti"
    class="flex items-center justify-center h-screen w-screen bg-black"
>
    <div>Into su progetti</div>
</section>

<Brands />
