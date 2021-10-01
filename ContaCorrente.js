import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    _cliente;
    agencia;
    _saldo = 0;
    //#saldo = 0; proposta não oficial de atributo privado de verdade

    set cliente(novoValor){ //atribuir valor no cliente
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }      
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas+= 1;
    }
    
    sacar(valor){
        if(this._saldo >= valor ){
            this._saldo -= valor;
            console.log("Saque realizado com sucesso. O novo saldo é de : R$ " + this._saldo);
            return valor;
        } else{
            console.log("Não foi possível realizar o saque");
        }
    }

    depositar(valor){ // if com a tecnica de "early return(retorno antecipado) : verificar as situações indesejadas primeiro"
        if(valor < 0){
            console.log("Não foi possível realizar o depósito");
            return;
        }
        this._saldo += valor;
            console.log("Depósito realizado com sucesso. O novo saldo é de : R$ " + this._saldo);
            return valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}