<template>
  <v-app>
    <Header
    @changeDrawerShow="changeDrawerShow"
    />
    <v-content>
      <router-view />
    </v-content>
    <Drawer
    :drawer="drawer"
    @changeDrawerShow="changeDrawerShow"
    />
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
    drawer: false
  }),

  methods: {
    changeDrawerShow: function() {
      this.drawer = !this.drawer
    }
  }
};
</script>

<style scoped>
</style>