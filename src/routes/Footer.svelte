<script lang="ts">
    import { t } from "$lib/i18n";
    import { arredo, cornici } from "$lib/index";
    var _arredo: boolean = false;
    arredo.subscribe((e) => {
        _arredo = e;
    });
    var _cornici: boolean = false;
    cornici.subscribe((e) => {
        _cornici = e;
    });

    import { headerList } from "$lib/index";
    var _headerList: string[][] = [[]];
    headerList.subscribe((e) => {
        _headerList = e;
    });
</script>

<footer
    class="text-white w-full bg-expo flex items-center justify-center px-10 py-5 z-50"
>
    <div
        class="flex flex-col flex-wrap items-center justify-center gap-5 w-full"
    >
        <div
            class="flex flex-row flex-wrap items-center justify-around gap-5 w-full"
        >
            <div
                class="flex flex-row flex-wrap items-center justify-center gap-5"
            >
                <div>
                    <img
                        class="w-20"
                        src="/favicon/expoArredoWhite.svg"
                        alt="Expo Icon"
                    />
                </div>
                <div class="flex flex-wrap items-center justify-start">
                    <p>
                        Immagina, organizza <br /> e vivi la casa dei tuoi sogni
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap px-4 border-l-2 border-l-slate-300">
                <ul class="flex flex-col gap-5 flex-wrap">
                    {#if _arredo}
                        <li class="border-b-2 border-white">
                            {$t("footer.arredo")}
                        </li>
                        <li
                            class="border-b-2 border-transparent hover:border-white transition-all clickable"
                        >
                            <a href="/cornici">{$t("footer.cornici")}</a>
                        </li>
                    {:else if _cornici}
                        <li
                            class="border-b-2 border-transparent hover:border-white transition-all clickable"
                        >
                            <a href="/">{$t("footer.arredo")}</a>
                        </li>
                        <li class="border-b-2 border-white">
                            {$t("footer.cornici")}
                        </li>
                    {:else}
                        <li
                            class="border-b-2 border-transparent hover:border-white transition-all clickable"
                        >
                            <a href="/">{$t("footer.arredo")}</a>
                        </li>
                        <li
                            class="border-b-2 border-transparent hover:border-white transition-all clickable"
                        >
                            <a href="/cornici">{$t("footer.cornici")}</a>
                        </li>
                    {/if}
                </ul>
            </div>

            <div
                class="flex items-center justify-center w-auto px-4 border-l-2 border-l-slate-300"
            >
                <ul class="flex flex-col gap-5 justify-center items-start">
                    <li class="border-b-2 border-white">
                        {$t("footer.sezioni")}
                    </li>
                    <ul
                        class="flex flex-col gap-2 justify-center items-start flex-wrap"
                    >
                        {#each _headerList as e}
                            <li
                                class="cursor-pointer transition-all hover:border-b-white border-b-2 border-b-transparent clickable"
                            >
                                <a href={e[0]}>{e[1]}</a>
                            </li>
                        {/each}
                    </ul>
                </ul>
            </div>

            <div class="flex flex-wrap px-4 border-l-2 border-l-slate-300">
                <ul
                    class="flex flex-col flex-wrap items-start justify-center gap-5"
                >
                    <li class="border-b-2 border-white">
                        {$t("footer.contatti")}
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img src="/favicon/envelope.svg" alt="Envelope icon" />
                        <a
                            class="clickable hover:border-b-white hover:border-b-2 border-b-2 border-transparent transition-all"
                            href="mailto:email@example.com"
                            >info@expoarredo.ch</a
                        >
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img src="/favicon/phone.svg" alt="Phone icon" />
                        <a
                            class="clickable hover:border-b-white hover:border-b-2 border-b-2 border-transparent transition-all"
                            href="tel:+41916461047">+41 91 646 10 47</a
                        >
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img src="/favicon/mapMaker.svg" alt="Map Maker icon" />
                        <p>
                            Via Vignalunga, 2c<br />6850 Mendrisio - Svizzera
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="flex flex-row justify-start items-center border-t-2 border-slate-400 w-full text-xs text-slate-200 py-2"
        >
            <div>
                Copyright © 2015 Expo Arredo SA - {$t("footer.diritti")}
            </div>
        </div>
    </div>
</footer>
