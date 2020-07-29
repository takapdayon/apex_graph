<template>
  <div>
    <!--
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >-->
    <v-app-bar
      color=#42b983;
      dark
    >
      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>
        <v-container class="overbuttons">
            <v-row>
                <v-col class="column"
                    cols="12"
                    md="3"
                >
                    <v-select
                    :items="items"
                    label="platform"
                    dense
                    hide-details
                    outlined
                    height="10"
                    ></v-select>
                </v-col>
                <v-col class="column"
                    cols="12"
                    md="9"
                >
                    <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="fas fa-search"
                    label="Search"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
      items: ['psn', 'xbox', 'origin'],
    }),
}
</script>

<style scoped>
.overbuttons {
    width: 700px;
    padding-top: 2px;
    padding-bottom: 2px;
}
.column {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>