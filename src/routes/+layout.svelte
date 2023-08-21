<script lang="ts">
    import "../app.postcss";

    import Header from "./Header.svelte";
    import ContactSection from "./ContactSection.svelte";
    import Footer from "./Footer.svelte";
    import PopUp from "$lib/PopUp.svelte";
</script>

<Header />
<PopUp />

<slot />

<ContactSection />
<Footer />
