<script lang="ts">
	import { onMount } from "svelte";
	import ButtonHome from "../ButtonHome.svelte";

	import { t } from "$lib/i18n";

	import HomeSafeFramework from "./HomeSafeFramework.svelte";
	import HomeService from "./HomeService.svelte";
	import { headerList } from "$lib/index";
	$: headerList.set([
		["/", $t("header.arredo")],
		["/cornici/cassaforte", "Cassaforte"],
		["/cornici#servizi", "Servizi"],
		["/preventivo", $t("header.contatta")],
	]);
	import { cornici, arredo } from "$lib/index";
	arredo.set(false);
	cornici.set(true);

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main
	class="flex overflow-hidden relative z-40 flex-col justify-center items-center w-screen h-screen bg-white"
	id="main-home"
>
	<div
		class="w-full h-full z-10 flex items-center justify-evenly sm:justify-around flex-col sm:flex-row bg-gradient-to-r sm:bg-gradient-to-tr from-black from-25% to-transparent to-80%"
	>
		<img
			class="w-8/12 sm:w-4/12"
			src={$t("home.heroImageCornici")}
			alt="Expo Cornici Home Logo"
		/>

		<div class="flex flex-col flex-wrap gap-10 justify-center items-start">
			<ButtonHome placeholder={$t("home.heroButtonCornici")} />
		</div>
	</div>
	<video
		class="object-cover object-top absolute z-0 w-full h-full sm:object-right-top"
		autoplay
		loop
		muted
	>
		<source src="/video/cats.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>
</main>

<HomeSafeFramework />
<HomeService />
