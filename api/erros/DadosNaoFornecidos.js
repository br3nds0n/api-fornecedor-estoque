class DadosNaoFornecidos extends Error {
  constructor () {
    super('não foram oferecidos dados para atualizar')
    this.name = 'DadosNaoFornecidos'
    this.idErro = 2
  }
}

module.exports = DadosNaoFornecidos