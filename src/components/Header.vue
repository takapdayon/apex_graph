<template>
  <div>
    <v-app-bar app
      color="green darken-1"
      dark
      flat

    >
      <v-app-bar-nav-icon @click="showDrawer" />
      <v-spacer></v-spacer>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>
<script>
export default {
    name: 'Header',
    methods: {
      showDrawer: function() {
        this.$emit('changeDrawerShow')
      }
    }
}
</script>

<style scoped>
</style>