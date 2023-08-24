<script lang="ts">
    import { t } from "$lib/i18n"; // add

    import ProjectCard from "$lib/ProjectCard.svelte";
</script>

<!-- Example of one of the projects? -->
<section
    id="progetti"
    class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-black from-5% to-expo to-95%"
>
    <div
        class="flex flex-col sm:flex-row justify-center items-center gap-10 p-10 h-full w-full"
    >
        <div
            class="flex items-center justify-center w-full h-full order-2 sm:order-1"
        >
            <ProjectCard href="/progetti/0" />
        </div>

        <div
            class="flex flex-col justify-evenly items-center gap-20 h-full w-full order-1 sm:order-2"
        >
            <div class="flex flex-col justify-center w-11/12 gap-5">
                <h1 class="text-4xl font-extrabold">
                    Expo Arredo: <span class="text-expo">X</span> Progetti
                </h1>
                <div
                    class="w-full h-full flex items-top justify-center overflow-auto"
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

            <div class="flex items-center justify-center">
                <a href="/progetti">
                    <button
                        class="bg-expo px-1 py-3 h-20 w-64 sm:w-80 flex flex-row justify-center items-center gap-2 shadow-2xl hover:ring-2 ring-white transition-all"
                    >
                        <div
                            class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold"
                        >
                            Scopri i Progetti
                        </div>

                        <div class="flex justify-center items-center h-full">
                            <img src="/button/Vector.svg" alt="Button Arrow" />
                        </div>
                    </button>
                </a>
            </div>
        </div>
    </div>
</section>
