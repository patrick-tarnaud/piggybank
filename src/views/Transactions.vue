<template>
  <v-data-table :headers="headers" :items="transactions" class="elevation-1" @click:row="transactionSelected">
    <!-- date format -->
    <template v-slot:[`item.date`]="{ item }">
      <span>{{ item.date.toLocaleString() }}</span>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Transactions',
  data: () => {
    return {
      headers: [
        { text: 'Date', value: 'date', dataType: 'Date' },
        { text: 'Somme', value: 'amount' },
        { text: 'Nom', value: 'name' },
        { text: 'Memo', value: 'memo' },
      ],
    }
  },
  computed: {
    ...mapState(['accounts']),

    transactions: function() {
      return this.accounts.filter(account => account.id === this.$route.params.accountId)[0].transactions
    },
  },
  methods: {
    transactionSelected: function(transaction) {
      console.log('transaction: ', transaction)
    },
  },
}
</script>
<style></style>
