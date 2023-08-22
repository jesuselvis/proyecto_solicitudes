<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff"  class="shadow-2 rounded-borders">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/" active-class="my-menu-link" exact>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/registrar" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Registrar
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/about" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/verSolicitudes" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Solicitudes
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <RouterView></RouterView>
      </q-page-container>
    </q-layout>
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

import verSolicitudes from 'components/verSolicitudes.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    verSolicitudes
  },

  setup () {
    const drawer = ref(false)

    return {
      drawer
    }
  }
})
</script>

<style lang="scss">
.my-menu-link{
    color: azure;
    background: #F2C037;
}

</style>
