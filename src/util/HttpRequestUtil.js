const API_URL = "http://ht-smart-market-api.herokuapp.com";
import axios from "axios";

export default {
  //Usuários
  async buscarUsuarios() {
    return axios.get(API_URL + "/usuarios").then(response => response.data);
  },

  async salvarUsuario(usuario) {
    return axios
      .post(API_URL + "/usuarios", usuario)
      .then(response => response.data);
  },

  async mudarStatus(usuario) {
    return axios.put(API_URL + "/usuarios", usuario).then(usuario => usuario.data);
  },

  //Produtos
  async buscarProdutos() {
    return axios.get(API_URL + "/produtos").then(produto => produto.data);
  },

  async buscarProdutosSetor(setor) {
    return axios.post(API_URL + "/produtos/setor", setor).then(produtos => produtos.data);
  },

  // async atualizarQuantidade(compraNova) {
  //   return axios.put(API_URL + "/produtos", compraNova).then(produto => produto.data)

  // },

  //Compras
  async salvarCompras(compra) {
    return axios.post(API_URL + "/compras", compra).then(compra => compra.data);
  },

  //Clientes
  async buscarClientes() {
    return axios.get(API_URL + "/clientes").then(cliente => cliente.data);
  },

  async salvarCliente(cliente) {
    return axios.post(API_URL + "/clientes", cliente)
      .then(response => response.data);
  },

  async buscaClientePorUsuario(usuario) {
    return axios
      .post(API_URL + "/clientes/usuario", usuario)
      .then(response => response.data);
  },

  //Contato Buscar
  async buscarResposta() {
    return axios.get(API_URL + "/contato").then(contato => contato.data);
  },

  //Contato BuscarPorCliente 
  async buscarPorCliente(cliente) {
    return axios.post(API_URL + "/contato/cliente", cliente).then(contato => contato.data);
  },

  //Contato Adicionar
  async salvarContato(contato) {
    return axios.post(API_URL + "/contato", contato).then(contato => contato.data);
  },

  //Login
  async autenticar(usuario) {
    return axios
      .post(API_URL + "/autenticar", usuario)
      .then(autenticar => autenticar.data);
  },

  //Setores
  async buscarSetores() {
    return axios.get(API_URL + "/setores").then(setor => setor.data);
  },

  async salvarSetor(setor) {
    return axios.post(API_URL + "/setores", setor).then(setor => setor.data);
  },

  async setorStatus(setor) {
    return axios.put(API_URL + "/setores", setor).then(setor => setor.data);
  },

};