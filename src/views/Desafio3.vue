<template>
  <v-container>
    <span class="display-1"> Desafio 3 - Novo Alfabeto</span>
    <br />
    <span>
      Digite o texto para convertê-lo para o novo alfabeto.
    </span>
    <v-form ref="formText" v-model="form" lazy-validation>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="texto"
            type="text"
            hint='Exemplo: mandic clound solutions'
            :rules="rules"
            outlined
            label="Texto"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click="traduzirTexto">TRADUZIR</v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      form: false,
      rules: [
        value => !!value || 'Campo obrigatorio.'
      ],
      texto: null
    }
  },

  methods: {
    traduzirTexto () {
      if (this.$refs.formText.validate()) {
        let textoTraduzido = this.texto.toLowerCase()
        textoTraduzido = textoTraduzido.replace(/[^a-zA-Z ]/g, '')

        for (let i = 0; i <= textoTraduzido.length; i++) {
          textoTraduzido = textoTraduzido.replace('c', '3')
          textoTraduzido = textoTraduzido.replace('f', '6')
          textoTraduzido = textoTraduzido.replace('i', '9')
          textoTraduzido = textoTraduzido.replace('l', '12')
          textoTraduzido = textoTraduzido.replace('o', '15')
          textoTraduzido = textoTraduzido.replace('r', '18')
          textoTraduzido = textoTraduzido.replace('u', '21')
          textoTraduzido = textoTraduzido.replace('x', '24')
        }

        alert('O texto traduzido para o novo alfabeto é: ' + textoTraduzido)
      } else {
        alert('Digite todos os campos!')
      }
    }
  }
}
</script>
