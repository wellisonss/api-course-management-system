import { knex } from "knex"; // Importa a função knex do módulo 'knex'
import { development } from "./Environment"; // Importa o objeto 'development' do arquivo './Environment'

export const Knex = knex(development); // Cria uma instância do Knex utilizando o objeto 'development' como configuração
