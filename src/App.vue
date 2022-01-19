<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >

      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — enfegroup
      </div>

    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
