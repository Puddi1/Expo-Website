<script lang="ts">
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
</script>

<main class="flex items-center justify-center h-screen w-screen">
    <div>Pagina sumisura per ogni progetto</div>
</main>
