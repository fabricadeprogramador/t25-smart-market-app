<template>
  <div>
    <div>
      <v-snackbar
        type="info"
        v-model="salvo"
        close-text="Close Alert"
        color="red"
        :top="y === 'top'"
      >
        Os campos CPF, RG, NOME, TELEFONE e E-MAIL são obrigatórios!
        <v-btn dark text @click="salvo = false">Fechar</v-btn>
      </v-snackbar>
    </div>
    <div>
      <v-snackbar
        type="info"
        v-model="salvo"
        close-text="Close Alert"
        color="info"
        :top="y === 'top'"
      >
        Cadastro efetuado com sucesso!
        <v-btn dark text @click="salvo = false">Fechar</v-btn>
      </v-snackbar>
    </div>

    <v-form>
      <div class="text-center">
        <h1>Cadastro</h1>
      </div>

      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <v-text-field v-model="usuario" label="Usuário" required></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field v-model="senha" label="Senha" type="password" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="nome" label="Nome" required></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-select :items="items" label="Sexo" v-model="sexo"></v-select>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field v-model="cpf" label="CPF" required></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field v-model="rg" label="RG" required></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field v-model="telefone" label="Telefone" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field v-model="cep" label="CEP" required type="number"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="endereco" label="Endereço" required></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field v-model="numero" label="Numero" type="number" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="bairro" label="Bairro" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="cidade" label="Cidade" required></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field v-model="uf" label="UF" required></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field v-model="complemento" label="Complemento"></v-text-field>
          </v-col>
        </v-row>

        <div class="text-center">
          <v-btn color="success" @click="salvar">Salvar</v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    usuario: "",
    senha: "",
    cpf: "",
    rg: "",
    nome: "",
    telefone: "",
    sexo: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    complemento: "",
    items: [
      { text: "Masculino", value: "M" },
      { text: "Feminino", value: "F" },
      { text: "Outro", value: "O" }
    ],
    salvo: false,
    naoCadastrado: false,
    y: "top"
  }),
  methods: {
    salvar() {
      let ehvalido = this.validar();

      if (ehvalido) {
        let usuario = {};
        usuario.username = this.usuario;
        usuario.senha = this.senha;
        usuario.tipo = "CLIENTE";
        usuario.ativo = true;

        let cliente = {};
        cliente.cpf = this.cpf;
        cliente.rg = this.rg;
        cliente.nome = this.nome;
        cliente.telefone = this.telefone;
        cliente.sexo = this.sexo;
        cliente.email = this.email;
        cliente.cep = this.cep;
        cliente.endereco = this.endereco;
        cliente.numero = this.numero;
        cliente.bairro = this.bairro;
        cliente.cidade = this.cidade;
        cliente.uf = this.uf;
        cliente.complemento = this.complemento;

        HttpRequestUtil.salvarUsuario(usuario).then(Usuario => {
          salvo = true
          cliente.usuario = Usuario[0]._id;
          this.salvarCliente(cliente);
        });
      } else {
        this.naoCadastrado = true;
      }
    },

    salvarCliente(cliente) {
      alert(JSON.stringify(cliente));
      HttpRequestUtil.salvarCliente(cliente).then(cadCliente => {
        localStorage.setItem("clienteLogado", JSON.stringify(cadCliente[0]));
        window.location.pathname = "/";
      });
    },

    limparCampos() {
      this.cpf = "";
      this.rg = "";
      this.nome = "";
      this.telefone = "";
      this.sexo = "";
      this.email = "";
      this.cep = "";
      this.endereco = "";
      this.numero = "";
      this.bairro = "";
      this.cidade = "";
      this.uf = "";
      this.complemento = "";
    },

    buscarCliente() {
      HttpRequestUtil.buscarProdutos().then(Cliente => {
        this.Cliente = Cliente;
      });
    },

    buscarClienteLS() {
      let cliente = {};

      cliente = JSON.parse(localStorage.getItem("clienteLogado"));

      this.cpf = cliente.cpf;
      this.rg = cliente.rg;
      this.nome = cliente.nome;
      this.telefone = cliente.telefone;
      this.sexo = cliente.sexo;
      this.email = cliente.email;
      this.cep = cliente.cep;
      this.endereco = cliente.endereco;
      this.numero = cliente.numero;
      this.bairro = cliente.bairro;
      this.cidade = cliente.cidade;
      this.uf = cliente.uf;
    },

    validar() {
      if (
        this.usuario == "" ||
        this.senha == "" ||
        this.cpf == "" ||
        this.rg == "" ||
        this.nome == "" ||
        this.telefone == "" ||
        this.email == ""
      ) {
        return false;
      }
      return true;
    }
  },

  mounted() {
    this.buscarClienteLS();
  }
};
</script>