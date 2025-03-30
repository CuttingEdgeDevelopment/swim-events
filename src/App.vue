<template>
  <Header />
  <main class="px-16 py-8">
    <div>Hello {{ name }}!</div>
  </main>
  <Footer />
</template>

<script>
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";

  export default {
    components: {
      Header, Footer,
    },
    data() {
      return {
        name: "Vue",
      };
    },
  };
</script>
