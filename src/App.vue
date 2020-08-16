<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Drawer />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Drawer from './components/NavigationDrawer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Drawer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>