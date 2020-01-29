<template>
  <v-container>
    <span class="display-1"> Desafio 4 - Texto para arte ASCII</span>
    <br />
    <span>
      Digite o texto para convertê-lo para uma arte ASCII.
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
    <v-btn @click="textoParaAscii">TRADUZIR</v-btn>
    <br />
    <br />
    <span>
      Texto convertido para arte ASCII.
    </span>
    <v-col cols="12" md="10">
        <v-textarea
          no-resize
          outlined
          v-model="areaTexto"
          label="Arte ASCII"
        ></v-textarea>
      </v-col>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      form: false,
      areaTexto: null,
      rules: [
        value => !!value || 'Campo obrigatorio.'
      ],
      texto: null
    }
  },

  methods: {
    textoParaAscii () {
      if (this.$refs.formText.validate()) {
        var letters = /^[A-Z a-z ]+$/
        let string00 = ''
        let string01 = ''
        let string02 = ''
        let string03 = ''
        let textoTraduzido = this.texto.toLowerCase()
        if (textoTraduzido.match(letters)) {
          for (let i = 0; i <= textoTraduzido.length; i++) {
            if (textoTraduzido[i] === 'a') {
              string00 = string00 + `ㅤㅤ  `
              string01 = string01 + `ㅤ/\\   `
              string02 = string02 + ` /~~\\`
              string03 = string03 + `           `
            } else if (textoTraduzido[i] === 'b') {
              string00 = string00 + ' __  '
              string01 = string01 + '|__)'
              string02 = string02 + '|__)'
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'c') {
              string00 = string00 + ' __  '
              string01 = string01 + '/  ` '
              string02 = string02 + '\\__,'
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'd') {
              string00 = string00 + ' __  '
              string01 = string01 + '|   \\ '
              string02 = string02 + '|__/'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'e') {
              string00 = string00 + ' ___'
              string01 = string01 + '|__  '
              string02 = string02 + '|___'
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'f') {
              string00 = string00 + ' ___'
              string01 = string01 + '|__  '
              string02 = string02 + '|      '
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'g') {
              string00 = string00 + '  __  '
              string01 = string01 + '/ _`  '
              string02 = string02 + '\\__>'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'h') {
              string00 = string00 + '      '
              string01 = string01 + '|__|'
              string02 = string02 + ' |   |'
              string03 = string03 + '      '
            } else if (textoTraduzido[i] === 'i') {
              string00 = string00 + '     '
              string01 = string01 + ' |   '
              string02 = string02 + ' |   '
              string03 = string03 + '      '
            } else if (textoTraduzido[i] === 'j') {
              string00 = string00 + '       '
              string01 = string01 + '     | '
              string02 = string02 + '\\__/'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'k') {
              string00 = string00 + '      '
              string01 = string01 + '|__/'
              string02 = string02 + '|  \\ '
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'l') {
              string00 = string00 + '       '
              string01 = string01 + '|      '
              string02 = string02 + '|___ '
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'm') {
              string00 = string00 + '      '
              string01 = string01 + ' |\\/|'
              string02 = string02 + ' |   |'
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'n') {
              string00 = string00 + '    '
              string01 = string01 + '|\\ |'
              string02 = string02 + '| \\|'
              string03 = string03 + '      '
            } else if (textoTraduzido[i] === 'o') {
              string00 = string00 + ' __   '
              string01 = string01 + '/   \\ '
              string02 = string02 + '\\__/'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'p') {
              string00 = string00 + ' __  '
              string01 = string01 + '|__)'
              string02 = string02 + '|     '
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'q') {
              string00 = string00 + '  __  '
              string01 = string01 + '/   \\ '
              string02 = string02 + '\\__X'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'r') {
              string00 = string00 + ' __  '
              string01 = string01 + '|__)'
              string02 = string02 + '|  \\ '
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 's') {
              string00 = string00 + ' __  '
              string01 = string01 + '/__`'
              string02 = string02 + '.__/'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 't') {
              string00 = string00 + '___  '
              string01 = string01 + '   |   '
              string02 = string02 + '   |   '
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'u') {
              string00 = string00 + '       '
              string01 = string01 + '|     |'
              string02 = string02 + '\\__/'
              string03 = string03 + '        '
            } else if (textoTraduzido[i] === 'v') {
              string00 = string00 + '      '
              string01 = string01 + '\\  /'
              string02 = string02 + ' \\/ '
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'w') {
              string00 = string00 + '       '
              string01 = string01 + '|    |'
              string02 = string02 + ' |/\\|'
              string03 = string03 + '       '
            } else if (textoTraduzido[i] === 'x') {
              string00 = string00 + '     '
              string01 = string01 + '\\_/'
              string02 = string02 + '/  \\'
              string03 = string03 + '     '
            } else if (textoTraduzido[i] === 'y') {
              string00 = string00 + '     '
              string01 = string01 + '\\ /'
              string02 = string02 + '  | '
              string03 = string03 + '     '
            } else if (textoTraduzido[i] === 'z') {
              string00 = string00 + '__ '
              string01 = string01 + '  / '
              string02 = string02 + '/_ '
              string03 = string03 + '     '
            } else if (textoTraduzido[i] === ' ') {
              string00 = string00 + '   '
              string01 = string01 + '   '
              string02 = string02 + '   '
              string03 = string03 + '   '
            }
          }

          this.areaTexto = `${string00}
${string01}
${string02}
${string03}`

          // this.areaTexto = textoTraduzido
        } else {
          alert('Digite apenas letras!')
        }
      } else {
        alert('Digite todos os campos!')
      }
    }
  }
}
</script>
