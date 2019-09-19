<template>
  <div class="page talkConcert">
    <GlobalNav />
    <section class="section-container">
      <h2>토크 콘서트 관리</h2>
      <div class="main-box">
        <div class="custom-label pb-3 ">강연자 투표</div>
        <div class="mb-5">
          <b-form-group>
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="d-flex justify-content-center mt-5 mb-5">
          <div class="user-circle m-5">
            <div class="inner-circle">
              <div>
                <div class="text-center font18">신청자 수</div>
                <div class="num-value">124 명</div>
              </div>
            </div>
          </div>
          <div class="user-circle m-5">
            <div class="inner-circle">
              <div>
                <div class="text-center font18">토큰 수</div>
                <div class="num-value">192,054</div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-label pb-3 mt-3 text-center">강연자 투표 결과는 9.18일 이후 공개됩니다.</div>
      </div>
      <ButtonCustom title="투표하기" />
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
      selected: [], // Must be an array reference!
      options: [
        { text: "박정원", value: "박정원" },
        { text: "이정민", value: "이정민" },
        { text: "김수로", value: "김수로" },
        { text: "전지현", value: "전지현" },
        { text: "정우성", value: "정우성" }
      ]
    };
  }
};
</script>
