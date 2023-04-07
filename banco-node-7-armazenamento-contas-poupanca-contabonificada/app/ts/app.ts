let contaController = new ContaController();

const conta1 = new Conta('1');
const cliente1 = new Cliente('João', '111.111.111-11', conta1);

const conta2 = new Conta('2');
const cliente2 = new Cliente('Maria', '222.222.222-22', conta2);

const conta3 = new Conta('3');
const cliente3 = new Cliente('Pedro', '333.333.333-33', conta3);

const conta4 = new Conta('4');
const cliente4 = new Cliente('Ana', '444.444.444-44', conta4);

const conta5 = new Conta('5');
const cliente5 = new Cliente('José', '555.555.555-55', conta5);

const clientes = new Clientes;

clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);
clientes.inserir(cliente4);
clientes.inserir(cliente5);

console.log(clientes.listar);

console.log(clientes.pesquisar('111.111.111-11'))

clientes.remover('555.555.555-55');

console.log(clientes.listar);


// contaController.listar();

// const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);

// console.log('Conta: ' + c1.saldo);

// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);

// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);
