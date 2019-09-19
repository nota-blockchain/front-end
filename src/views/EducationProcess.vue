<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>교육과정 신청</h2>
      <form>
        <div class="main-box">
          <div class="">준비중입니다</div>
        </div>
        <ButtonCustom title="승인하기" />
      </form>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalNavUser from "../components/GlobalNavUser";
import ButtonCustom from "../components/ButtonCustom";
export default {
  name: "home",
  components: {
    GlobalNavUser,
    ButtonCustom
  },
  data() {
    return {};
  }
};
</script>
