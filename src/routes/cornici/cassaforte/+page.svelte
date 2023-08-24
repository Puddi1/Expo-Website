<script lang="ts">
    import { onMount } from "svelte";
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

    //

    var mounted = false;
    onMount(() => {
        mounted = true;
    });
</script>

<main
    class="flex items-center justify-center flex-col min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% py-36 lg:py-24 px-10"
>
    Cassaforte
</main>
