<script lang="ts">
	import { onMount } from "svelte";
	export var placeholder: string = "preventivo";
	export var route: string = "/preventivo";

	export var displayNone: boolean = false;

	var buttonHeader: HTMLButtonElement | null = null;
	var buttonArrow: HTMLImageElement | null = null;
	function manageDisplayButton() {
		if (!mounted) return;
		if (buttonHeader == null) return;
		if (buttonArrow == null) return;

		if (displayNone) {
			buttonHeader.classList.add("bg-transparent");
			buttonHeader.classList.add("text-transparent");
			buttonHeader.classList.add("pointer-events-none");

			buttonHeader.classList.remove("cursor-pointer");
			buttonHeader.classList.remove("pointer-events-auto");

			buttonArrow.classList.add("hidden");
			return;
		}

		buttonHeader.classList.remove("bg-transparent");
		buttonHeader.classList.remove("text-transparent");
		buttonHeader.classList.remove("pointer-events-none");

		buttonHeader.classList.add("cursor-pointer");
		buttonHeader.classList.add("pointer-events-auto");

		buttonArrow.classList.remove("hidden");
	}

	var mounted = false;
	onMount(() => {
		mounted = true;

		manageDisplayButton();
	});
</script>

<a href={route}>
	<button
		bind:this={buttonHeader}
		class="flex flex-row gap-2 justify-center items-center px-2 py-3 w-32 h-12 ring-white shadow-2xl transition-all bg-expo hover:ring-2"
	>
		<div
			class="flex justify-center items-center h-full text-xs font-extrabold tracking-wider uppercase font-button"
		>
			{placeholder}
		</div>

		<div class="flex justify-center items-center px-1 h-full">
			<img
				bind:this={buttonArrow}
				src="/button/Vector.svg"
				alt="Button Arrow"
			/>
		</div>
	</button>
</a>
