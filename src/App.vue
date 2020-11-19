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
          :to="{ name: 'transactions', params: { accountId: account.accountId } }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ account.accountId }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="account_active" link :to="{ name: 'about' }">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat style="left:200px" height="30px" shaped>
      <v-btn x-small dark color="orange" @click="importFromFile" class="button-bar">Import</v-btn>
      <v-btn x-small dark color="orange" @click="save" class="button-bar">Save</v-btn>
      <v-btn x-small dark color="orange" @click="load" class="button-bar">Load</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const { dialog } = require('electron').remote
import { importOfxFile } from './imports/import-ofx'
import { save, load } from '@/repositories/file-repository'

export default {
  name: 'App',

  data: function() {
    return {}
  },
  mounted: async function() {
    await this.load()
  },
  computed: {
    ...mapState(['accounts']),
  },
  methods: {
    ...mapActions(['setAccounts']),

    importFromFile: async function() {
      let filesToImport = dialog.showOpenDialogSync({
        filters: [
          { name: 'Fichiers ofx', extensions: ['ofx'] },
          { name: 'Tous les fichiers', extensions: ['*'] },
        ],
        properties: ['openFile'],
      })
      try {
        let account = await importOfxFile(filesToImport[0])
        this.setAccounts([account])
      } catch (error) {
        dialog.showErrorBox('Import OFX File', error)
      }
    },

    save: async function() {
      try {
        await save(this.$store.state)
      } catch (error) {
        dialog.showMessageBox(null, { type: 'error', title: 'Erreur', message: 'Sauvegarde des données impossible.', buttons: ['Ok'] })
      }
    },

    load: async function() {
      try {
        this.setAccounts(await load())
      } catch (error) {
        dialog.showMessageBox(null, { type: 'error', title: 'Erreur', message: 'Chargement des données impossible.', buttons: ['Ok'] })
      }
    },
  },
}
</script>
<style>
.account-active {
  background-color: #3498db;
}
.button-bar {
  margin-right: 2px;
}
</style>
