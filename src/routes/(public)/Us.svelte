<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "$lib/i18n"; // add

	var usElementsContainer: HTMLElement;
	var usPairs = [
		{
			img: "/background/cucinaHome.png",
			description: `Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Voluptatibus facere nisi
									at, nihil dolor dolorum corporis delectus
									reiciendis ab harum quasi soluta est tempora
									quis sit molestias fugit accusamus facilis? <br
									/> Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Mollitia dicta laudantium maiores consequatur
									provident! Quia earum, suscipit, recusandae vero,
									dignissimos facilis eum atque ad possimus libero
									non quos ea reiciendis?'`,
		},
	];

	function flipSide() {
		if (!mounted) {
			return;
		}
	}

	var mounted = false;
	onMount(() => {
		mounted = true;

		usElementsContainer.addEventListener("mouseenter", flipSide);
	});
</script>

<section
	id="noi"
	class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-black from-5% to-expo to-95% py-10"
>
	<div
		class="flex justify-center items-center px-8 py-4 w-full h-full lg:px-16"
	>
		<div class="flex justify-center items-center w-full h-full">
			<ul class="grid grid-cols-1 gap-16 w-full h-full lg:grid-cols-2">
				<li class="flex justify-center items-center p-2">
					<div
						bind:this={usElementsContainer}
						class="relative w-96 h-96 border-2 border-white sm:w-120 sm:h-120"
					>
						<img
							class="object-cover absolute w-full h-full opacity-0 transition-all hover:opacity-100"
							src="/background/gatto.jpeg"
							alt=""
						/>
						<div
							class="flex justify-center items-center p-6 py-20 w-full h-full bg-expo sm:p-10"
						>
							<div
								class="flex overflow-auto justify-center w-full h-full items-top"
							>
								<p class="top-0 text-sm sm:text-xl">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Voluptatibus facere nisi
									at, nihil dolor dolorum corporis delectus
									reiciendis ab harum quasi soluta est tempora
									quis sit molestias fugit accusamus facilis? <br
									/> Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Mollitia dicta laudantium maiores consequatur
									provident! Quia earum, suscipit, recusandae vero,
									dignissimos facilis eum atque ad possimus libero
									non quos ea reiciendis?
								</p>
							</div>
						</div>
					</div>
				</li>

				<li class="flex justify-center items-center p-2">
					<div
						bind:this={usElementsContainer}
						class="relative w-96 h-96 border-2 border-white sm:w-120 sm:h-120"
					>
						<img
							class="object-cover absolute w-full h-full opacity-100 transition-all hover:opacity-0"
							src="/background/cucinaHome.png"
							alt=""
						/>
						<div
							class="flex justify-center items-center p-6 py-20 w-full h-full bg-expo sm:p-10"
						>
							<div
								class="flex overflow-auto justify-center w-full h-full items-top"
							>
								<p class="top-0 text-sm sm:text-xl">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Voluptatibus facere nisi
									at, nihil dolor dolorum corporis delectus
									reiciendis ab harum quasi soluta est tempora
									quis sit molestias fugit accusamus facilis? <br
									/> Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Mollitia dicta laudantium maiores consequatur
									provident! Quia earum, suscipit, recusandae vero,
									dignissimos facilis eum atque ad possimus libero
									non quos ea reiciendis?
								</p>
							</div>
						</div>
					</div>
				</li>

				<li class="flex justify-center items-center p-2">
					<div
						bind:this={usElementsContainer}
						class="relative w-96 h-96 border-2 border-white sm:w-120 sm:h-120"
					>
						<img
							class="object-cover absolute w-full h-full opacity-100 transition-all hover:opacity-0"
							src="/background/cucinaHome.png"
							alt=""
						/>
						<div
							class="flex justify-center items-center p-6 py-20 w-full h-full bg-expo sm:p-10"
						>
							<div
								class="flex overflow-auto justify-center w-full h-full items-top"
							>
								<p class="top-0 text-sm sm:text-xl">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Voluptatibus facere nisi
									at, nihil dolor dolorum corporis delectus
									reiciendis ab harum quasi soluta est tempora
									quis sit molestias fugit accusamus facilis? <br
									/> Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Mollitia dicta laudantium maiores consequatur
									provident! Quia earum, suscipit, recusandae vero,
									dignissimos facilis eum atque ad possimus libero
									non quos ea reiciendis?
								</p>
							</div>
						</div>
					</div>
				</li>

				<li class="flex justify-center items-center p-2">
					<div
						bind:this={usElementsContainer}
						class="relative w-96 h-96 border-2 border-white sm:w-120 sm:h-120"
					>
						<img
							class="object-cover absolute w-full h-full opacity-0 transition-all hover:opacity-100"
							src="/background/gatto.jpeg"
							alt=""
						/>
						<div
							class="flex justify-center items-center p-6 py-20 w-full h-full bg-expo sm:p-10"
						>
							<div
								class="flex overflow-auto justify-center w-full h-full items-top"
							>
								<p class="top-0 text-sm sm:text-xl">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Voluptatibus facere nisi
									at, nihil dolor dolorum corporis delectus
									reiciendis ab harum quasi soluta est tempora
									quis sit molestias fugit accusamus facilis? <br
									/> Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Mollitia dicta laudantium maiores consequatur
									provident! Quia earum, suscipit, recusandae vero,
									dignissimos facilis eum atque ad possimus libero
									non quos ea reiciendis?
								</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
