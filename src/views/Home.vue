<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Frotell
        </h1>


        <template v-if="isAuthenticated">
          <a href="#" class="navbar-item" @click="logout"
             target="_blank">logout
          </a>
          <router-link to="/user/dashboard" class="navbar-item">user panel</router-link>
          <router-link v-if="currentUser.role==='admin'" class="navbar-item" to="/admin/dashboard">admin panel
          </router-link>
        </template>
        <router-link v-else to="/login" class="navbar-item">login</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {LOGOUT} from "../store/auth.module";
import {mapGetters} from "vuex";

export default {
  name: 'Home',
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
.navbar-item {
  text-decoration: none;
  margin-left: 5px;
  color: blue;
}
</style>
