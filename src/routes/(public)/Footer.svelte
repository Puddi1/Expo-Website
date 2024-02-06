<script lang="ts">
	import { t } from "$lib/i18n";
	import { arredo, cornici } from "$lib/index";
	var _arredo: boolean = false;
	arredo.subscribe((e) => {
		_arredo = e;
	});
	var _cornici: boolean = false;
	cornici.subscribe((e) => {
		_cornici = e;
	});

	import { headerList } from "$lib/index";
	var _headerList: string[][] = [[]];
	headerList.subscribe((e) => {
		_headerList = e;
	});
</script>

<footer
	class="flex z-50 justify-center items-center px-10 py-5 w-full text-white bg-expo"
>
	<div
		class="flex flex-col flex-wrap gap-5 justify-center items-center w-full"
	>
		<div
			class="flex flex-row flex-wrap gap-5 justify-around items-center w-full"
		>
			<div
				class="flex flex-row flex-wrap gap-5 justify-center items-center"
			>
				<div>
					{#if _arredo}
						<a href="/">
							<img
								class="w-20 transition-all hover:drop-shadow-expoLight clickable"
								src="/favicon/expoArredoWhite.svg"
								alt="Expo Arredo Favicon"
							/>
						</a>
					{:else if _cornici}
						<a href="/cornici">
							<img
								class="w-20 transition-all hover:drop-shadow-expoLight clickable"
								src="/favicon/expoCorniciWhite.svg"
								alt="Expo Cornici Favicon"
							/>
						</a>
					{:else}
						<a href="/">
							<img
								class="w-20 transition-all hover:drop-shadow-expoLight clickable"
								src="/favicon/expoArredoWhite.svg"
								alt="Expo Favicon"
							/>
						</a>
					{/if}
				</div>
				<div class="flex flex-wrap justify-start items-center">
					{#if _arredo}
						<p>
							Immagina, organizza <br /> e vivi la casa dei tuoi sogni
						</p>
					{:else if _cornici}
						<p>
							Incornicia, ripara <br /> e vivi i quadri dei tuoi sogni
						</p>
					{:else}
						<p>
							Immagina, organizza <br /> e vivi la casa dei tuoi sogni
						</p>
					{/if}
				</div>
			</div>

			<div
				class="flex justify-center items-center px-4 w-auto border-l-2 border-l-slate-300"
			>
				<ul class="flex flex-col gap-5 justify-center items-start">
					<li class="font-extrabold border-b-2 border-white">
						{$t("footer.sezioni")}
					</li>
					<ul
						class="flex flex-col flex-wrap gap-2 justify-center items-start"
					>
						{#each _headerList as e}
							<li
								class="border-b-2 transition-all cursor-pointer hover:border-b-white border-b-transparent clickable"
							>
								<a href={e[0]}>{e[1]}</a>
							</li>
						{/each}
					</ul>
				</ul>
			</div>

			<div class="flex flex-wrap px-4 border-l-2 border-l-slate-300">
				<ul
					class="flex flex-col flex-wrap gap-5 justify-center items-start"
				>
					<li class="font-extrabold border-b-2 border-white">
						{$t("footer.contatti")}
					</li>
					<li
						class="flex flex-row flex-wrap gap-3 justify-center items-center"
					>
						<img src="/favicon/envelope.svg" alt="Envelope icon" />
						<a
							class="border-b-2 border-transparent transition-all clickable hover:border-b-white hover:border-b-2"
							href="mailto:email@example.com"
							>info@expoarredo.ch</a
						>
					</li>
					<li
						class="flex flex-row flex-wrap gap-3 justify-center items-center"
					>
						<img src="/favicon/phone.svg" alt="Phone icon" />
						<a
							class="border-b-2 border-transparent transition-all clickable hover:border-b-white hover:border-b-2"
							href="tel:+41916461047">+41 91 646 10 47</a
						>
					</li>
					<li
						class="flex flex-row flex-wrap gap-3 justify-center items-center"
					>
						<img src="/favicon/mapMaker.svg" alt="Map Maker icon" />
						<p>
							{$t("footer.via")} Vignalunga, 2c<br />6850
							Mendrisio - Svizzera
						</p>
					</li>
					<li
						class="flex flex-row flex-wrap gap-3 justify-center items-center"
					>
						<img src="/favicon/clock.svg" alt="Map Maker icon" />
						<p>
							{$t("footer.lunVen")} <br /> 9.00 - 12.00 / 14.00 -
							18.00 <br />
							{$t("footer.sabato")} <br />
							{$t("footer.soloAppuntamento")}
						</p>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-row justify-start items-center py-2 w-full text-xs border-t-2 border-slate-400 text-slate-200"
		>
			<div>
				Copyright © 2015 Expo Arredo SA - {$t("footer.diritti")}
			</div>
		</div>
	</div>
</footer>
