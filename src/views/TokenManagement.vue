<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>토큰 관리</h2>
      <form>
        <div class="main-box">
          <div class="input-wrap">
            <span class="custom-label">총발행 토큰</span>
            <div class="num-value">100,000,000</div>
          </div>
          <div class="input-wrap">
            <span class="custom-label">자체보유 토큰</span>
            <div class="num-value">29,000,000</div>
          </div>
          <div class="bin"></div>
          <div class="input-wrap">
            <span class="custom-label">토큰 송금</span>
            <input type="text" v-model="name" class="custom-input" />
          </div>
          <div class="input-wrap">
            <span class="custom-label">보낼 사람</span>
            <input type="text" v-model="name" class="custom-input" />
          </div>
          <div class="bin"></div>
          <div class="input-wrap">
            <span class="custom-label">토큰 발행</span>
            <input type="text" v-model="name" class="custom-input" />
          </div>
        </div>
        <ButtonCustom title="승인하기" />
      </form>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalNav from "../components/GlobalNav";
import ButtonCustom from "../components/ButtonCustom";
export default {
  name: "home",
  components: {
    GlobalNav,
    ButtonCustom
  },
  data() {
    return {};
  }
};
</script>
