<template>
    <v-container>
      <span class="display-1"> Desafio 2 - Verificar conexão a Internet</span>
      <v-col>
        <v-row class='pt-2 pb-2 mt-2 mb-2'>
          <span>Para executar o "Desafio02", favor acessar o link: </span>
          <a class="pl-1" href="https://drive.google.com/open?id=1AXEvsNEmA_L3gLX8VEfD9joYUMFrqVoN" target="_blank"> https://drive.google.com/open?id=1AXEvsNEmA_L3gLX8VEfD9joYUMFrqVoN</a>
          <span class="pl-1"> e baixar o "Desafio 02.rar".</span>
        </v-row>
        <v-row class='pt-2 pb-2 mt-2 mb-2'>
          <span>Instalar também o SDK 3.1.101 no link:</span>
          <a class="pl-1" href="https://dotnet.microsoft.com/download/dotnet-core/3.1" target="_blank"> https://dotnet.microsoft.com/download/dotnet-core/3.1</a>
        </v-row>
        <v-row class='pt-2 pb-2 mt-2 mb-2'>
          <span> Após baixar o "Desafio02.rar", descompactar o arquivo, e executar o "Desafio02.exe" (O arquivo "Desafio02.exe" deve estar dentro da pasta na qual estão suas dependências).</span>
        </v-row>
        </v-col>
        <v-img src="../assets/Desafio02.png" :aspect-ratio="1" max-height=400 max-width=800></v-img>
        <v-col>
            <v-col cols="12" md="6">
            <v-textarea
              outlined
              auto-grow
              v-model="areaTexto"
              label="Código"
            ></v-textarea>
          </v-col>
        </v-col>
    </v-container>
</template>

<script>

export default {
  data () {
    return {
      areaTexto: `using System;

namespace Teste
{
    class Program
    {
        static void Main(string[] args)
        {
            bool verificandoInternet = false;
            bool compare;
            bool firstTime = true;
            Console.WriteLine("## DESAFIO 02 - VERIFICAR ACESSO A INTERNET ##");

            while (true)
            {
                compare = verificandoInternet;
                verificandoInternet = System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable();
                if (compare != verificandoInternet || firstTime == true)
                {
                    if (verificandoInternet == true)
                    {
                        Console.WriteLine("\\n>> Conectado a Internet!");
                    }
                    else
                    {
                        Console.WriteLine("\\n>> Conexão perdida, sem acesso a Internet!");
                    }
                    firstTime = false;
                }          
            }           
        }
    }
}

`
    }
  }
}
</script>
