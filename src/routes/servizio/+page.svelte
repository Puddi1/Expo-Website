<script lang="ts">
    import { t } from "$lib/i18n"; // add
    import { headerList } from "$lib/index";
    $: headerList.set([
        ["/cornici", $t("header.cornici")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
        ["/preventivo", $t("header.contatta")],
    ]);
</script>

<main
    class="flex items-center justify-center flex-col min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% py-36 lg:py-24 px-10"
>
    Preventivo
</main>
