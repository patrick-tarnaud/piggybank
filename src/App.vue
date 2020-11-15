<template>
  <v-app>
    <v-navigation-drawer app permanent dark color="rgb(0,0,0,0.85)" width="200px">
      <v-list dense nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PiggyBank</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          active-class="account-active"
          v-for="account in accounts"
          :key="account.id"
          link
          :to="{ name: 'transactions', params: { accountId: account.id } }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ account.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="account_active" link :to="{ name: 'about' }">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
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
import { mapState } from 'vuex'
const { dialog } = require('electron').remote
import { importOfxFile } from './imports/import-ofx'

export default {
  name: 'App',

  data: function() {
    return {}
  },
  computed: {
    ...mapState(['accounts']),
  },
  // computed: {
  //   accounts() {
  //     return this.$store.state.accounts
  //   },
  // },
  methods: {
    importFile: function() {
      let filesToImport = dialog.showOpenDialogSync({
        filters: [
          { name: 'Fichiers ofx', extensions: ['ofx'] },
          { name: 'Tous les fichiers', extensions: ['*'] },
        ],
        properties: ['openFile'],
      })
      importOfxFile(filesToImport[0], account => {
        console.log('importOfxFile', account)
      })
    },
  },
}
</script>
<style>
.account-active {
  background-color: #3498db;
}
</style>
