import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {},
  actions: {},
  modules: {}
});
