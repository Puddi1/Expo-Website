<script lang="ts">
    import { onMount } from "svelte";
    import { homeOffsetHeight } from "$lib/index";

    import { t } from "$lib/i18n";

    import { headerList } from "$lib/index";
    $: headerList.set([
        ["/", $t("header.arredo")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
        ["/preventivo", $t("header.contatta")],
    ]);

    import { arredo } from "$lib/index";
    arredo.set(true);

    let mounted = false;
    onMount(() => {
        mounted = true;
        homeOffsetHeight.set(0);
    });
</script>

<div class="h-0 sm:h-24" />
