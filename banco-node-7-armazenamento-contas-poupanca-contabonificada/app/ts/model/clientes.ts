class Clientes {
    
    private _clientes : Array<Cliente>;

    constructor() {

        this._clientes = new Array<Cliente>();

    }

    inserir (cliente : Cliente): void {
        this._clientes.push(cliente);

    }

    remover(cpf: string): void {
 
            let indxRemocao = this._clientes.findIndex((cliente) => cliente.cpf === cpf);
            this._clientes.splice(indxRemocao, 1);
        }

    }

    pesquisar(cpf: string) {
        
        
        return this._clientes.filter(cliente => cliente.cpf === cpf);
        
    
        
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }


}