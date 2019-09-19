<template>
  <div class="page home">
    <GlobalNav />
    <section class="section-container">
      <h2>회원관리</h2>
      <div class="main-box">
        <div class="custom-label pb-3">회원정보 리스트</div>
        <div>
          <select class="custom-input mr-3">
            <option>list1</option>
            <option>list2</option>
            <option>list3</option>
          </select>
          <select class="custom-input mr-3">
            <option>list2</option>
            <option>list3</option>
            <option>list4</option>
          </select>
        </div>
        <textarea class="user-custom-textarea mt-3"></textarea>
        <div class="custom-label pb-3 mt-3">회원정보 리스트</div>
        <div class="d-flex justify-content-between">
          <div class="mr-3 user-custom-textarea"></div>
          <div class="user-custom-textarea"></div>
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
    return {};
  }
};
</script>
