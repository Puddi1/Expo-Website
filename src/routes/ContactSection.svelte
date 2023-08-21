<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n";
    import { popUp } from "$lib/index";

    // Manage form request
    var messageForm: HTMLElement;
    async function handleMessageRequest(e: any) {
        let popUpContainer = document.getElementById("popUpContainer");
        if (popUpContainer != null) {
            popUpContainer.classList.remove("animate-enter-alert");
        }

        e.preventDefault();

        const myForm = e.target as HTMLFormElement;
        const formData = new FormData(myForm);

        var reqBody: { [key: string]: string } = {};
        for (var [key, value] of formData.entries()) {
            reqBody[key] = value as string;
        }

        let parsedBody = JSON.stringify(reqBody);

        await fetch("/api/preventivo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: parsedBody,
        })
            .then((res: any) => {
                // Not triggered

                // success popUp
                if (res.status != 200) {
                    let popUpSta = $t("popUp.errorStatus");
                    let popUpMsg = $t("popUp.errorMessage");

                    let sta = popUpSta + res.status;
                    let msg = popUpMsg + res.statusText;

                    popUp.set([sta, msg, false]);
                    return;
                }

                let popUpSta = $t("popUp.successStatus");
                let popUpMsg = $t("popUp.successMessage");

                let sta = popUpSta + res.status;
                let msg = popUpMsg + res.statusText;

                popUp.set([sta, msg, true]);
            })
            .catch((err) => {
                // error request
                popUp.set([$t("popUp.errorRequest"), err, false]);
            });
    }

    var contactSection: HTMLElement;
    var rightBlob: HTMLElement;
    var leftBlob: HTMLElement;
    var mounted = false;
    onMount(() => {
        mounted = true;

        messageForm.addEventListener("submit", handleMessageRequest);

        let rect = contactSection.getBoundingClientRect();
        let y = rect.y + 200;
        let height = rect.height + 200;
        if (y < height) {
            //just in the element
            let perc = (y / height) * 100;

            // y starts at -50% an goes to 0
            let leftBlobPercY = -50 - (50 - perc * 2.5);
            leftBlob.style.transform =
                "translate(-50%, " + leftBlobPercY + "%)";
            // y starts at -50% an goes to -100%
            let rightBlobPercY = -50 - perc * 1.2;
            rightBlob.style.transform =
                "translate(-50%, " + rightBlobPercY + "%)";
        }

        window.addEventListener("scroll", (e) => {
            let rect = contactSection.getBoundingClientRect();
            let y = rect.y + 200;
            let height = rect.height + 200;
            if (y < height) {
                //just in the element
                let perc = (y / height) * 100;

                // y starts at -50% an goes to 0
                let leftBlobPercY = -50 - (50 - perc * 2.5);
                leftBlob.style.transform =
                    "translate(-50%, " + leftBlobPercY + "%)";
                // y starts at -50% an goes to -100%
                let rightBlobPercY = -50 - perc * 1.2;
                rightBlob.style.transform =
                    "translate(-50%, " + rightBlobPercY + "%)";
            }
        });
    });
</script>

<section
    bind:this={contactSection}
    class="text-white h-auto sm:h-screen w-screen border-b-2 border-t-2 border-white bg-slate-700 relative overflow-hidden z-0"
>
    <div
        bind:this={rightBlob}
        class="absolute top-1/4 left-3/4 w-96 h-96 -translate-x-2/4 -translate-y-rightBlobInitialY bg-expo z-10 transition-all"
    />
    <div
        class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-96 h-96 bg-expo z-10"
    />
    <div
        bind:this={leftBlob}
        class="absolute top-3/4 left-1/4 w-96 h-96 -translate-x-2/4 translate-y-leftBlobInitialY bg-expo z-10 transition-all"
    />

    <div
        class="relative h-full w-full flex flex-col sm:flex-row items-center justify-around p-8 z-50 backdrop-blur-3xl gap-5"
    >
        <div
            class="flex sm:flex-row flex-col items-center justify-center gap-10"
        >
            <div
                class="w-10/12 h-full
                border-l-2 border-b-2 border-white border-opacity-50
                bg-gradient-to-bl from-expo-30 to-black-60 to-60% drop-shadow-2xl backdrop-blur-sm rounded-xl
                sm:translate-x-7
                sm:translate-y-1/20
                py-4 px-5"
            >
                <ul
                    class="flex flex-col flex-wrap items-start justify-center gap-5 w-full"
                >
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3 w-full"
                    >
                        <img
                            class="w-48 border-2 border-white"
                            src="/background/cucinaHome.png"
                            alt="Expo Arredo Outside View"
                        />
                        <p
                            class="flex items-center justify-center flex-wrap w-auto whitespace-pre-line text-sm max-w-md"
                        >
                            {$t("contact.stabile")}
                        </p>
                    </li>
                    <li class="flex items-center justify-center w-full">
                        <img src="/favicon/horizontalBar.svg" alt="" />
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img
                            class="w-6"
                            src="/favicon/envelope.svg"
                            alt="Envelope icon"
                        />
                        <a
                            class="clickable hover:border-b-white hover:border-b-2 border-b-2 border-transparent transition-all"
                            href="mailto:email@example.com"
                            >info@expoarredo.ch</a
                        >
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img
                            class="w-6"
                            src="/favicon/phone.svg"
                            alt="Phone icon"
                        />
                        <a
                            class="clickable hover:border-b-white hover:border-b-2 border-b-2 border-transparent transition-all"
                            href="tel:+41916461047">+41 91 646 10 47</a
                        >
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img
                            class="w-6"
                            src="/favicon/mapMaker.svg"
                            alt="Map Maker icon"
                        />
                        <p class="">
                            {$t("footer.via")} Vignalunga, 2c<br />6850
                            Mendrisio - Svizzera
                        </p>
                    </li>
                    <li
                        class="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <img
                            class="w-6"
                            src="/favicon/clock.svg"
                            alt="Map Maker icon"
                        />
                        <p class="">
                            {$t("footer.lunVen")} <br /> 9.00 - 12.00 / 14.00 -
                            18.00 <br />
                            {$t("footer.sabato")} <br />
                            {$t("footer.soloAppuntamento")}
                        </p>
                    </li>
                </ul>
            </div>

            <div
                class="w-10/12 h-full
                border-t-2 border-r-2 border-white border-opacity-50
                bg-gradient-to-bl from-expo-30 to-black-60 to-60% drop-shadow-2xl backdrop-blur-sm rounded-xl
                sm:-translate-x-7
                sm:-translate-y-1/4
                py-4 px-5"
            >
                <form
                    bind:this={messageForm}
                    class="flex flex-col justify-center items-center gap-5"
                >
                    <div>
                        <h1 class=" text-xl font-extrabold">
                            {$t("contact.formMessage")}
                        </h1>
                    </div>
                    <fieldset
                        class="h-full w-full flex flex-col items-center justify-center gap-5"
                    >
                        <div
                            class="h-full w-full flex flex-col justify-center items-start"
                        >
                            <div
                                class="flex flex-col items-start justify-center gap-1 w-full"
                            >
                                <p>
                                    {$t("contact.formTitle")}
                                </p>
                                <input
                                    class="
                                bg-transparent border-2 border-white rounded-sm
                                w-full
                                focus:outline-none focus:outline-expo
                                px-1 py-1
                                transition-all"
                                    type="text"
                                    name="title"
                                    id="Title"
                                />
                            </div>
                        </div>
                        <div
                            class=" h-full w-full flex flex-col justify-center items-start"
                        >
                            <div
                                class="flex flex-col items-start justify-center gap-1 w-full"
                            >
                                <p>Email</p>
                                <input
                                    class="input w-full"
                                    type="email"
                                    name="email"
                                    id="Email"
                                />
                            </div>
                        </div>
                        <div
                            class=" h-full w-full flex flex-col justify-center items-start"
                        >
                            <div
                                class="flex flex-col items-start justify-center gap-1 w-full"
                            >
                                <p>{$t("contact.formComment")}</p>
                                <textarea
                                    class="input h-32 flex flex-col items-start justify-start leading-4 w-full"
                                    name="comment"
                                    id="Comment"
                                />
                            </div>
                        </div>
                    </fieldset>

                    <div>
                        <button
                            type="submit"
                            class="bg-expo px-2 py-3 flex flex-row justify-center items-center gap-2 shadow-2xl hover:ring-2 ring-white transition-all h-12 w-32"
                        >
                            <div
                                class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold text-xs"
                            >
                                {$t("contact.buttonPlaceholder")}
                            </div>

                            <div
                                class="flex justify-center items-center h-full px-1"
                            >
                                <img
                                    src="/button/Vector.svg"
                                    alt="Button Arrow"
                                />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div
            class="flex items-center justify-center w-full sm:w-96 h-96 sm:h-3/5 shadow-2xl"
        >
            <iframe
                class="w-full h-full border-4 border-white
                sm:-translate-x-7
                sm:-translate-y-1/20
                "
                title="Google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32653.45716357588!2d8.968982962913973!3d45.88083548029522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478429b58b9d3f5f%3A0x6e9a9bc1b2004cfb!2sExpo%20Arredo%20SA!5e0!3m2!1sit!2sch!4v1692431177848!5m2!1sit!2sch"
                allowfullscreen={true}
                loading="eager"
                referrerpolicy="no-referrer-when-downgrade"
            />
        </div>
    </div>
</section>
