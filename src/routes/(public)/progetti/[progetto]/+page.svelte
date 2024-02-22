<script lang="ts">
	import { onMount } from "svelte";
	import { homeOffsetHeight } from "$lib/index";
	import { t } from "$lib/languages/i18n";
	import { headerList } from "$lib/index";

	$: headerList.set([
		["/cornici", $t("header.cornici")],
		["/servizio", $t("header.servizio")],
		["/progetti", $t("header.progetti")],
		["/#noi", $t("header.noi")],
		["/#brands", $t("header.brands")],
		["/preventivo", $t("header.contatta")],
	]);

	export var Title = "Casa con gatto";
	export var Description =
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vitae beatae pariatur dignissimos? Dolore commodi, reprehenderit ab esse pariatur non dicta in ad modi. Voluptate laudantium hic magnam eaque sit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem non a. Quod harum illum excepturi iste quo, facere dolore, perferendis commodi fuga fugiat quia autem magnam rerum soluta quidem. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi sint, aut praesentium at odio debitis ipsam laboriosam ducimus, sed reprehenderit eos? Provident nemo laudantium, labore consectetur itaque quibusdam magnam.";
	export var Statistics = [
		["Tempo", "1 giorno"],
		["Costo", "10.-"],
		["Numero mobili", "111"],
	];

	// Same Aspect Ratio, 2:1
	export var photosProject = [
		[
			"/background/gattoLook.jpeg",
			"/background/gattoLook.jpeg",
			"Descrizione immagini",
		],
		[
			"/background/gattoLook.jpeg",
			"/background/gattoLook.jpeg",
			"Cucina Cucina Cucina Cucina Cucina Cucina",
		],
		[
			"/background/gattoLook.jpeg",
			"/background/gattoLook.jpeg",
			"Descrizione immagini",
		],
	];

	var juxtaposeElementsWrapper: HTMLElement;
	var currentPhotos = photosProject[0];
	var previousJuxtaposeElementIndex = 0;
	function handleCarouselleChange(e: any) {
		let length = e.target.id.length;
		let id = e.target.id[length - 1];
		currentPhotos = photosProject[id];

		// Change juxtapose visibility and bookeeping
		let children = juxtaposeElementsWrapper.children;
		let previousJuxtaposeElement = children.namedItem(
			`juxtapose-wrapper-${previousJuxtaposeElementIndex}`
		);
		let juxtaposeElement = children.namedItem(`juxtapose-wrapper-${id}`);
		previousJuxtaposeElementIndex = id;

		// Hide
		previousJuxtaposeElement?.classList.add("pointer-events-none");

		previousJuxtaposeElement?.classList.add("opacity-0");
		previousJuxtaposeElement?.classList.add("absolute");

		previousJuxtaposeElement?.classList.remove("opacity-100");
		previousJuxtaposeElement?.classList.remove("relative");

		// Show
		juxtaposeElement?.classList.remove("pointer-events-none");

		juxtaposeElement?.classList.add("opacity-100");
		juxtaposeElement?.classList.add("relative");

		juxtaposeElement?.classList.remove("opacity-0");
		juxtaposeElement?.classList.remove("absolute");
	}

	var loadingScreenImagesFrame: HTMLElement;
	var loadingScreenFaviconImagesFrame: HTMLElement;
	function onPageLoaded() {
		console.log("Loaded");

		const element = document.querySelectorAll(".jx-knightlab");
		element.forEach((e: Element) => {
			let eHtml = e as HTMLElement;

			if (eHtml != null) {
				eHtml.style.visibility = "hidden";
			}
		});

		loadingScreenFaviconImagesFrame.classList.add("bg-opacity-0");
		loadingScreenImagesFrame.classList.add("pointer-events-none");
		loadingScreenImagesFrame.classList.add("opacity-0");
	}

	var mounted = false;
	onMount(() => {
		mounted = true;
		window.addEventListener("load", onPageLoaded);
		window.addEventListener("loadeddata", onPageLoaded);

		homeOffsetHeight.set(128);

		loadingScreenFaviconImagesFrame.classList.add(
			"animate-loading-spinner"
		);

		setTimeout(() => {
			onPageLoaded();
		}, 1000);
	});
</script>

<head>
	<script
		src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"
	></script>
	<link
		rel="stylesheet"
		href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css"
	/>
</head>

<main
	class="flex items-center justify-evenly lg:justify-center flex-col lg:flex-row gap-24 lg:gap-1 min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% py-36 lg:py-24 px-5 lg:px-10"
>
	<div
		class="flex flex-col order-2 gap-10 justify-around items-center w-full h-full lg:order-1"
	>
		<div
			bind:this={juxtaposeElementsWrapper}
			class="flex relative justify-center items-center w-full h-full"
		>
			<div
				bind:this={loadingScreenImagesFrame}
				class="flex absolute justify-center items-center bg-black transition-all w-full-2 h-full-2 z-2"
			>
				<img
					bind:this={loadingScreenFaviconImagesFrame}
					class="transition-all"
					src="/favicon/expoArredoWhite.svg"
					alt="Expo Arredo Logo White"
				/>
			</div>

			<!-- It is important to have a;; photos of the same size, 1:2 ratio -->
			{#each photosProject as p, i}
				{#if i == 0}
					<div
						id={"juxtapose-wrapper-" + String(i)}
						class="flex overflow-hidden relative z-0 justify-center items-center w-full border-2 border-white opacity-100 juxtapose h-108 cursor-col-resize shadow-light-theater"
					>
						<img
							class="object-fill aspect-1-2"
							src={photosProject[i][0]}
							alt=""
						/>
						<img
							class="object-fill aspect-1-2"
							src={photosProject[i][1]}
							alt=""
						/>
					</div>
				{:else}
					<div
						id={"juxtapose-wrapper-" + String(i)}
						class="flex overflow-hidden absolute z-0 justify-center items-center w-full border-2 border-white opacity-0 pointer-events-none juxtapose h-108 cursor-col-resize shadow-light-theater"
					>
						<img
							class="object-fill aspect-1-2"
							src={photosProject[i][0]}
							alt=""
						/>
						<img
							class="object-fill aspect-1-2"
							src={photosProject[i][1]}
							alt=""
						/>
					</div>
				{/if}
			{/each}
		</div>

		<div class="flex flex-col gap-3 justify-center items-center">
			<div class="">{currentPhotos[2]}</div>
			<div>
				<ul class="flex flex-row gap-5 justify-center items-center">
					{#each photosProject as p, i}
						{#if i == 0}
							<li class="flex justify-center items-center">
								<input
									on:click={handleCarouselleChange}
									class="w-4 h-4 bg-white ring-white ring-offset-1 transition-all appearance-none cursor-pointer focus:bg-expo focus:ring-2 checked:bg-expo checked:ring-2"
									type="radio"
									checked={true}
									name="carouselleImages"
									id={"carouselle-input-" + i}
								/>
							</li>
						{:else}
							<li class="flex justify-center items-center">
								<input
									on:click={handleCarouselleChange}
									class="w-4 h-4 bg-white ring-white ring-offset-1 transition-all appearance-none cursor-pointer focus:bg-expo focus:ring-2 checked:bg-expo checked:ring-2"
									type="radio"
									name="carouselleImages"
									id={"carouselle-input-" + i}
								/>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="flex justify-center items-center w-full h-full lg:order-2">
		<div
			class="flex flex-col gap-7 justify-around items-start w-11/12 sm:w-10/12"
		>
			<h1 class="w-full text-5xl font-extrabold">{Title}</h1>

			<div
				class="flex flex-col gap-5 justify-center items-center w-full h-full sm:items-start"
			>
				<div
					class="flex overflow-auto justify-center items-start w-11/12 sm:w-full"
				>
					<p class="w-full text-justify">
						{@html Description}
					</p>
				</div>

				<div class="flex justify-center items-center w-full">
					<ul
						class="flex flex-row justify-evenly items-center w-full"
					>
						{#each Statistics as s}
							<li class="p-2 border-l-2 border-white">
								<p class="font-semibold">{s[0]}</p>
								<p>{s[1]}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>
