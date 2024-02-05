<script lang="ts">
	import { t } from "$lib/i18n";
	import { onMount } from "svelte";

	var lightLamp: HTMLElement;
	var brandsSection: HTMLElement;

	var lastElementSelected: HTMLElement | null = null;
	function typeSelected(e: Event) {
		if (!mounted) return;

		let element = e.target as HTMLElement | null;

		if (element == null) {
			return;
		}

		if (element.nodeName == "P") {
			element = element.parentElement as HTMLElement;
		}

		if (element == null) {
			return;
		}

		buttonFromInactiveToActive(element);

		// Add if click on outside lastEl = el = null and pass to update ?? rlly?

		if (lastElementSelected != null) {
			if (lastElementSelected.innerText == element.innerText) {
				buttonFromActiveToInactive(lastElementSelected);
				lastElementSelected = null;
				element = null;
				updateSelectedTypes(element);
				return;
			}

			buttonFromActiveToInactive(lastElementSelected);
			lastElementSelected = element;
		} else {
			lastElementSelected = element;
		}

		updateSelectedTypes(element);
	}

	function buttonFromInactiveToActive(e: HTMLElement) {
		e.classList.remove("border-opacity-50");
		e.classList.remove("border-white");
		e.classList.add("border-opacity-100");
		e.classList.add("border-expo");
	}
	function buttonFromActiveToInactive(e: HTMLElement) {
		e.classList.add("border-opacity-50");
		e.classList.add("border-white");
		e.classList.remove("border-opacity-100");
		e.classList.remove("border-expo");
	}

	function updateSelectedTypes(lastElementSelected: HTMLElement | null) {
		if (lastElementSelected == null) {
			for (let i = 0; i < imagesBrands.length; ++i) {
				imagesBrands[i].imel?.classList.remove("opacity-100");
				imagesBrands[i].imel?.classList.add("opacity-20");
			}
			return;
		}

		// Clear all
		for (let i = 0; i < imagesBrands.length; ++i) {
			imagesBrands[i].imel?.classList.remove("opacity-100");
			imagesBrands[i].imel?.classList.add("opacity-20");
		}

		if (lastElementSelected.id == "brands-type-" + 0) {
			// E
			var cases: number[] = [
				1, 2, 3, 7, 13, 14, 15, 19, 20, 21, 25, 31, 32, 33,
			];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
		if (lastElementSelected.id == "brands-type-" + 1) {
			// X
			var cases: number[] = [0, 5, 7, 10, 14, 15, 20, 21, 25, 28, 30, 35];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
		if (lastElementSelected.id == "brands-type-" + 2) {
			// P
			var cases: number[] = [
				1, 2, 3, 4, 7, 10, 13, 16, 19, 20, 21, 22, 25, 31,
			];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
		if (lastElementSelected.id == "brands-type-" + 3) {
			// O
			var cases: number[] = [
				1, 2, 3, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 32, 33, 34,
			];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
		if (lastElementSelected.id == "brands-type-" + 4) {
			// Casual
			var cases: number[] = [1, 34, 2, 5, 23, 17, 18, 24];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
		if (lastElementSelected.id == "brands-type-" + 5) {
			// Casual
			var cases: number[] = [8, 9, 13, 16, 19, 25, 26, 26, 35];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
		if (lastElementSelected.id == "brands-type-" + 6) {
			// Casual
			var cases: number[] = [3, 7, 13, 18, 22, 23, 26, 27, 28, 34, 35];
			for (let i = 0; i < cases.length; ++i) {
				imagesBrands[cases[i]].imel?.classList.add("opacity-100");
				imagesBrands[cases[i]].imel?.classList.remove("opacity-20");
			}
		}
	}

	type Imel = {
		idx: number;
		imel: HTMLElement | null;
	};
	function Imel(n: number, e: HTMLElement | null): Imel {
		return {
			idx: n,
			imel: e,
		};
	}
	var imagesBrands: Imel[] = [];
	for (let i = 0; i < 36; ++i) {
		let o = Imel(i, null);
		imagesBrands.push(o);
	}

	function runLightLogic() {
		if (window.location.pathname != "/" || !mounted) {
			return;
		}

		if (window.innerWidth <= 500 || isPhone) {
			brandsSection.classList.add("bg-light-sm");
			lightLamp.classList.remove("bg-light");
			return;
		}

		if (brandsSection.classList.contains("bg-light-sm")) {
			brandsSection.classList.remove("bg-light-sm");
		}

		if (!lightLamp.classList.contains("bg-light")) {
			lightLamp.classList.add("bg-light");
		}

		let rect = lightLamp.getBoundingClientRect();
		if (rect.top + 400 <= rect.height && !isLightTriggered) {
			lightLamp.classList.remove("opacity-0");
			lightLamp.classList.add("opacity-50");
			isLightTriggered = true;
		} else if (rect.top + 400 > rect.height && isLightTriggered) {
			lightLamp.classList.remove("opacity-50");
			lightLamp.classList.add("opacity-0");
			isLightTriggered = false;
		}
	}

	var isPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	var isLightTriggered = false;
	var mounted = false;
	onMount(() => {
		mounted = true;

		if (window.innerWidth <= 500 || isPhone) {
			brandsSection.classList.add("bg-light-sm");
			lightLamp.classList.remove("bg-light");
		}

		let rect = lightLamp.getBoundingClientRect();
		if (rect.top + 400 <= rect.height) {
			lightLamp.classList.remove("opacity-0");
			lightLamp.classList.add("opacity-50");
			isLightTriggered = true;
		} else if (rect.top + 400 > rect.height) {
			lightLamp.classList.remove("opacity-50");
			lightLamp.classList.add("opacity-0");
			isLightTriggered = false;
		}

		window.addEventListener("scroll", runLightLogic);
		window.addEventListener("resize", runLightLogic);
	});
</script>

<section
	bind:this={brandsSection}
	id="brands"
	class="flex overflow-hidden justify-center items-center w-screen min-h-screen border-t-2 border-white bg-slate-900"
>
	<div
		class="flex z-40 flex-col gap-4 justify-around items-center px-4 pt-28 pb-10 w-full h-full lg:px-16 lg:flex-row"
	>
		<div
			class="flex flex-col justify-center items-center lg:h-full lg:w-1/6"
		>
			<div
				class="flex flex-col gap-2 justify-around items-start w-full lg:h-full lg:gap-20"
			>
				<div
					class="flex justify-start items-center w-full lg:justify-end"
				>
					<h1 class="text-5xl font-extrabold lg:text-4xl">
						{$t("header.brands")}
					</h1>
				</div>
				<div
					class="flex flex-row flex-wrap gap-3 justify-evenly items-end w-full h-full text-xl lg:flex-col lg:gap-10"
				>
					{#each $t("brands.types") as el, i}
						<button
							on:click={typeSelected}
							id={"brands-type-" + String(i)}
							class="p-2 border-b-2 border-l-2 border-white border-opacity-50 transition-all hover:border-opacity-100 clickable hover:border-expo"
							><p class="text-xl transition-all lg:text-2xl">
								{el}
							</p></button
						>
					{/each}
				</div>
			</div>
		</div>

		<div
			class="
			h-full w-full lg:w-4/5 border-t-2 border-r-2 border-white border-opacity-50 bg-gradient-to-tr
			lg:bg-gradient-to-bl from-expo-90 lg:from-expo-30 to-black-90 lg:to-black-60 to-60%
			drop-shadow-2xl backdrop-blur-sm flex items-center justify-center p-2 px-5 transition-all"
		>
			<div
				class="grid grid-cols-6 grid-rows-6 gap-5 justify-center items-center p-2 w-full h-full"
			>
				{#each imagesBrands as i}
					<div
						class="flex relative justify-center items-center w-full h-full transition-all imgBkgP"
					>
						<!-- Image 1:1 -->
						<img
							class="object-cover absolute z-0 w-full h-full opacity-0 transition-all lg:w-28 lg:h-28 imgBkgC"
							src="/background/gatto.jpeg"
							alt=""
						/>
						<a class="z-50" href="expoarredo.ch" target="_blank">
							<img
								bind:this={i.imel}
								class="w-24 h-24 opacity-20 transition-all lg:w-28 lg:h-28 hover:opacity-100"
								src="/brands/franke.svg"
								alt="Brands Logos"
							/>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="flex absolute z-0 justify-end items-center w-full h-full+22">
		<div
			class="absolute w-full h-full opacity-0 transition-all bg-light"
			bind:this={lightLamp}
		/>

		<img
			class="object-cover absolute z-0 h-full"
			src="/brands/lampadaBackground.svg"
			alt="Lamp background"
		/>
	</div>
</section>

<style>
	.imgBkgP:hover > .imgBkgC {
		opacity: 1;
	}
</style>
