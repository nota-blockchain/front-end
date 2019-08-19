<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>개인이력관리</h2>
      <div class="main-box">
        개인이력관리라구!
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalNav from '../components/GlobalNav';
export default {
  name: "home",
  components: {
    GlobalNav
  },
  data() {
    return {
    };
  }
};
</script>
