<template>
  <v-app>
    <v-app-bar dark color="pink"> 
      <v-toolbar-title>PiggyBank</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer clipped  permanent >
      <v-list dense nav >
        <v-list-item v-for="account in accounts" :key="account.name" link>
          <v-list-item-content>
            <v-list-item-title >{{ account.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main></v-main>
  </v-app>
</template>

<script>
export default {
  name: 'PiggyBankApp',

  data() {
    return {
      accounts: [
        {
          name: 'Compte 1',
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
          name: 'Compte 2',
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
}
</script>
