<template>
  <v-container>
    <v-layout wrap>
      <v-card elevation="4" light tag="section" width="50%" style="margin: 20% auto">
        <v-card-title>
          <v-layout align-center justify-space-between>
            <h3 class="headline pt-3">
              {{ platformName }}
            </h3>
            <div>
              <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right"
                     src="https://www.mobygames.com/images/i/12/25/1435075.png"></v-img>
            </div>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-text-field
                outline
                label="username"
                type="text"
                v-model="username"
            ></v-text-field>
            <v-text-field
                outline
                label="password"
                type="text"
                v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="py-3">
          <v-spacer></v-spacer>
          <v-btn color="info" class="px-5 py-3" large="md" @click="Login">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import {LOGIN} from "../../store/auth.module";
import {mapGetters} from 'vuex'

export default {
  name: "login",
  data() {
    return {
      darkTheme: true,
      platformName: 'Platform name',
      password: null,
      username: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    Login() {
      const data = {
        userName: this.username,
        password: this.password,
      }
      this.$store.dispatch(LOGIN, data).then(() => this.$router.push('/'));
    }
  }
}
</script>

<style scoped>

</style>