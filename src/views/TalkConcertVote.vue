<template>
  <div class="page talkConcert">
    <GlobalNavUser />
    <section class="section-container">
      <h2>토크 콘서트 투표</h2>
      <div class="main-box">
        <div class="custom-label pb-3">강연자 투표 (중복투표 가능)</div>
        <div class="mb-5 mt-5">
          <b-form-group>
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              name="flavour-1"
              class="d-flex justify-content-around"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="vote-info-wrap" v-if="!isVoteCompleted">
          <div class="vote-info-box" v-for="(item,i) in voteInfoArray" key="i">
            <hr />
            <p>소속 : {{item.affiliation}}</p>
            <p>학력 : {{item.academicBackground}}</p>
            <p>제목 : {{item.title}}</p>
            <hr />
            <p class="just">{{item.article}}</p>
            <hr />
          </div>
        </div>
        <div class="d-flex justify-content-center" v-if="isVoteCompleted">
          <div>
            <div class="bin"></div>
            <BarChart />
          </div>
        </div>
      </div>
      <ButtonCustom v-if="!isVoteCompleted" title="투표하기" />
      <ButtonCustom v-if="isVoteCompleted" title="이더스캔에서 보기" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalNavUser from "../components/GlobalNavUser";
import ButtonCustom from "../components/ButtonCustom";
import BarChart from "../components/BarChart";
export default {
  name: "home",
  components: {
    GlobalNavUser,
    ButtonCustom,
    BarChart
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      isVoteCompleted: true, // 투표 완료 상태
      //dummy data
      voteInfoArray: [
        {
          affiliation: "삼성전자 연구원",
          academicBackground: "하버드 컴공과",
          title: "블록체인 핵심이론",
          article:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          affiliation: "삼성전자 연구원",
          academicBackground: "하버드 컴공과",
          title: "블록체인 핵심이론",
          article:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          affiliation: "삼성전자 연구원",
          academicBackground: "하버드 컴공과",
          title: "블록체인 핵심이론",
          article:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          affiliation: "삼성전자 연구원",
          academicBackground: "하버드 컴공과",
          title: "블록체인 핵심이론",
          article:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          affiliation: "삼성전자 연구원",
          academicBackground: "하버드 컴공과",
          title: "블록체인 핵심이론",
          article:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ],
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

