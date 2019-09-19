<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>교육과정 신청</h2>
      <form>
        <div class="main-box">
          <div class="input-wrap">
            <span class="custom-label">교육기관명</span>
            <input type="text" v-model="eduInstituteName" class="custom-input" />
          </div>
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
