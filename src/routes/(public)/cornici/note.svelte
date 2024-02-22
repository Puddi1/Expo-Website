<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "$lib/languages/i18n"; // add

	var frame = [
		[
			"/cornici/table.jpeg",
			"/cornici/table.jpeg",
			"Incorniciatura quadri",
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa sed blanditiis accusamus obcaecati! Delectus quibusdam officia facere. Fugiat nulla vitae eius debitis similique sed omnis consequatur obcaecati ex a!",
		],
		[
			"/cornici/table.jpeg",
			"/cornici/table.jpeg",
			"Sostituzione vetri",
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa sed blanditiis accusamus obcaecati! Delectus quibusdam officia facere. Fugiat nulla vitae eius debitis similique sed omnis consequatur obcaecati ex a!",
		],
		[
			"/cornici/table.jpeg",
			"/cornici/table.jpeg",
			"Manutenzione e Recupero",
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa sed blanditiis accusamus obcaecati! Delectus quibusdam officia facere. Fugiat nulla vitae eius debitis similique sed omnis consequatur obcaecati ex a!",
		],
	];

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main
	id="servizi"
	class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-bl from-expo from-5% to-black to-95%"
>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-16 lg:gap-y-52 w-full h-full p-10"
	>
		{#each frame as f, i}
			{#if i % 2 == 0}
				<div
					class="w-full h-full flex items-center justify-center p-3 sm:p-5"
				>
					<div
						class="w-full sm:w-3/4 flex items-start justify-center flex-col gap-3"
					>
						<h1 class="font-extrabold text-3xl">
							{f[2]}
						</h1>
						<div
							class="flex items-center justify-start overflow-auto"
						>
							<p class="text-xl text-justify">
								{f[3]}
							</p>
						</div>
					</div>
				</div>
				<div
					class="relative w-full h-full flex items-center justify-center flex-col sm:flex-row gap-16"
				>
					<div class="w-full h-full flex items-center justify-center">
						<img
							class="object-cover w-full"
							src={f[0]}
							alt=""
						/>
					</div>
					<div class="w-full h-full flex items-center justify-center">
						<img
							class="object-cover w-full"
							src={f[1]}
							alt=""
						/>
					</div>
				</div>
			{:else}
				<div
					class="relative w-full h-full flex items-center justify-center flex-col sm:flex-row gap-16"
				>
					<div class="w-full h-full flex items-center justify-center">
						<img
							class="object-cover w-full"
							src={f[0]}
							alt=""
						/>
					</div>
					<div class="w-full h-full flex items-center justify-center">
						<img
							class="object-cover w-full"
							src={f[1]}
							alt=""
						/>
					</div>
				</div>
				<div
					class="w-full h-full flex items-center justify-center p-3 sm:p-5"
				>
					<div
						class="w-full sm:w-3/4 flex items-start justify-center flex-col gap-3"
					>
						<h1 class="font-extrabold text-3xl">
							{f[2]}
						</h1>
						<div
							class="flex items-center justify-start overflow-auto"
						>
							<p class="text-xl text-justify">
								{f[3]}
							</p>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</main>
