<template>
  <nav class="global-nav">
    <div class="logo-wrap">
      <img src="../assets/Images/logo-white.svg" />
      <p class="user">ADMIN</p>
    </div>
    <div class="admin-menu">
      <ul>
        <li v-for="(item,i) in navList" :key="i">
          <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
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
          title: "교육기관검증",
          path: "/"
        },
        {
          title: "개인이력검증",
          path: "/personalHistory"
        },
        {
          title: "회원 관리",
          path: "/userManagement"
        },
        {
          title: "토크 콘서트 관리",
          path: "/talkConcert"
        },
        {
          title: "토큰 관리",
          path: "/tokenManagement"
        }
      ]
    };
  }
};
</script>
