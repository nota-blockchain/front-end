<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>개인이력관리</h2>
      <div class="main-box">
        <div class="two-line-form">
          <div class="input-wrap2">
            <span class="custom-label">성명</span>
            <input type="text" v-model="name" class="custom-input" />
          </div>
          <div class="input-wrap2">
            <span class="custom-label">생년월일</span>
            <input type="text" v-model="birth" class="custom-input" />
          </div>
        </div>
        <div class="two-line-form">
          <div class="input-wrap2">
            <span class="custom-label">핸드폰번호</span>
            <input type="text" v-model="phoneNumber" class="custom-input" />
          </div>
          <div class="input-wrap2">
            <span class="custom-label">이메일</span>
            <input type="text" v-model="eMail" class="custom-input" />
          </div>
        </div>
        <div class="two-line-form">
          <div class="input-wrap2">
            <span class="custom-label">해시값</span>
            <input type="text" v-model="hashValue" class="custom-input" />
          </div>
          <div class="input-wrap2 hidden">
            <span class="custom-label">빈박스</span>
            <input type="text" class="custom-input" />
          </div>
        </div>
        <div class="two-line-form">
          <div class="input-wrap2">
            <span class="custom-label">이력서 양식</span>
            <textarea v-model="eduInstituteName" class="custom-textarea" />
          </div>
        </div>
      </div>
      <ButtonCustom title="승인하기" />
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
      name: "",
      birth: "",
      phoneNumber: "",
      eMail: "",
      hashValue: ""
    };
  }
};
</script>
