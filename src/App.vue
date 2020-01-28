<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="primary"
    >
      <v-btn text @click="irRota(1)">
        Desafio 1
      </v-btn>
      <v-btn text @click="irRota(2)">
        Desafio 2
      </v-btn>
      <v-btn text @click="irRota(3)">
        Desafio 3
      </v-btn>
      <v-btn text @click="irRota(4)">
        Desafio 4
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),

  methods: {
    irRota (link) {
      this.$router.push(`/desafio${link}`)
    }
  }
}
</script>
