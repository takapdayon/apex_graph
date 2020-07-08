<template class="overflow">
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <v-select
          :items="items"
          label="platform"
          dense
          hide-details
          outlined
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['psn', 'xbox', 'origin'],
    }),
  }
</script>

<style scoped>
</style>