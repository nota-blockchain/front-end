<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>토크 콘서트 관리</h2>
      <div class="main-box">
        토크 콘서트가 뭐지?
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
