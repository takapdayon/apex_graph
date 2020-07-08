<template>
  <v-app>
    <Header />
    <v-content>
      <Graph class="aa"/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Graph from './components/Graph';
import Header from './components/Header';
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Graph,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.aa {
  text-align: center;
}

</style>