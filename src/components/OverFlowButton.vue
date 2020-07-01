<template>
  <v-container>
    <v-layout wrap>
      <v-flex>
    <v-select
      :items="items"
      label="Outlined style"
      dense
      outlined
    ></v-select>
    </v-flex>
    <v-flex>
    <v-text-field
      v-model="search"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
    ></v-text-field>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['psn', 'xbox', 'origin'],
    }),
  }
</script>