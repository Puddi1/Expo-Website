<script lang="ts">
    import { t } from "$lib/i18n"; // add
    import ProjectCard from "$lib/ProjectCard.svelte";

    import { headerList } from "$lib/index";
    $: headerList.set([
        ["/cornici", $t("header.cornici")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
        ["/preventivo", $t("header.contatta")],
    ]);

    var serviceStages = [
        [
            "Misurazione",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
        [
            "Preventivo",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
        [
            "Ideazione",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
        [
            "Approvazione",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
        [
            "Consegna",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
        [
            "Montaggio",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
        [
            "Goditelo!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
        ],
    ];
</script>

<main
    class="flex items-center justify-center flex-col min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% py-36 lg:py-24 px-10"
>
    <div
        class="flex items-start justify-center flex-col pt-0 sm:pt-16 px-3 sm:px-10 py-5 gap-10"
    >
        {#each serviceStages as s, i}
            {#if i % 2 == 0}
                <div
                    class="flex items-center justify-around flex-col lg:flex-row gap-5"
                >
                    <div
                        class="bg-expo border-2 border-white py-3 px-8 w-full lg:w-3/4 h-full flex flex-col sm:flex-row items-start justify-center gap-3"
                    >
                        <div
                            class="flex flex-col items-start justify-center w-full h-full gap-3"
                        >
                            <div class="h-full w-full text-3xl font-extrabold">
                                <h1>{s[0]}</h1>
                            </div>
                            <div
                                class="h-full w-full overflow-auto text-sm lg:text-base"
                            >
                                <p
                                    class="flex items-center justify-center text-justify"
                                >
                                    {@html s[1]}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex items-start justify-center w-full lg:w-1/4"
                    >
                        <div
                            class="w-full h-full flex items-center justify-center"
                        >
                            <img
                                class=" border-2 border-white"
                                src="/background/gattoLook.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            {:else}
                <div
                    class="flex items-center justify-around flex-col lg:flex-row gap-5"
                >
                    <div
                        class="flex items-start justify-center w-full lg:w-1/4 lg:order-1 order-2"
                    >
                        <div
                            class="w-full h-full flex items-center justify-center"
                        >
                            <img
                                class=" border-2 border-white"
                                src="/background/gattoLook.jpeg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div
                        class="bg-expo border-2 border-white py-3 px-8 w-full lg:w-3/4 h-full flex flex-col sm:flex-row items-start justify-center gap-3 lg:order-2 order-1"
                    >
                        <div
                            class="flex flex-col items-start justify-center w-full h-full gap-3"
                        >
                            <div class="h-full w-full text-3xl font-extrabold">
                                <h1>{s[0]}</h1>
                            </div>
                            <div
                                class="h-full w-full overflow-auto text-sm lg:text-base"
                            >
                                <p
                                    class="flex items-center justify-center text-justify"
                                >
                                    {@html s[1]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</main>

<!-- Example of one of the projects? -->
<section
    id="progetti"
    class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-b from-expo from-5% to-black to-99%"
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
                    Abbiamo servito oltre <span class="text-blue-500"
                        >123456</span
                    >
                    Progetti.
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
