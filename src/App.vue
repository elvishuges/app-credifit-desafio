<template>
  <v-app>
    <v-app-bar app color="cyan darken-2" dark>
      <div class="d-flex align-center">
        <v-img style="width: 150px" src="./assets/Brand.png"></v-img>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Elvis Huges</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
