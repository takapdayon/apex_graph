<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-btn icon @click="closeDrawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: ['drawer'],
  data: () => ({
    menus: [
      { title: 'About', icon: 'fas fa-home', url: '/' },
      { title: 'Graph', icon: 'fas fa-chart-line', url: '/graph' },
      { title: 'Users', icon: 'fas fa-users', url: '/users' },
    ]
  }),
  methods: {
    closeDrawer: function() {
      this.$emit('changeDrawerShow')
    }
  }
}
</script>