<template>
  <v-app-bar
    app
    class="elevation-5"
    color="theme-background"
    fixed
  >
    <v-btn
      link
      text
      to="/"
    >
      Início
    </v-btn>
    <v-btn
      link
      text
      to="/about"
    >
      Sobre
    </v-btn>
    <v-btn
      link
      text
      to="/about"
    >
      Institucional
    </v-btn>
    <v-btn
      link
      text
      to="/about"
    >
      Contato
    </v-btn>
    <v-spacer />
    <v-btn
      link
      text
      to="/login"
    >
      Login
    </v-btn>
    <v-btn
      link
      color="primary"
      to="/register"
    >
      Registrar-se
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBarLanding",
};
</script>