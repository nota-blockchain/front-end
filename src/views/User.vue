<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>이력 편집</h2>
      <form>
        <div class="main-box">
          <div class="two-line-form">
            <div class="input-wrap2">
              <span class="custom-label">경력</span>
              <input type="text" v-model="experience" class="custom-input" />
            </div>
            <div class="input-wrap2">
              <span class="custom-label">학력</span>
              <input type="text" v-model="school" class="custom-input" />
            </div>
          </div>
          <div class="two-line-form">
            <div class="input-wrap2">
              <span class="custom-label">경력2</span>
              <input type="text" v-model="experience2" class="custom-input" />
            </div>
            <div class="input-wrap2">
              <span class="custom-label">학력2</span>
              <input type="text" v-model="school2" class="custom-input" />
            </div>
          </div>
          <div class="two-line-form">
            <div class="input-wrap2">
              <span class="custom-label">경력3</span>
              <input type="text" v-model="experience3" class="custom-input" />
            </div>
            <div class="input-wrap2">
              <span class="custom-label">학력3</span>
              <input type="text" v-model="school3" class="custom-input" />
            </div>
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
    return {
      experience: "삼성전자 1년 근무",
      experience2: "LG전자 2년 근무",
      experience3: "기상청 1년 6개월 근무",
      school: "고려대학교 학사",
      school2: "고려대학교 박사",
      school3: ""
    };
  }
};
</script>
