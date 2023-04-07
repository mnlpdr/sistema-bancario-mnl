class ClienteEspecial extends Cliente {

    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta, dependedntes: Array<Cliente>){
        super(nome, cpf, conta);
        this._dependentes = [];
    }

    adicionarDependente(dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    removerDependente(cpf: string) {

        const indiceDependente = this._dependentes.findIndex(cliente => cliente.cpf === cpf);
        if (indiceDependente > -1) {
                this._dependentes.splice(indiceDependente, 1);
            }
    }

    listarDependentes(): Array<Cliente> {
        return this._dependentes;
    }

}