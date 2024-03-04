<script lang="ts">
	export var placeholder = "Preventivo gratuito";
	export var route = "/preventivo";
</script>

<a href={route}>
	<button
		class="clickable bg-expo px-1 py-3 h-20 w-64 sm:w-80 flex flex-row justify-center items-center gap-2 shadow-2xl hover:ring-2 ring-white transition-all"
	>
		<div
			class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold"
		>
			{placeholder}
		</div>

		<div class="flex justify-center items-center h-full">
			<img
				src="/button/Vector.svg"
				alt="Button Arrow"
			/>
		</div>
	</button>
</a>
