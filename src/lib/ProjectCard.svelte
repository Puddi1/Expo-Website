<script lang="ts">
    import { t } from "$lib/i18n"; // add

    export var href = "/progetti";
    export var Title = "Titolo";
    export var Description =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro.";
    export var Time = "12g";
    export var Cost = "5'000._";
</script>

<a
    class="flex items-center justify-center flex-col w-full sm:w-3/4 h-full"
    {href}
    ><div
        class="flex items-center justify-center flex-col gap-5 transition-all hover:shadow-2xl
                border-l-2 border-b-2 border-white border-opacity-50
                bg-gradient-to-bl from-expo-30 to-black-60 to-60% drop-shadow-2xl backdrop-blur-sm rounded-xl
                py-4 px-2 sm:px-5"
    >
        <div>
            <h1 class="text-3xl font-extrabold">{Title}</h1>
        </div>
        <div
            class="border-2 border-white w-8/12 flex items-center justify-center"
        >
            <img
                class="object-cover h-full w-full"
                src="/background/gatto.jpeg"
                alt=""
            />
        </div>
        <div class="flex items-start justify-center overflow-auto w-10/12">
            <p>
                {Description}
            </p>
        </div>
        <div>
            <ul class="flex flex-row justify-center items-center gap-5">
                <li
                    class="flex flex-col items-start justify-center gap-1 border-l-2 border-white px-2"
                >
                    <h1>Tempo</h1>
                    <p>{Time}</p>
                </li>
                <li
                    class="flex flex-col items-start justify-center gap-1 border-l-2 border-white px-2"
                >
                    <h1>Costo</h1>
                    <p>{Cost}</p>
                </li>
            </ul>
        </div>
    </div></a
>
