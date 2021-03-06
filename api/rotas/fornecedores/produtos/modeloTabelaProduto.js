const Sequelize = require('sequelize')
const instancia = require('../../../banco-de-dados')

const colunas = {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultVaule: 0
  },
  fornecedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    References: {
      model: require('../ModeloTabelaFornecedor'),
      key: 'id'
    }
  }
}

const opcoes = {
  freezeTableName: true,
  tableName: 'produtos',
  timestamps: true,
  createdAt: 'dataCriacao',
  updatedAt: 'dataAtualizacao',
  version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)