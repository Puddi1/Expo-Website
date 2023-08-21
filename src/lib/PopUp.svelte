<script lang="ts">
    import { popUp } from "$lib/index";
    import { onMount } from "svelte";

    var errorClass = [
        "bg-gradient-to-bl",
        "from-expo-80",
        "from-80%",
        "to-red-600",
        "to-90%",
    ];
    var successClass = [
        "bg-gradient-to-bl",
        "from-expo-80",
        "from-80%",
        "to-green-600",
        "to-90%",
    ];
    var animationClass = "animate-enter-alert";
    var popUpElement: HTMLElement;
    var popUpContainer: HTMLElement;
    var _popUp: (string | boolean)[];
    popUp.subscribe(async (e) => {
        // Remember to toggle off the animation class every time is called
        // from the callgin block for time space, better solution?
        _popUp = e;
        sendPopUp();
    });

    function sendPopUp() {
        if (!mounted) return;

        if (_popUp[2]) {
            popUpElement.classList.remove(...errorClass);
            popUpElement.classList.add(...successClass);

            popUpContainer.classList.add(animationClass);
        } else {
            popUpElement.classList.remove(...successClass);
            popUpElement.classList.add(...errorClass);

            popUpContainer.classList.add(animationClass);
        }
    }

    var mounted = false;
    onMount(() => {
        mounted = true;
    });
</script>

<div
    bind:this={popUpContainer}
    id="popUpContainer"
    class="absolute z-99 w-full h-full pointer-events-none flex items-center justify-center translate-x-full"
>
    <div
        class="fixed pointer-events-auto flex items-start
        justify-center gap-1 flex-col px-2 py-4 transition-all min-w-16 max-w-md
        border-2 border-white
        backdrop-blur-xl shadow-2xl
        right-24 top-16
        rounded-xl"
        bind:this={popUpElement}
    >
        <h1 class=" font-extrabold">{_popUp[0]}</h1>
        <p class="">{_popUp[1]}</p>
    </div>
</div>
