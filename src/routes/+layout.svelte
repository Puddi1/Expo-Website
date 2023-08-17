<script lang="ts">
    import "../app.postcss";

    import Header from "./Header.svelte";
    import ContactSection from "./ContactSection.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />

<slot />

<!-- <ContactSection /> -->
<Footer />
