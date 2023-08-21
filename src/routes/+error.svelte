<script lang="ts">
    import { page } from "$app/stores";
    import ButtonHome from "./ButtonHome.svelte";

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
    import { arredo } from "$lib/index";
    arredo.set(true);

    var _message: string | undefined = undefined;
    page.subscribe((e) => {
        _message = e.error?.message;
    });
</script>

<main
    class="bg-white w-screen h-screen flex items-center justify-center flex-col z-40 relative overflow-hidden"
    id="main-home"
>
    <div
        class="w-full h-full z-10 flex items-center justify-center gap-5 flex-col bg-gradient-to-r sm:bg-gradient-to-tr from-black from-25% to-transparent to-80%"
    >
        <h1 class="text-3xl font-bold">Status: {$page.status}</h1>
        <p class="text-xl">{_message}</p>
        <div class="flex flex-col flex-wrap items-start justify-center gap-10">
            <a href="/"><ButtonHome placeholder="Home" /></a>
        </div>
    </div>
    <img
        class="absolute object-top sm:object-right-top object-cover w-full h-full z-0"
        src="/background/cucinaHome.png"
        alt="Home Cucina Background"
    />
</main>
