<script lang="ts">
    import { t } from "$lib/i18n";
    import { headerList } from "$lib/index";
    headerList.set([
        ["/", $t("header.arredo")],
        ["/cornici", $t("header.cornici")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
        ["/preventivo", $t("header.contatta")],
    ]);
</script>

<main
    class="bg-white w-screen h-screen flex items-center justify-center flex-col"
>
    <h1 class="text-black">
        Welcome to Expo Ghiaccio, gelato, proprio come te!
    </h1>
</main>
