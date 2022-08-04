<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Frotell
        </h1>

        <div class="col-12 col-md-4">
          <file-uploader upload-key="images" style="margin:0" :uploadUrl="fileUploadUrl" :files="[]" singleMode
                         @afterUpload="setUploadFile"/>
        </div>
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
import fileUploader from "@/components/file-uploader.vue";
export default {
  name: 'Home',
  components:{fileUploader},

  data() {
    return {
      fileUploadUrl: '/public/file/upload/art',
      formData: {},
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'currentUser'])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
    },
    setUploadFile(event) {
      if (event.id_file.length > 0) {
        event.id_file.map(val => {
          this.formData.id_file = (val.id_file);
        });
      }
    },
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
