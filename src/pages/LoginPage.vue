<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md8 class="pr-6 pt-4 pl-3">
        <v-img
          style="max-width: 100vh"
          src="https://th.bing.com/th/id/OIP.ronCc1PwT9Rv-3FD2EYabQAAAA?rs=1&pid=ImgDetMain"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <login-form :loadingSubmitBottom="loading" @onSubmitClick="submitForm">
        </login-form>
        <v-alert dark shaped :value="showAlert" color="red">{{ msg }}</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '@/components/login/LoginForm';
import authService from '@/service/credifit/auth.service';
export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      showAlert: false,
      validFormLogin: true,
      loading: false,
      msg: '',
      alert: false,
    };
  },
  methods: {
    async submitForm(payload) {
      const { email, password } = payload;
      console.log(email, password);
      this.showAlert = false;
      this.msg = '';
      this.loading = true;
      try {
        const resp = await authService.login(email, password);
        console.log('Login bem-sucedido:', resp.data);
      } catch (error) {
        this.loading = false;
        this.showAlert = true;
        this.msg = 'Senha Invalida';
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
