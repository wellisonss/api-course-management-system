import { Knex } from 'knex'; // Importa o tipo Knex do módulo 'knex'
import path from 'path'; // Importa o módulo 'path' do Node.js

export const development: Knex.Config = {
  client: 'sqlite3', // Define o cliente de banco de dados como 'sqlite3'
  useNullAsDefault: true, // Define que valores nulos serão utilizados como padrão
  connection: {
    filename: path.resolve(__dirname, '..', '..', '..', 'database.sqlite') // Define o caminho do arquivo do banco de dados SQLite usando o módulo 'path' para resolver o caminho relativo
  },

  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations'), // Define o diretório onde estão localizados os arquivos de migração usando o módulo 'path' para resolver o caminho relativo
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'seeds'), // Define o diretório onde estão localizados os arquivos de seed usando o módulo 'path' para resolver o caminho relativo
  },
  pool: {
    // afterCreate: (connection: any, done: Function) => {
    //   connection.run('PRAGMA foreign_keys = ON');
    //   done(); }
    min: 0 // Define o número mínimo de conexões no pool como 0
  }
};

export const test: Knex.Config = {
  ...development, // Copia as propriedades do objeto 'development' para o objeto 'test'
  connection: ':memory:', // Define uma conexão em memória para o ambiente de teste
};

export const production: Knex.Config = {
  ...development, // Copia as propriedades do objeto 'development' para o objeto 'production'
};
