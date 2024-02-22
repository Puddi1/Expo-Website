<script lang="ts">
	import { onMount } from "svelte";
	import { homeOffsetHeight } from "$lib/index";

	import { t } from "$lib/languages/i18n";

	import { headerList } from "$lib/index";
	$: headerList.set([
		["/", $t("header.arredo")],
		["/cornici", $t("header.cornici")],
		["/servizio", $t("header.servizio")],
		["/progetti", $t("header.progetti")],
	]);

	import { cornici, arredo, preventivo } from "$lib/index";
	arredo.set(false);
	cornici.set(false);
	preventivo.set(true);

	let mounted = false;
	onMount(() => {
		mounted = true;
		homeOffsetHeight.set(128);
	});
</script>

<div class="h-0 sm:h-24" />
