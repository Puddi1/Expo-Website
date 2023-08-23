<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n"; // add

    var usElementsContainer: HTMLElement;

    function flipSide() {
        if (!mounted) {
            return;
        }
    }

    var mounted = false;
    onMount(() => {
        mounted = true;

        usElementsContainer.addEventListener("mouseenter", flipSide);
    });
</script>

<section
    id="noi"
    class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-black from-5% to-expo to-95%"
>
    <div
        class="flex items-center justify-center w-full h-full px-8 sm:px-16 py-4"
    >
        <div class="flex items-center justify-center w-full h-full">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full h-full">
                <li class="flex items-center justify-center p-2">
                    <div
                        bind:this={usElementsContainer}
                        class="relative w-96 h-96 sm:w-120 sm:h-120 border-2 border-white"
                    >
                        <img
                            class="absolute object-cover h-full w-full hover:opacity-0 opacity-100 transition-all"
                            src="/background/cucinaHome.png"
                            alt=""
                        />
                        <div
                            class="bg-expo w-full h-full p-6 sm:p-10 py-20 flex items-center justify-center"
                        >
                            <div
                                class="w-full h-full flex items-top justify-center overflow-auto"
                            >
                                <p class="top-0 text-sm sm:text-xl">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus facere nisi
                                    at, nihil dolor dolorum corporis delectus
                                    reiciendis ab harum quasi soluta est tempora
                                    quis sit molestias fugit accusamus facilis? <br
                                    /> Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Mollitia dicta laudantium maiores consequatur
                                    provident! Quia earum, suscipit, recusandae vero,
                                    dignissimos facilis eum atque ad possimus libero
                                    non quos ea reiciendis?
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center justify-center p-2">
                    <div
                        bind:this={usElementsContainer}
                        class="relative w-96 h-96 sm:w-120 sm:h-120 border-2 border-white"
                    >
                        <img
                            class="absolute object-cover h-full w-full opacity-0 hover:opacity-100 transition-all"
                            src="/background/gatto.jpeg"
                            alt=""
                        />
                        <div
                            class="bg-expo w-full h-full p-6 sm:p-10 py-20 flex items-center justify-center"
                        >
                            <div
                                class="w-full h-full flex items-top justify-center overflow-auto"
                            >
                                <p class="top-0 text-sm sm:text-xl">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus facere nisi
                                    at, nihil dolor dolorum corporis delectus
                                    reiciendis ab harum quasi soluta est tempora
                                    quis sit molestias fugit accusamus facilis? <br
                                    /> Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Mollitia dicta laudantium maiores consequatur
                                    provident! Quia earum, suscipit, recusandae vero,
                                    dignissimos facilis eum atque ad possimus libero
                                    non quos ea reiciendis?
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center justify-center p-2">
                    <div
                        bind:this={usElementsContainer}
                        class="relative w-96 h-96 sm:w-120 sm:h-120 border-2 border-white"
                    >
                        <img
                            class="absolute object-cover h-full w-full opacity-0 hover:opacity-100 transition-all"
                            src="/background/gatto.jpeg"
                            alt=""
                        />
                        <div
                            class="bg-expo w-full h-full p-6 sm:p-10 py-20 flex items-center justify-center"
                        >
                            <div
                                class="w-full h-full flex items-top justify-center overflow-auto"
                            >
                                <p class="top-0 text-sm sm:text-xl">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus facere nisi
                                    at, nihil dolor dolorum corporis delectus
                                    reiciendis ab harum quasi soluta est tempora
                                    quis sit molestias fugit accusamus facilis? <br
                                    /> Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Mollitia dicta laudantium maiores consequatur
                                    provident! Quia earum, suscipit, recusandae vero,
                                    dignissimos facilis eum atque ad possimus libero
                                    non quos ea reiciendis?
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center justify-center p-2">
                    <div
                        bind:this={usElementsContainer}
                        class="relative w-96 h-96 sm:w-120 sm:h-120 border-2 border-white"
                    >
                        <img
                            class="absolute object-cover h-full w-full hover:opacity-0 opacity-100 transition-all"
                            src="/background/cucinaHome.png"
                            alt=""
                        />
                        <div
                            class="bg-expo w-full h-full p-6 sm:p-10 py-20 flex items-center justify-center"
                        >
                            <div
                                class="w-full h-full flex items-top justify-center overflow-auto"
                            >
                                <p class="top-0 text-sm sm:text-xl">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus facere nisi
                                    at, nihil dolor dolorum corporis delectus
                                    reiciendis ab harum quasi soluta est tempora
                                    quis sit molestias fugit accusamus facilis? <br
                                    /> Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Mollitia dicta laudantium maiores consequatur
                                    provident! Quia earum, suscipit, recusandae vero,
                                    dignissimos facilis eum atque ad possimus libero
                                    non quos ea reiciendis?
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
