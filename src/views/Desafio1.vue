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
      <v-row>
        <v-btn @click="calcularIMC">Calcular IMC</v-btn>
      </v-row>
    </v-form>
    <v-row class='pt-3 pb-3 mt-3 mb-3'>
    <v-col cols="12" md="4">
      <v-text-field
        v-model="imcResult"
        type="string"
        outlined
        label="IMC"
      ></v-text-field>
    </v-col>
    </v-row>
    <v-row>
    <v-card class='elevation-3'>
      <v-simple-table>

          <thead>
            <tr>
              <th class="text-left">IMC</th>
              <th class="text-left">Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categoriaIMC" :key="item.imcCategoria">
              <td>{{ item.imcCategoria }}</td>
              <td>{{ item.categoria }}</td>
            </tr>
          </tbody>
      </v-simple-table>
    </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {

  data () {
    return {
      form: false,
      rules: [
        value => !!value || 'Campo obrigatorio.',
        value => value > 0 || 'Digite um valor maior que 0'
      ],
      peso: 0,
      altura: 0,
      imcResult: '',
      categoriaIMC: [
        {
          imcCategoria: 'imc < 16',
          categoria: 'Subpeso Severo'
        },
        {
          imcCategoria: '16 a 19,9',
          categoria: 'Subpeso'
        },
        {
          imcCategoria: '20 a 24,9',
          categoria: 'Normal'
        },
        {
          imcCategoria: '25 a 29,9',
          categoria: 'Sobrepeso'
        },
        {
          imcCategoria: '30 a 39,9',
          categoria: 'Obeso'
        },
        {
          imcCategoria: '40 < imc',
          categoria: 'Obeso Mórbido'
        }
      ]
    }
  },

  methods: {
    calcularIMC () {
      var numbers = /^[0-9]+$/
      if (this.$refs.formIMC.validate()) {
        if (this.altura.match(numbers)) {
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
          this.imcResult = (`Seu IMC é ${imc}, você está na categoria: ${categoria}`)
        } else {
          alert('Digite a altura em centímetros')
        }
      } else {
        alert('Digite todos os campos.')
      }
    }
  }
}
</script>
