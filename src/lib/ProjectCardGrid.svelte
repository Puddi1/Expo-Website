<script lang="ts">
    import { t } from "$lib/i18n"; // add

    export var href: any = "/progetti";
    export var Title: any = "Titolo";
    export var Description: any =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro.";
    export var Statistics: any = [
        ["Tempo", "123 giorni"],
        ["Costo", "500'000.-"],
    ];
</script>

<a class="flex items-center justify-center flex-col h-full" {href}
    ><div
        class="flex items-center justify-center flex-col gap-5 transition-all hover:shadow-2xl
                border-l-2 border-b-2 border-white border-opacity-50
                bg-gradient-to-bl from-expo-30 to-black-60 to-60% drop-shadow-2xl backdrop-blur-sm rounded-xl
                py-4 px-2 sm:px-5"
    >
        <div>
            <h1 class="text-2xl font-extrabold">{Title}</h1>
        </div>
        <div
            class="relative border-2 border-white w-7/12 flex items-center justify-center"
        >
            <img
                class="object-cover h-full w-full absolute transition-all opacity-100 hover:opacity-0"
                src="/background/gattoLook.jpeg"
                alt=""
            />
            <img
                class="object-cover h-full w-full"
                src="/background/gatto.jpeg"
                alt=""
            />
        </div>
        <div class="flex items-start justify-center overflow-auto w-8/12">
            <p class="text-xs">
                {Description}
            </p>
        </div>
        <div>
            <ul class="flex flex-row justify-center items-center gap-5">
                {#each Statistics as s}
                    <li
                        class="flex flex-col items-start justify-center gap-1 border-l-2 border-white px-2 text-sm"
                    >
                        <h1>{s[0]}</h1>
                        <p>{s[1]}</p>
                    </li>
                {/each}
            </ul>
        </div>
    </div></a
>
