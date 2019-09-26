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
            <p class>{{item.article}}</p>
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
      <ButtonCustom v-if="!isVoteCompleted" v-on:click.native="writeVote" title="투표하기" />
      <a>
      <ButtonCustom v-if="isVoteCompleted" title="이더스캔에서 보기" url="https://etherscan.io/address/0x7d7E9f5Fdca3AB313D1a8b753f1686318eb25dE9"/>
      </a>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalNavUser from "../components/GlobalNavUser";
import ButtonCustom from "../components/ButtonCustom";
import BarChart from "../components/BarChart";
import Axios from "axios";

export default {
  name: "home",
  components: {
    GlobalNavUser,
    ButtonCustom,
    BarChart
  },
  methods: {
    // async writeVote() {
    //   for (let i in this.selected) {
    //     await Axios.post(
    //       "http://docker.cloudus.io:3000/vote?number=" + this.selected[i]
    //     );
    //   }
    //   this.isVoteCompleted = true;
    // }
    async writeVote() {
      try {
        for (let i in this.selected) {
          await Axios.post(
            "http://docker.cloudus.io:3000/vote?number=" + this.selected[i]
          );
          this.isVoteCompleted = true;
        }
      } catch (error) {
        console.log("POST error", error);
      }
    }
  },
  async created() {
    const { data } = await Axios.get("http://docker.cloudus.io:3000/vote");
    for (const i in data) {
      const { name } = data[i];
      this.voteInfoArray.push(data[i]);
      this.options.push({ text: name, value: i });
    }
  },

  mounted() {
    this.isVoteCompleted;
    console.log("POST 확인 ::", this.writeVote());

    console.log("컴플릿 상태", this.isVoteCompleted);
  },

  data() {
    return {
      selected: [], // Must be an array reference!
      isVoteCompleted: false, // 투표 완료 상태
      //dummy data
      voteInfoArray: [],
      options: []
    };
  }
};
</script>

