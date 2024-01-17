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

            buttonArrow.classList.add("hidden");
            return;
        }

        buttonHeader.classList.remove("bg-transparent");
        buttonHeader.classList.remove("text-transparent");

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
        class="bg-expo px-2 py-3 flex flex-row justify-center items-center gap-2 shadow-2xl hover:ring-2 ring-white transition-all h-12 w-32"
    >
        <div
            class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold text-xs"
        >
            {placeholder}
        </div>

        <div class="flex justify-center items-center h-full px-1">
            <img
                bind:this={buttonArrow}
                src="/button/Vector.svg"
                alt="Button Arrow"
            />
        </div>
    </button>
</a>
