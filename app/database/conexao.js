import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "bdcopa",
});

conexao.connect();

/** Executa um código sql com ou sem valores
 * @param {string} sql instução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 *  @param {string} messagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */

export const consulta = (sql, valores = "", messagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(messagemReject);
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};
export default conexao;
