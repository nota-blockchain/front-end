<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>토큰 관리</h2>
      <div class="main-box">
        3이더를 보내보자!
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
