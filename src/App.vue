<template>
  <v-app>
    <v-navigation-drawer app permanent dark color="rgb(0,0,0,0.85)" width="200px">
      <v-list dense nav >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PiggyBank</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="account_active" v-for="account in accounts" :key="account.id" link :to="{ name: 'transactions', params: { account_id: account.id } }">
          <v-list-item-content>
            <v-list-item-title  >{{ account.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="account_active" link :to="{ name: 'about'}">
          <v-list-item-content>
            <v-list-item-title >About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat style="left:200px" height="30px">
      <v-btn x-small dark color="orange" @click="importFile">Import</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      accounts: [
        {
          id: 'Compte 1',
          transactions: [
            {
              date: new Date(),
              amount: -150,
              name: 'Virement Sophie',
              memo: 'Compte joint',
            },
            {
              date: new Date(),
              amount: -3000,
              name: 'Virement Lolotte',
              memo: 'Anniversaire',
            },
            {
              date: new Date(),
              amount: 5000,
              name: 'Salaire',
              memo: 'U GIE IRIS',
            },
            {
              date: new Date(),
              amount: -750,
              name: 'Assurance maison',
              memo: 'Macif',
            },
            {
              date: new Date(),
              amount: -150,
              name: 'Assurance auto',
              memo: 'Tous risques - Golf',
            },
          ],
        },
        {
          id: 'Compte 2',
          transactions: [
            {
              date: new Date(),
              amount: -150,
              name: 'Virement Maman',
              memo: 'Remboursement anniversaire papa',
            },
            {
              date: new Date(),
              amount: 200,
              name: 'Remboursement mutuelle',
              memo: 'Lentilles',
            },
            {
              date: new Date(),
              amount: 2000,
              name: 'Intérêts aussurance vie',
              memo: '2020',
            },
            {
              date: new Date(),
              amount: -250,
              name: 'Courses Super U',
              memo: 'Alimentation',
            },
          ],
        },
      ],
    }
  },
  methods: {
    importFile: () => {
      alert('Import')
    },
  },
}
</script>
<style>
.account_active {
  background-color: #3498db;
}

</style>