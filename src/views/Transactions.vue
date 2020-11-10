<template>
    <p1>Transactions {{ $route.params.accountId }}</p1>
    <!-- <v-data-table :headers="headers" :items="transactions" class="elevation-1">
    </v-data-table> -->
</template>

<script>
export default {
  name: 'Transactions',
  data: () => {
    return {
      headers: [{ text: 'Date' }, { text: 'Somme' }, { text: 'Nom' }, { text: 'Memo' }],
    }
  },
}
</script>
