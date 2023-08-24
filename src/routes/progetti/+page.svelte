<script lang="ts">
    import { t } from "$lib/i18n"; // add
    import { headerList } from "$lib/index";
    import ProjectCardGrid from "$lib/ProjectCardGrid.svelte";
    $: headerList.set([
        ["/cornici", $t("header.cornici")],
        ["/servizio", $t("header.servizio")],
        ["/progetti", $t("header.progetti")],
        ["/#noi", $t("header.noi")],
        ["/#brands", $t("header.brands")],
        ["/preventivo", $t("header.contatta")],
    ]);

    var Projects = [
        [
            "/progetti/0",
            "Casa al lago",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Casa al mare",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Sinistro al ponte",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Divano a casa",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Fiume",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Tea a Sonogno",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Mare a Sonogno",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
        [
            "/progetti/0",
            "Giorno a Sonogno",
            "",
            [
                ["Tempo", "123 giorni"],
                ["Costo", "500'000.-"],
            ],
        ],
    ];

    function BubbleSort(
        fn: (a: any, b: any) => boolean,
        a: Array<any>,
        idx: number,
        sIdx: number
    ) {
        let s = a;

        if (sIdx > 0) {
            for (let j = 1; j < a.length; ++j) {
                for (let i = 0; i < a.length - 1; ++i) {
                    if (fn(s[i][idx][sIdx], s[i + 1][idx][sIdx])) {
                        let o = s[i][idx];
                        s[i][idx][sIdx] = s[i + 1][idx][sIdx];
                        s[i][idx][sIdx] = o;
                        break;
                    }
                }
            }

            return s;
        }

        for (let j = 1; j < a.length; ++j) {
            for (let i = 0; i < a.length - 1; ++i) {
                if (fn(s[i][idx], s[i + 1][idx])) {
                    let o = s[i][idx];
                    s[i][idx] = s[i + 1][idx];
                    s[i + 1][idx] = o;
                }
            }
        }

        return s;
    }

    function LesserThan(a: any, b: any) {
        return a < b;
    }
    function BetterThan(a: any, b: any) {
        return a > b;
    }

    var selectValue: string;
    function changeElementsOrder() {
        switch (selectValue) {
            case "Sort-Projects":
                break;
            case "A-Z":
                Projects = BubbleSort(BetterThan, Projects, 1, -1);
                break;
            case "Z-A":
                Projects = BubbleSort(LesserThan, Projects, 1, -1);
                break;
            default:
                console.error("No projects fetching rule");
        }
    }

    // function that changes the starting array -> $ updates
</script>

<!-- Sorting of projects, little viewcard of projects that redirects to a standard project page [progetto] -->
<main
    class="flex items-center justify-center min-h-threeQuarterScreen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% pt-40 py-24 px-5 sm:px-10"
>
    <div class="w-full flex items-center justify-center flex-col gap-7">
        <h1 class="text-5xl font-extrabold">
            Expo Arredo: <span class="text-expo">X</span> Progetti
        </h1>
        <p class="flex items-center justify-center flex-col gap-5 w-11/12">
            <span class="text-lg font-semibold">
                Abbiamo lavorato su moltissimi progetti,
                <span class="underline transition-all hover:text-expo"
                    >il nostro livello di esperienza non ha rivali</span
                >.
            </span>
            <span
                class="flex items-center justify-center flex-col gap-1 text-justify w-11/12"
            >
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis sequi alias nihil, mollitia minus excepturi nostrum
                    ullam rem modi enim. Ullam voluptates quibusdam hic aliquam
                    corrupti deleniti dolorem pariatur maxime.
                </span>

                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Obcaecati optio unde incidunt impedit, dolore perferendis
                    natus ipsam cumque dicta veniam reprehenderit quia facere
                    voluptates debitis hic. Quae odit odio quas.
                </span>
            </span>
        </p>
    </div>
</main>

<section class="min-h-screen w-screen bg-expo">
    <div
        class="flex items-center justify-center flex-col gap-10 px-16 py-3 pb-16"
    >
        <div
            class="flex items-center justify-start flex-col sm:flex-row gap-10 w-full"
        >
            <h1 class="text-5xl font-extrabold">Progetti</h1>
            <select
                bind:value={selectValue}
                on:change={changeElementsOrder}
                class="h-full border-2 border-white bg-transparent focus:outline-none focus:bg-white focus:border-expo focus:text-expo transition-all py-1 px-2"
            >
                <option value="Sort-Projects">Sort Projects</option>
                <option value="A-Z">A to Z</option>
                <option value="Z-A">Z to A</option>
            </select>
        </div>
        <div
            class="flex items-center justify-center flex-col sm:grid sm:grid-cols-3 gap-10"
        >
            {#each Projects as p}
                <ProjectCardGrid href={p[0]} Title={p[1]} Statistics={p[3]} />
            {/each}
        </div>
    </div>
</section>
