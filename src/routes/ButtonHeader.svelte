<script lang="ts">
    export var placeholder: string = "preventivo";
</script>

<button
    class="bg-expo px-2 py-3 flex flex-row justify-center items-center gap-2 shadow-2xl hover:ring-2 ring-white transition-all h-12 w-32"
>
    <div
        class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold text-xs"
    >
        {placeholder}
    </div>

    <div class="flex justify-center items-center h-full px-1">
        <img src="/button/Vector.svg" alt="Button Arrow" />
    </div>
</button>
