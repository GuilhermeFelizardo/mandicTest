<template>
  <v-container>
    <span class="display-1"> Desafio 1 - Calculo IMC</span>
    <br />
    <span>
      Para calcular o seu IMC digite seu peso, sua altura e pressione calcular!
    </span>
    <v-form ref="formIMC" v-model="form" lazy-validation>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field
            v-model="peso"
            type="number"
            hint='Exemplo: 70'
            :rules="rules"
            outlined
            suffix="Kg"
            label="Peso"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="altura"
            outlined
            type="number"
            hint='Exemplo: 180'
            :rules="rules"
            suffix="cm"
            label="Altura"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click="calcularIMC">Calcular IMC</v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      form: false,
      rules: [
        value => !!value || 'Campo obrigatorio.',
        value => (value || '') >= 0 || 'Digite um valor maior que 0'
      ],
      peso: 0,
      altura: 0
    }
  },

  methods: {
    calcularIMC () {
      if (this.$refs.formIMC.validate()) {
        const peso = parseInt(this.peso)
        const altura = parseInt(this.altura) / 100
        let imc = (peso / (altura * altura))
        let categoria = null
        imc = imc.toFixed(2)
        switch (!categoria) {
          case (imc < 16):
            categoria = 'Subpeso Severo'
            break
          case (imc >= 16 && imc < 20):
            categoria = 'Subpeso'
            break
          case (imc >= 20 && imc < 25):
            categoria = 'Normal'
            break
          case (imc >= 25 && imc < 30):
            categoria = 'Sobrepeso'
            break
          case (imc >= 30 && imc < 40):
            categoria = 'Obeso'
            break
          case (imc >= 40):
            categoria = 'Obeso Mórbido'
            break
        }

        alert(`Seu IMC é ${imc}, você está na categoria: ${categoria}`)
      } else {
        alert('Digite todos os campos.')
      }
    }
  }
}
</script>
