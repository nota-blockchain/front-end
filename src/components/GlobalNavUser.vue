<template>
  <nav class="global-nav">
    <div class="logo-wrap">
      <img src="../assets/Images/logo-white.svg" />
      <p class="user">User</p>
    </div>
    <div class="admin-menu">
      <ul>
        <li v-for="(item,i) in navList" :key="i">
          <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="user-temporary">
      <router-link to="/">Admin Temporary</router-link>
    </div>
  </nav>
 
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {
      navList: [
        {
          title: "이력관리",
          path: "/user"
        },
        {
          title: "교육자료",
          path: "/educationData"
        },
        {
          title: "교육과정 신청",
          path: "/educationProcess"
        },
         {
          title: "토크콘서트 투표",
          path: "/talkConcertVote"
        },
        {
          title: "증명서 및 자료출력",
          path: "/dataPrint"
        },
        
      ]
    };
  }
};
</script>
