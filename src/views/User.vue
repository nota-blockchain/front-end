<template>
  <div class="page user">
    <GlobalNavUser />
    <section class="section-container">
      <h2>
        <span class="light-primary">{{form.userName}}</span> 님의 이력 편집입니다.
      </h2>
      <div class="main-box">
        <!-- 학력 -->
        <div class="justify-contents-center">
          <div class="d-flex align-items-center justify-content-center w-100 mb-3">
            <span class="user-label">초등학교</span>
            <input type="text" v-model="form.school1" class="custom-input mr-3" placeholder="학교이름" />
            <input
              type="text"
              v-model="form.school1Date"
              class="custom-input mr-3"
              placeholder="졸업년월"
            />
            <span class="user-label text-center text-gray">해당없음</span>
          </div>
          <div class="d-flex align-items-center justify-content-center w-100 mb-3">
            <span class="user-label">중학교</span>
            <input type="text" v-model="form.school2" class="custom-input mr-3" placeholder="학교이름" />
            <input
              type="text"
              v-model="form.school2Date"
              class="custom-input mr-3"
              placeholder="졸업년월"
            />
            <span class="user-label text-center text-gray">해당없음</span>
          </div>
          <div class="d-flex align-items-center justify-content-center w-100 mb-3">
            <span class="user-label">고등학교</span>
            <input type="text" v-model="form.school3" class="custom-input mr-3" placeholder="학교이름" />
            <input
              type="text"
              v-model="form.school3Date"
              class="custom-input mr-3"
              placeholder="졸업년월"
            />
            <span class="user-label text-center text-gray">해당없음</span>
          </div>
          <div class="d-flex align-items-center justify-content-center w-100 mb-3">
            <span class="user-label">대학교</span>
            <input type="text" v-model="form.school4" class="custom-input mr-3" placeholder="학교이름" />
            <input
              type="text"
              v-model="form.school4Date"
              class="custom-input mr-3"
              placeholder="졸업년월"
            />
            <input type="text" v-model="form.school4Depart" class="custom-input" placeholder="전공학과" />
          </div>
          <!-- 경력 -->
          <div class="d-flex align-items-center justify-content-center w-100 mt-5 mb-3">
            <input
              type="text"
              v-model="form.work1JoinDate"
              class="custom-half-input mr-3"
              placeholder="입사년월"
            />
            <input
              type="text"
              v-model="form.work1ResignDate"
              class="custom-half-input mr-3"
              placeholder="퇴사년월"
            />
            <input type="text" v-model="form.work1Name" class="custom-input mr-3" placeholder="회사명" />
            <input
              type="text"
              v-model="form.work1Position"
              class="custom-input mr-3"
              placeholder="부서 및 직위"
            />
            <input
              type="text"
              v-model="form.work1MajorWork"
              class="custom-input mr-3"
              placeholder="담당 업무"
            />
          </div>

          <div class="d-flex align-items-center justify-content-center w-100 mb-3">
            <input
              type="text"
              v-model="form.work2JoinDate"
              class="custom-half-input mr-3"
              placeholder="입사년월"
            />
            <input
              type="text"
              v-model="form.work2ResignDate"
              class="custom-half-input mr-3"
              placeholder="퇴사년월"
            />
            <input type="text" v-model="form.work2Name" class="custom-input mr-3" placeholder="회사명" />
            <input
              type="text"
              v-model="form.work2Position"
              class="custom-input mr-3"
              placeholder="부서 및 직위"
            />
            <input
              type="text"
              v-model="form.work2MajorWork"
              class="custom-input mr-3"
              placeholder="담당 업무"
            />
          </div>

          <div class="d-flex align-items-center justify-content-center w-100 mb-3">
            <input
              type="text"
              v-model="form.work3JoinDate"
              class="custom-half-input mr-3"
              placeholder="입사년월"
            />
            <input
              type="text"
              v-model="form.work3ResignDate"
              class="custom-half-input mr-3"
              placeholder="퇴사년월"
            />
            <input type="text" v-model="form.work3Name" class="custom-input mr-3" placeholder="회사명" />
            <input
              type="text"
              v-model="form.work3Position"
              class="custom-input mr-3"
              placeholder="부서 및 직위"
            />
            <input
              type="text"
              v-model="form.work3MajorWork"
              class="custom-input mr-3"
              placeholder="담당 업무"
            />
          </div>
        </div>
      </div>
      <ButtonCustom v-b-modal.modal-lg title="승인하기" />
      <b-modal id="modal-lg" size="lg" title="변경사항 확인하기" hide-footer hide-header>
        <div class="mt-5 mb-3 d-flex justify-content-center">
          <div class>
            <div class="d-flex">
              <div class="modal-label w-50">
                초등학교 :
                <span class="font-value">{{form.school1}}</span>
              </div>
              <div class="modal-label">
                졸업일 :
                <span class="font-value">{{form.school1Date}}</span>
              </div>
            </div>
            <hr />
            <div class="d-flex">
              <div class="modal-label w-50">
                중학교 :
                <span class="font-value">{{form.school2}}</span>
              </div>
              <div class="modal-label">
                졸업일 :
                <span class="font-value">{{form.school2Date}}</span>
              </div>
            </div>
            <hr />
            <div class="d-flex">
              <div class="modal-label w-50">
                고등학교 :
                <span class="font-value">{{form.school3}}</span>
              </div>
              <div class="modal-label">
                졸업일 :
                <span class="font-value">{{form.school3Date}}</span>
              </div>
            </div>
            <hr />
            <div class="d-flex">
              <div class="modal-label w-50">
                대학교 :
                <span class="font-value">{{form.school4}}</span>
              </div>
              <div class="modal-label">
                졸업일 :
                <span class="font-value">{{form.school4Date}}</span>
              </div>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50"></div>
              <div class="modal-label">
                전공학과 :
                <span class="font-value">{{form.school4Depart}}</span>
              </div>
            </div>
            <hr />
            <div class="modal-label">
              <b>{{form.work1Name}}</b>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50">
                입사일 :
                <span class="font-value">{{form.work1JoinDate}}</span>
              </div>
              <div class="modal-label">
                퇴사일 :
                <span class="font-value">{{form.work1ResignDate}}</span>
              </div>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50">
                부서 및 직위 :
                <span class="font-value">{{form.work1Position}}</span>
              </div>
              <div class="modal-label">
                담당 업무 :
                <span class="font-value">{{form.work1MajorWork}}</span>
              </div>
            </div>
            <hr />
            <div class="modal-label">
              <b>{{form.work2Name}}</b>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50">
                입사일 :
                <span class="font-value">{{form.work2JoinDate}}</span>
              </div>
              <div class="modal-label">
                퇴사일 :
                <span class="font-value">{{form.work2ResignDate}}</span>
              </div>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50">
                부서 및 직위 :
                <span class="font-value">{{form.work2Position}}</span>
              </div>
              <div class="modal-label">
                담당 업무 :
                <span class="font-value">{{form.work2MajorWork}}</span>
              </div>
            </div>
            <hr />
            <div class="modal-label">
              <b>{{form.work3Name}}</b>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50">
                입사일 :
                <span class="font-value">{{form.work3JoinDate}}</span>
              </div>
              <div class="modal-label">
                퇴사일 :
                <span class="font-value">{{form.work3ResignDate}}</span>
              </div>
            </div>
            <div class="d-flex">
              <div class="modal-label w-50">
                부서 및 직위 :
                <span class="font-value">{{form.work3Position}}</span>
              </div>
              <div class="modal-label">
                담당 업무 :
                <span class="font-value">{{form.work3MajorWork}}</span>
              </div>
            </div>
            <hr />
            <div class="d-flex">
              <div @click="$bvModal.hide('modal-lg')">
                <ButtonCustom title="취소" class="mr-3" />
              </div>
              <ButtonCustom title="승인" @click.native="writeResume" />
            </div>
          </div>
        </div>
      </b-modal>
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
    async writeResume() {
      try {
        const { data } = await Axios.post(
          "http://docker.cloudus.io:3000/writeresume",
          this.form
        );
        console.log("POST success", data);
        this.$router.push("DataPrint");
      } catch (error) {
        console.log("POST error", error);
      }
    }
  },
  data() {
    return {
      form: {
        userName: "정우성",
        school1: "한강초등학교",
        school2: "",
        school3: "",
        school4: "",
        school1Date: "1993-03-19",
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
      }
    };
  }
};
</script>
