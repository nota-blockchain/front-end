<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>교육기관검증</h2>
      <form>
        <div class="main-box d-flex">
          <div class="home-left">
            <div class="input-wrap">
              <span class="custom-label">교육기관명</span>
              <input type="text" v-model="eduInstituteName" class="custom-input" />
            </div>
            <div class="input-wrap">
              <span class="custom-label">아이디</span>
              <input type="text" v-model="eduMemo" class="custom-input" />
            </div>
            <div class="input-wrap">
              <span class="custom-label">대표자</span>
              <input type="text" v-model="president" class="custom-input" />
            </div>
            <div class="input-wrap">
              <span class="custom-label">주소지</span>
              <input type="text" v-model="eduInstituteAddress" class="custom-input" />
            </div>
            <div class="input-wrap">
              <span class="custom-label">개업연월일</span>
              <input type="text" v-model="publishInstituteDate" class="custom-input" />
            </div>
            <div class="input-wrap">
              <span class="custom-label">연락처</span>
              <input type="text" v-model="eduInstitutePhone" class="custom-input" />
            </div>
            <div class="input-wrap">
              <span class="custom-label">사본 첨부</span>
              <input type="text" v-model="injectCopy" class="custom-input" />
            </div>
          </div>
          <div class="home-right d-flex justify-content-center align-items-center">img</div>
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
    return {
      eduInstituteName: "",
      president: "",
      eduInstituteAddress: "",
      injectCopy: "",
      publishInstituteDate: "",
      eduInstitutePhone: "",
      eduMemo: ""
    };
  }
};
</script>
