import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Tamiris", 12345678910 ); // instanciando a classe

const cliente2 = new Cliente("Gabriel",22346678911);

const contaCorrenteTamiris = new ContaCorrente(1001, cliente1); 
contaCorrenteTamiris.depositar(500);

const contaCorrente2 = new ContaCorrente(1002, cliente2);

//const valorSacado = contaCorrenteTamiris.sacar(100);
//console.log("O valor sacado é : " + valorSacado);
//console.log(contaCorrenteTamiris);

contaCorrenteTamiris.transferir(200,contaCorrente2);
console.log(cliente2);
console.log(contaCorrenteTamiris);
console.log(ContaCorrente.numeroDeContas);


