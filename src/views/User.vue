<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>이력 편집</h2>
      <form>
        <div class="main-box">
          <div>
            <span class="custom-label">경력</span>
            <textarea class="user-custom-textarea mt-3"></textarea>
          </div>
					<div>
            <span class="custom-label">학력</span>
            <textarea class="user-custom-textarea mt-3"></textarea>
          </div>
					<div>
            <span class="custom-label">교육</span>
            <textarea class="user-custom-textarea mt-3"></textarea>
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
