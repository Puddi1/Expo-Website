<script lang="ts">
    import { onMount } from "svelte";
    import ButtonHeader from "./ButtonHeader.svelte";

    import { arredo, cornici } from "$lib/index";
    var _arredo: boolean = false;
    arredo.subscribe((e) => {
        _arredo = e;
    });
    var _cornici: boolean = false;
    cornici.subscribe((e) => {
        _cornici = e;
    });

    import { homeOffsetHeight } from "$lib/index";
    var _homeOffsetHeight: number | null = null;
    homeOffsetHeight.subscribe((e) => {
        _homeOffsetHeight = e;
    });
    import { headerList } from "$lib/index";
    var _headerList: string[][] = [[]];
    headerList.subscribe((e) => {
        _headerList = e;
    });

    import { t, locale, locales } from "$lib/i18n";
    var languagesDropDownMenu: HTMLElement;
    function changeLanguage(e: any) {
        // change local order
        locales[locales.indexOf(e.target.innerText)] = locales[0];
        locales[0] = e.target.innerText;

        // Set language
        locale.set(locales[0]);
    }

    var headerSection: HTMLElement;
    var lastScrollPosition: number = 0;

    var hamburgerMenu: HTMLElement;
    var isLeftMenuActive: boolean = false;
    function leftMenu() {
        if (!mounted) {
            return;
        }

        if (isLeftMenuActive) {
            headerSection.classList.remove("translate-x-0");
            headerSection.classList.add("-translate-x-96");
            hamburgerMenu.classList.remove("translate-x-36");
            isLeftMenuActive = false;
            return;
        }

        headerSection.classList.remove("-translate-x-96");
        headerSection.classList.add("translate-x-0");
        hamburgerMenu.classList.add("translate-x-36");
        isLeftMenuActive = true;
    }

    function addHeaderBigSize() {
        if (window.scrollY <= 25) {
            headerSection.classList.remove("sm:border-opacity-30");
            headerSection.classList.add("sm:border-opacity-0");
        } else {
            headerSection.classList.remove("sm:border-opacity-0");
            headerSection.classList.add("sm:border-opacity-30");
        }

        if (window.scrollY <= 5) {
            headerSection.classList.remove("shadow-2xl");
            headerSection.classList.remove(
                "sm:bg-opacity-80",
                "sm:backdrop-blur"
            );
            //
            headerSection.classList.add("shadow-none");
            headerSection.classList.add(
                "sm:bg-opacity-0",
                "sm:backdrop-blur-none"
            );
        } else {
            headerSection.classList.remove("shadow-none");
            headerSection.classList.remove(
                "sm:bg-opacity-0",
                "sm:backdrop-blur-none"
            );
            //
            headerSection.classList.add("shadow-2xl");
            headerSection.classList.add("sm:bg-opacity-80", "sm:backdrop-blur");
        }
    }

    var mounted = false;
    onMount(() => {
        mounted = true;

        if (_homeOffsetHeight == 0) {
            headerSection.classList.remove("fixed");
            headerSection.classList.add("absolute");
            return;
        } else {
            headerSection.classList.remove("absolute");
            headerSection.classList.add("fixed");
        }

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);

        function onResize() {
            if (window.innerWidth < 640) {
                hamburgerMenu.classList.remove("translate-x-36");
                headerSection.classList.remove("absolute", "translate-x-0");

                headerSection.classList.add(
                    "-translate-x-96",
                    "bg-gradient-to-b",
                    "from-expo-90",
                    "from-5%",
                    "to-black-90",
                    "to-35%",
                    "border-opacity-30",
                    "border-r-2",
                    "border-r-white",
                    "fixed"
                );

                isLeftMenuActive = false;
                return;
            }

            headerSection.classList.remove(
                "bg-gradient-to-b",
                "from-expo-90",
                "from-5%",
                "to-black-90",
                "to-35%",
                "border-opacity-30"
            );

            if (_homeOffsetHeight == 0) {
                headerSection.classList.remove("shadow-2xl");
                headerSection.classList.remove(
                    "sm:bg-opacity-80",
                    "sm:backdrop-blur",
                    "fixed"
                );
                //
                headerSection.classList.add("shadow-none");
                headerSection.classList.add(
                    "sm:bg-opacity-0",
                    "sm:backdrop-blur-none",
                    "absolute"
                );
                headerSection.classList.add("sm:bg-neutral-900");
            }

            addHeaderBigSize();
            headerSection.classList.add("sm:bg-neutral-900");
        }

        // Under 650px width

        // on loading and over 650px width
        if (window.innerWidth >= 640) {
            headerSection.classList.remove(
                "bg-gradient-to-b",
                "from-expo-90",
                "from-5%",
                "to-black-90",
                "to-35%",
                "border-opacity-30"
            );

            if (_homeOffsetHeight == 0) {
                headerSection.classList.remove("shadow-2xl");
                headerSection.classList.remove(
                    "sm:bg-opacity-80",
                    "sm:backdrop-blur",
                    "fixed"
                );
                //
                headerSection.classList.add("shadow-none");
                headerSection.classList.add(
                    "sm:bg-opacity-0",
                    "sm:backdrop-blur-none",
                    "absolute"
                );
                headerSection.classList.add("sm:bg-neutral-900");
            }

            addHeaderBigSize();

            headerSection.classList.add("sm:bg-neutral-900");
        } else {
            headerSection.classList.add(
                "bg-gradient-to-b",
                "from-expo-90",
                "from-5%",
                "to-black-90",
                "to-35%",
                "border-opacity-30",
                "border-r-2",
                "border-r-white"
            );
        }
        // Over 650px width
        function onScroll() {
            if (window.innerWidth < 640 || _homeOffsetHeight == 0) {
                return;
            }

            if (window.scrollY <= 25) {
                headerSection.classList.remove("sm:border-opacity-30");
                headerSection.classList.add("sm:border-opacity-0");
            } else {
                headerSection.classList.remove("border-opacity-0");
                headerSection.classList.add("sm:border-opacity-30");
            }

            if (window.scrollY <= 5) {
                headerSection.classList.remove("shadow-2xl");
                headerSection.classList.remove(
                    "sm:bg-opacity-80",
                    "sm:backdrop-blur"
                );
                //
                headerSection.classList.add("shadow-none");
                headerSection.classList.add(
                    "sm:bg-opacity-0",
                    "sm:backdrop-blur-none"
                );
            } else {
                headerSection.classList.remove("shadow-none");
                headerSection.classList.remove(
                    "sm:bg-opacity-0",
                    "sm:backdrop-blur-none"
                );
                //
                headerSection.classList.add("shadow-2xl");
                headerSection.classList.add(
                    "sm:bg-opacity-80",
                    "sm:backdrop-blur"
                );
            }

            if (_homeOffsetHeight == null) {
                return;
            }

            let downScroll = lastScrollPosition <= window.scrollY;
            let upScrollSpeed = lastScrollPosition - window.scrollY;
            let inGeneralPresentation = _homeOffsetHeight / 2 > window.scrollY;
            lastScrollPosition = window.scrollY;

            if (!mounted) {
                return;
            }

            if (inGeneralPresentation) {
                return;
            }

            if (!downScroll && upScrollSpeed > 10) {
                headerSection.classList.remove("-translate-y-24");
                return;
            }

            if (downScroll) {
                headerSection.classList.add("-translate-y-24");
            }
        }
    });
</script>

<header
    class="text-white z-50 fixed sm:w-full w-auto sm:h-24 h-full

    flex flex-col px-4 py-2 sm:p-header sm:flex-row justify-evenly sm:justify-between items-start sm:items-center sm:gap-2

    sm:border-b-2 sm:border-b-white sm:border-opacity-0 sm:bg-opacity-80 sm:backdrop-blur sm:border-r-0 sm:-translate-x-0 backdrop-blur

    -translate-x-96
    
    transition-all"
    bind:this={headerSection}
    id="header"
>
    <div class="flex justify-center items-center w-full sm:w-auto sm:h-full">
        {#if _arredo}
            <a href="/">
                <img
                    class="w-16 min-w-16 transition-all hover:drop-shadow-expoLight clickable"
                    src="/favicon/expoArredoWhite.svg"
                    alt="Expo Arredo Favicon"
                />
            </a>
        {:else if _cornici}
            <a href="/cornici">
                <img
                    class="w-16 min-w-16 transition-all hover:drop-shadow-expoLight clickable"
                    src="/favicon/expoCorniciWhite.svg"
                    alt="Expo Cornici Favicon"
                />
            </a>
        {:else}
            <a href="/">
                <img
                    class="w-16 min-w-16 transition-all hover:drop-shadow-expoLight clickable"
                    src="/favicon/expoArredoWhite.svg"
                    alt="Expo Arredo Favicon"
                />
            </a>
        {/if}
    </div>
    <div>
        <ul
            class="flex flex-col sm:flex-row justify-center items-center gap-10"
        >
            <li>
                <ul
                    class="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-5 flex-wrap"
                >
                    {#each _headerList as e}
                        <li
                            class="cursor-pointer transition-all hover:text-expo hover:border-b-white border-b-2 border-b-transparent uppercase clickable"
                        >
                            <a href={e[0]}>{e[1]}</a>
                        </li>
                    {/each}
                </ul>
            </li>

            <li>
                {#if _arredo}
                    <ButtonHeader placeholder={$t("header.buttonArredo")} />
                {:else if _cornici}
                    <ButtonHeader placeholder={$t("header.buttonCornici")} />
                {:else}
                    <ButtonHeader placeholder={$t("header.buttonArredo")} />
                {/if}
            </li>

            <ul
                class="dropdown transition-all relative flex flex-col items-center justify-center hover:bg-expo cursor-pointer p-3"
            >
                <li>{locales[0]}</li>
                <ul
                    class="dropdown-menu opacity-0 bottom-96 transition-all absolute bg-expo px-4 py-2 flex sm:flex-col justify-center items-center gap-2 pointer-events-none"
                    bind:this={languagesDropDownMenu}
                >
                    {#each locales as l, i}
                        {#if i > 0}
                            <button on:click={changeLanguage}>
                                <li class="hover:underline clickable">{l}</li>
                            </button>
                        {/if}
                    {/each}
                </ul>
            </ul>
        </ul>
    </div>
</header>

<div
    class="absolute w-full h-full flex items-start justify-start p-8 z-50 pointer-events-none"
>
    <div
        class="
        fixed flex flex-col justify-center items-center gap-2

        clickable sm:opacity-0 opacity-100 transition-all
        pointer-events-auto sm:pointer-events-none"
        on:click={leftMenu}
        on:keydown={leftMenu}
        bind:this={hamburgerMenu}
        role="button"
        tabindex="0"
    >
        <img
            class="w-10"
            src="/favicon/horizontalBar.svg"
            alt="Horizontal Bar"
        />
        <img
            class="w-10"
            src="/favicon/horizontalBar.svg"
            alt="Horizontal Bar"
        />
        <img
            class="w-10"
            src="/favicon/horizontalBar.svg"
            alt="Horizontal Bar"
        />
    </div>
</div>

<style>
    .dropdown:hover > .dropdown-menu {
        opacity: 1;
        transform: translateY(calc(99% + 24rem));
        pointer-events: all;
    }
</style>
