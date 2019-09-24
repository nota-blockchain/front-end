<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>증명서 및 자료 출력</h2>
      <div class="main-box">
        <div class="data-print-box">
          <!-- <img src="../assets/Images/pdf-example.svg"> -->
          <b-embed class="d-flex data-print-box" aspect="16by9" :src="url"></b-embed>
        </div>
      </div>
      <ButtonCustom title="다운로드" @click.native="download" />
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
    async download() {
      window.location.href = this.url + '?download'
    }
  },
  data() {
    return {
      url:
        "http://docker.cloudus.io:3000/pdf"
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
