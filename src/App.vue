<template>
  <v-app>
    <Header />
    <v-content>
      <Graph class="aa"/>
    </v-content>
  </v-app>
</template>

<script>
import Graph from './components/Graph';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Graph,
    Header,
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