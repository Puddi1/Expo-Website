<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n"; // necessary?
    import { popUp } from "$lib/index";
    import type { ActionData, PageData } from "./$types";

    var hasForgotPassword = false;
    function changeForgotStatus() {
        hasForgotPassword = !hasForgotPassword;
    }

    // PopUp trigger
    export var data: PageData;
    export var form: ActionData;

    $: console.log(data);
    $: handleFormChange(form);

    function handleFormChange(f: ActionData) {
        if ((mounted = false)) {
            return;
        }
        console.log(f);

        if (f == null) {
            return;
        }

        if (f.success) {
            popUp.set([f.type, f.message, true]);
            return;
        }

        popUp.set([f.type, f.message, false]);
    }

    var mounted = false;
    onMount(() => {
        mounted = true;
    });
</script>

<main
    class="bg-expo w-screen h-screen flex items-center justify-center flex-col z-40 relative overflow-hidden"
>
    <div
        class="flex items-center justify-center w-5/6 sm:w-3/5 h-5/6 flex-col gap-20"
    >
        <div
            class="flex items-center justify-center flex-col sm:flex-row gap-6 w-10/12"
        >
            <img class="min-w-32" src="/favicon/expoArredoWhite.svg" alt="" />
            <h3
                class="text-4xl sm:text-5xl font-extrabold text-center sm:text-start"
            >
                Admin Dashboard
            </h3>
        </div>

        {#if hasForgotPassword}
            <form
                name="reset"
                action="?/reset"
                method="post"
                class="flex items-center justify-center flex-col gap-20 w-full sm:min-w-128 sm:w-6/12"
            >
                <div
                    class="flex items-center justify-center flex-col w-full min-h-43"
                >
                    <div
                        class="w-full gap-2 flex items-center justify-center flex-col"
                    >
                        <div class="flex items-center justify-start w-10/12">
                            <p class="text-xl font-semibold">
                                Reset password email
                            </p>
                        </div>
                        <input
                            class="input h-9 flex flex-col items-center justify-start leading-4 w-10/12"
                            name="email"
                            type="text"
                            id="email-form-input-reset"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-center gap-5 flex-col">
                    <button
                        type="submit"
                        class="bg-white px-1 py-3 h-20 w-52 sm:w-80 flex flex-row justify-center items-center gap-2 shadow-2xl hover:shadow-white ring-white transition-all clickable"
                    >
                        <div
                            class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold text-expo"
                        >
                            reset
                        </div>
                    </button>

                    <div class="flex items-center justify-center">
                        <button
                            class="text-center cursor-pointer clickable border-b-2 border-transparent hover:border-white hover:border-b-2 transition-all"
                            on:click={changeForgotStatus}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        {:else}
            <form
                name="login"
                action="?/login"
                method="post"
                class="flex items-center justify-center flex-col gap-20 w-full sm:min-w-128 sm:w-6/12"
            >
                <div
                    class="flex items-center justify-center flex-col gap-7 w-full"
                >
                    <div
                        class="w-full gap-2 flex items-center justify-center flex-col"
                    >
                        <div class="flex items-center justify-start w-10/12">
                            <p class="text-xl font-semibold">Email</p>
                        </div>
                        <input
                            class="input h-9 flex flex-col items-center justify-start leading-4 w-10/12"
                            name="email"
                            type="text"
                            id="email-form-input-login"
                        />
                    </div>

                    <div
                        class="w-full gap-2 flex items-center justify-center flex-col"
                    >
                        <div class="flex items-center justify-start w-10/12">
                            <p class="text-xl font-semibold">Password</p>
                        </div>
                        <input
                            class="input h-9 flex flex-col items-center justify-start leading-4 w-10/12"
                            name="password"
                            type="password"
                            id="password-form-input-login"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-center gap-5 flex-col">
                    <button
                        class="bg-white px-1 py-3 h-20 w-52 sm:w-80 flex flex-row justify-center items-center gap-2 shadow-2xl hover:shadow-white ring-white transition-all clickable"
                    >
                        <div
                            class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold text-expo"
                        >
                            Login
                        </div>
                    </button>

                    <div class="flex items-center justify-center">
                        <button
                            class="text-center cursor-pointer clickable border-b-2 border-transparent hover:border-white hover:border-b-2 transition-all"
                            on:click={changeForgotStatus}
                        >
                            Forgot your password?
                        </button>
                    </div>
                </div>
            </form>
        {/if}
    </div>
</main>
