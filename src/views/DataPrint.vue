<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>증명서 및 자료 출력</h2>
        <div class="main-box">
          <div class="d-flex justify-content-center align-items-center">
            <img src="../assets/Images/pdf-example.svg">
          </div>
        </div>
        <ButtonCustom title="출력하기" />
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
