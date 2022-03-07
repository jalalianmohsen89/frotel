<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <router-link to="/Home" class="navbar-item">
          <span class="navbar-title">Home</span>
        </router-link>
        <template v-if="isAuthenticated">
          <router-link v-show="currentUser.role==='admin'" to="/admin/dashboard" class="navbar-item">
            <span class="navbar-title">Admin Panel</span>
          </router-link>
          <router-link to="/user/dashboard" class="navbar-item">
            <span class="navbar-title">User Panel</span>
          </router-link>
          <a href="#" class="navbar-item" @click="logout">
            <span class="navbar-title">logout</span>
          </a>
        </template>
        <router-link v-else to="/login" class="navbar-item">
          <span class="navbar-title">Login</span>
        </router-link>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import {mapGetters} from "vuex";
import {LOGOUT} from "./store/auth.module";

export default {
  name: 'App',

  computed: {
    ...mapGetters(['isAuthenticated', 'currentUser'])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
    }
  }
}
</script>
<style>

.navbar-item:first-child span {
  font-size: 16px;
  font-weight: 600;
}

.navbar-title {
  font-size: 14px;
  color: #2c3e50;
  margin-right: 6px;
}

.navbar-title:hover {
  color: #285434;
}
</style>