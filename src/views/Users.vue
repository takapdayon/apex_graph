<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>This is a header</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list>
                <v-list-item v-for="user in item.users" :key="user">
                  <v-list-item-content class="align-end">{{ user }}</v-list-item-content>
                  <v-icon color="error" @click="deleteUser(user)">fas fa-times</v-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      itemsPerPage: 3,
      items: [
        {
          name: 'Origin',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
          users: ["Origin1", "TOmOtakaP", "はむさん"]
        },
        {
          name: 'Playstation',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
          users: ["Playstation1", "TOmOtakaP", "はむｗさん", "パスファインダーさん"]
        },
        {
          name: 'Xbox',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
          users: ["Xbox", "TOmOtakaP", "ライフラインさん"]
        },
      ],
    }),
    methods: {
        deleteUser: function(user) {
            console.log(user)
        }
    }
  }
</script>

<style>

</style>