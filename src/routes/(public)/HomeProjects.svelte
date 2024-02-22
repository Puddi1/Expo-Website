<script lang="ts">
	import { t } from "$lib/languages/i18n"; // add

	import ProjectCard from "$lib/ProjectCard.svelte";
</script>

<!-- Example of one of the projects? -->
<section
	id="progetti"
	class="flex items-center justify-center z-10 min-h-screen w-screen bg-gradient-to-br from-black from-5% to-expo to-95% relative"
>
	<div
		class="flex flex-col gap-10 justify-center items-center p-10 min-w-full min-h-full sm:flex-row"
	>
		<div
			class="flex order-2 justify-center items-center w-full h-full sm:order-1"
		>
			<ProjectCard href="/progetti/0" />
		</div>

		<div
			class="flex flex-col order-1 gap-20 justify-evenly items-center w-full h-full sm:order-2"
		>
			<div class="flex flex-col gap-5 justify-center w-11/12">
				<h1 class="text-4xl font-extrabold">
					Expo Arredo: <span class="text-expo">X</span> Progetti
				</h1>
				<div
					class="flex overflow-auto justify-center w-full h-full items-top"
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit vitae, debitis doloribus commodi voluptate totam
						labore. Rerum, nisi ullam rem quae eveniet sapiente.
						Quidem voluptatibus reiciendis architecto reprehenderit
						commodi facilis.
					</p>
				</div>
			</div>

			<div class="flex justify-center items-center">
				<a href="/progetti">
					<button
						class="flex flex-row gap-2 justify-center items-center px-1 py-3 w-64 h-20 ring-white shadow-2xl transition-all bg-expo sm:w-80 hover:ring-2"
					>
						<div
							class="flex justify-center items-center h-full font-extrabold tracking-wider uppercase font-button"
						>
							Scopri i Progetti
						</div>

						<div class="flex justify-center items-center h-full">
							<img
								src="/button/Vector.svg"
								alt="Button Arrow"
							/>
						</div>
					</button>
				</a>
			</div>
		</div>
	</div>
</section>
