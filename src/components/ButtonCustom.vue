<template>
  <section class="custom-btn-wrap">
    <!-- <a href="" target="_blank"> -->
      <button pill class="custom-btn btn-text">{{title}}</button>
    <!-- </a> -->
  </section>
</template>
<script>
export default {
  props: ["title", "url"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
</style>