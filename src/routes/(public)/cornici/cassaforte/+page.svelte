<script lang="ts">
	import { onMount } from "svelte";
	import { homeOffsetHeight } from "$lib/index";
	import { t } from "$lib/languages/i18n"; // Add
	import { headerList } from "$lib/index";
	$: headerList.set([
		["/", $t("header.arredo")],
		["/cornici#servizi", "Servizi"],
		["/preventivo", $t("header.contatta")],
	]);
	import { cornici, arredo } from "$lib/index";
	arredo.set(false);
	cornici.set(true);

	import ButtonMiddle from "../ButtonMiddle.svelte";
	import ButtonMiddleHighContrast from "./ButtonMiddleHighContrast.svelte";

	import { gsap } from "gsap";

	var safeVideo: HTMLVideoElement;
	var buttonVideo: HTMLImageElement;
	function buttonVideoClick() {
		let status = togglePlayPause();

		if (status) {
			// video active
			buttonVideo.src = "/video/stopCircle.svg";
			if (window.innerWidth <= 640) {
				safeVideo.requestFullscreen();
			}
			return;
		}

		// video paused
		buttonVideo.src = "/video/playCircle.svg";
		return;
	}

	function togglePlayPause() {
		if (safeVideo.paused) {
			safeVideo.play();
			safeVideo.muted = false;

			return true;
		} else {
			safeVideo.pause();
			return false;
		}
	}

	var vaultImage: HTMLImageElement;
	var vaultFrameImage: HTMLImageElement;
	function moveLockFrame(ev: MouseEvent) {
		let relatedTarget = ev.relatedTarget as HTMLElement;
		let relatedTargetId = relatedTarget.id;

		if (
			relatedTargetId == "vault-frame-image" ||
			relatedTargetId == "vault-image"
		) {
			return;
		}

		if (window.innerWidth >= 640) {
			gsap.to(vaultFrameImage, { y: "-90%", duration: 1 });
			return;
		}

		gsap.to(vaultFrameImage, { x: "90%", duration: 1 });
	}
	function resetLockFrame(ev: MouseEvent) {
		let target = ev.relatedTarget as HTMLElement;
		let id = target.id;

		if (id == "vault-frame-image" || id == "vault-image") {
			return;
		}

		if (window.innerWidth >= 640) {
			gsap.to(vaultFrameImage, { y: "0%", duration: 1 });
			return;
		}

		gsap.to(vaultFrameImage, { x: "0%", duration: 1 });
	}

	var mounted = false;
	onMount(() => {
		mounted = true;
		homeOffsetHeight.set(128);

		buttonVideo.addEventListener("click", buttonVideoClick);

		togglePlayPause();

		if (vaultImage == null) {
			return;
		}

		vaultImage.addEventListener("mouseenter", (event: MouseEvent) => {
			moveLockFrame(event);
		});
		vaultFrameImage.addEventListener("mouseenter", (event: MouseEvent) => {
			moveLockFrame(event);
		});

		vaultImage.addEventListener("mouseleave", (event: MouseEvent) => {
			resetLockFrame(event);
		});
		vaultFrameImage.addEventListener("mouseleave", (event: MouseEvent) => {
			resetLockFrame(event);
		});
	});
</script>

<main
	class="flex items-center justify-center flex-col gap-0 h-sixthyScreen sm:min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% pt-40 px-5 sm:px-10"
>
	<div
		class="flex relative justify-center items-center p-5 w-full h-full lg:w-3/4"
	>
		<div
			class="flex absolute justify-center items-center w-full h-full z-2 group"
		>
			<img
				bind:this={buttonVideo}
				class="opacity-0 transition-all clickable group-hover:opacity-60 hover:group-hover:opacity-100 hover:group-hover:bg-expo-80 hover:group-hover:rounded-full"
				src="/video/stopCircle.svg"
				alt="Video Button"
			/>
		</div>
		<video
			muted={true}
			bind:this={safeVideo}
			class="object-cover z-0 w-full border-2 border-white shadow-dark-theater"
		>
			<source
				src="/video/cats.mp4"
				type="video/mp4"
			/>
			<track kind="captions" />
		</video>
	</div>

	<div class="flex flex-col gap-20 justify-center items-center w-full h-full">
		<h1 class="text-2xl font-bold text-center z-2">
			Cassaforte a muro, semplice ed efficace: <span
				class="font-extrabold underline">Impossibile notarla</span
			>.
		</h1>
		<div class="flex justify-center items-center w-full">
			<ButtonMiddleHighContrast
				placeholder="Acquista"
				route="/preventivo"
			/>
		</div>
	</div>
</main>

<section
	class="flex items-center justify-center min-h-three-quarters-viewport gap-10 flex-col sm:flex-row w-screen bg-gradient-to-b from-expo from-5% to-black py-52 px-5 sm:px-10"
>
	<!-- Left -->
	<div class="flex flex-col gap-14 justify-center items-center">
		<div class="flex justify-start items-center w-full h-full">
			<h1 class="text-2xl font-bold">Value prop</h1>
		</div>
		<div
			class="flex flex-col gap-6 justify-center items-center w-full h-full"
		>
			<div class="flex justify-start items-center w-full h-full">
				<p class="text-justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Quae, voluptatum? Beatae et doloribus impedit saepe
					provident quia odio omnis error, rerum voluptas fugiat
					consequuntur, atque iusto maiores culpa natus minus! <br />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
					optio dolorum repudiandae quae impedit, eum tempore blanditiis
					quis atque dolorem, neque ullam nemo corrupti esse officiis iste
					saepe vel aspernatur.
					<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam cupiditate culpa quasi. Eveniet, quos doloribus similique
					nulla doloremque vero minus dolorem. Libero sunt dolor ut quibusdam
					ullam ipsam, iure quos.
				</p>
			</div>
			<div class="flex justify-center items-center w-full h-full">
				<ul class="flex flex-row justify-evenly items-center w-full">
					<li class="p-2 border-l-2 border-white">
						<p class="font-semibold">Cost</p>
						<p>500.-</p>
					</li>
					<li class="p-2 border-l-2 border-white">
						<p class="font-semibold">Montaggio</p>
						<p>2 ore</p>
					</li>
					<li class="p-2 border-l-2 border-white">
						<p class="font-semibold">Garanzia</p>
						<p>2 anni</p>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Right -->
	<div class="flex justify-center items-center w-3/4 h-full">
		<div
			class="flex flex-col gap-8 justify-center items-center w-full h-full"
		>
			<div class="flex relative justify-center items-center w-3/4">
				<img
					bind:this={vaultImage}
					id="vault-image"
					class="object-cover absolute z-0 w-full h-full"
					src="/cornici/woman.jpeg"
					alt=""
				/>
				<img
					bind:this={vaultFrameImage}
					id="vault-frame-image"
					class="object-cover z-10 w-full h-full"
					src="/cornici/woman.jpeg"
					alt="Cassaforte"
				/>
			</div>

			<ButtonMiddle
				placeholder="Acquista"
				route="/preventivo"
			/>
		</div>
	</div>
</section>
