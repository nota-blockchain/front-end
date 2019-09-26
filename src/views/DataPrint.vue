<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container" v-if="generateKey">
      <div class="main-box">
        <!-- 학력 -->
      </div>
      <!-- <ButtonCustom v-b-modal.modal-lg title="생성하기" /> -->
    </section>
    <section class="section-container">
      <h2>증명서 및 자료 출력</h2>
      <div class="main-box">
        <div class="data-print-box">
          <img src="../assets/Images/pdf-example.svg" />
          <!-- <b-embed class="d-flex data-print-box" type="iframe" aspect="16by9" :src="url"></b-embed> -->
          <!-- <img src="../assets/Images/pdf-example.svg"> -->
          <b-embed
            class="d-flex data-print-box"
            aspect="16by9"
            :src="'http://docker.cloudus.io:3000/pdf/' + this.generateKey"
          ></b-embed>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <a href="https://etherscan.io/address/0xf9c3A6d486f88630B97cc532A234eddbe475c36d" target="_blank">
      <ButtonCustom title="이더스캔 확인" class="mr-5"/>
      </a>
      <ButtonCustom title="다운로드" @click.native="download" class="power-fix"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalNavUser from "../components/GlobalNavUser";
import ButtonCustom from "../components/ButtonCustom";
import Axios from "axios";
export default {
  name: "home",
  components: {
    GlobalNavUser,
    ButtonCustom
  },
  methods: {
    async generateReq() {
      const { data } = await Axios.post(
        "http://docker.cloudus.io:3000/generate",
        this.form
      );
      if (data.opcode === "success") {
        this.generateKey = data.generateKey;
      } else {
        alert("오류가 발생하여 처리할 수 없습니다.");
      }
    },
    mounted() {
      this.generateReq();
    },
    async download() {
      window.location.href =
        "http://docker.cloudus.io:3000/pdf/" + this.generateKey + "?download";
    }
  },
  data() {
    return {
      form: {
        userName: "",
        userNameEn: "",

        school1: "한강초등학교",
        school2: "",
        school3: "",
        school4: "",
        school1Date: "",
        school2Date: "",
        school3Date: "",
        school4Date: "",
        school4Depart: "",

        work1Name: "A전자",
        work2Name: "",
        work3Name: "",
        work1JoinDate: "1993-03-19",
        work2JoinDate: "",
        work3JoinDate: "",
        work1ResignDate: "2019-09-23",
        work2ResignDate: "",
        work3ResignDate: "",
        work2Date: "",
        work3Date: "",
        work1Position: "세무사",
        work2Position: "",
        work3Position: "",
        work1MajorWork: "회계관리",
        work2MajorWork: "",
        work3MajorWork: ""
      },
      generateKey: ""
    };
  }
  // methods: {
  //   forceFileDownload(response) {
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "file.png"); //or any other extension
  //     document.body.appendChild(link);
  //     link.click();
  //   },

  //   downloadWithVueResource() {
  //     this.$http({
  //       method: "get",
  //       url: this.url,
  //       responseType: "arraybuffer"
  //     })
  //       .then(response => {
  //         this.forceFileDownload(response);
  //       })
  //       .catch(() => console.log("error occured"));
  //   },

  //   downloadWithAxios() {
  //     axios({
  //       method: "get",
  //       url: this.url,
  //       responseType: "arraybuffer"
  //     })
  //       .then(response => {
  //         this.forceFileDownload(response);
  //       })
  //       .catch(() => console.log("error occured"));
  //   }
  // }
};
</script>
