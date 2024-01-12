<script lang="ts">
    import { t } from "$lib/i18n"; // add
</script>

<section
    id="servizi"
    class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-bl from-expo from-5% to-black to-95%"
>
    <div
        class="flex items-center justify-center flex-col sm:grid grid-cols-3 grid-rows-3 h-full w-full px-10 py-5 gap-5 sm:gap-0"
    >
        <!-- change img rotation with transform sm:transorm-0 -->
        <!-- 1 row 1-3 col -->
        <div
            class="bg-expo border-2 border-white flex justify-center items-center flex-col sm:flex-row p-4 w-full h-full gap-5"
        >
            <div
                class="relative flex items-center justify-center w-full h-full"
            >
                <img
                    class="absolute object-cover w-full h-full"
                    src="/background/gatto.jpeg"
                    alt=""
                />
            </div>
            <div
                class="flex items-center sm:items-start justify-center flex-col gap-3"
            >
                <h1 class="font-extrabold text-xl">Misurazione e Preventivo</h1>
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
        </div>

        <div class="flex items-center justify-center" />

        <div
            class="bg-expo border-2 border-white flex justify-center items-center p-4 w-full h-full flex-col gap-3"
        >
            <div class="relative flex items-center justify-center w-3/4 h-2/4">
                <img
                    class="absolute object-cover w-full h-full"
                    src="/background/gatto.jpeg"
                    alt=""
                />
            </div>

            <h1 class="font-extrabold text-xl">Ideazione e Approvazione</h1>
            <div class="overflow-auto">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni fugiat qui maxime a dignissimos reiciendis facere vero
                    dolores autem. Quia quos rerum, totam incidunt consequatur
                    nam. Laboriosam doloribus quo perferendis!
                </p>
            </div>
        </div>
        <!-- 2 row 1-3 col -->
        <div />
        <div
            class="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
            <a href="/servizio">
                <button
                    class="bg-expo px-1 py-3 h-20 w-64 sm:w-80 flex flex-row justify-center items-center gap-2 shadow-2xl hover:ring-2 ring-white transition-all"
                >
                    <div
                        class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold"
                    >
                        Scopri il Servizio
                    </div>

                    <div class="flex justify-center items-center h-full">
                        <img src="/button/Vector.svg" alt="Button Arrow" />
                    </div>
                </button>
            </a>
        </div>
        <div />
        <!-- 3 row 1-3col -->
        <div
            class="bg-expo border-2 border-white flex justify-center items-center p-4 w-full h-full flex-col gap-3"
        >
            <div class="relative flex items-center justify-center w-3/4 h-2/4">
                <img
                    class="absolute object-cover w-full h-full"
                    src="/background/gatto.jpeg"
                    alt=""
                />
            </div>

            <h1 class="font-extrabold text-xl">Consegna e montaggio</h1>
            <div class="overflow-auto">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni fugiat qui maxime a dignissimos reiciendis facere vero
                    dolores autem. Quia quos rerum, totam incidunt consequatur
                    nam. Laboriosam doloribus quo perferendis!
                </p>
            </div>
        </div>

        <div
            class="flex items-center justify-center col-start-2 col-end-3 row-start-3 row-end-4"
        />

        <div
            class="bg-expo border-2 border-white flex justify-center items-center flex-col sm:flex-row p-4 w-full h-full gap-5"
        >
            <div
                class="relative flex items-center justify-center w-full h-full"
            >
                <img
                    class="absolute object-cover w-full h-full"
                    src="/background/gatto.jpeg"
                    alt=""
                />
            </div>
            <div
                class="flex items-center sm:items-start justify-center flex-col gap-3"
            >
                <h1 class="font-extrabold text-xl">Goditelo</h1>
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
        </div>
    </div>
</section>
