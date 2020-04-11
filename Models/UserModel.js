
const user = [
    {id: 1, nome: 'Roberto Lima', email: 'roberto@teste.com.br', cpf: '12312312345', telefone: '11988776655', nascimento: '1980-10-10'},
    {id: 2, nome: 'Ulisses Furtado', email: 'ulisses@teste.com.br', cpf: '23423423456', telefone: '1977665544', nascimento: '1982-10-10'},
    {id: 3, nome: 'André Silva', email: 'andre@teste.com.br', cpf: '34534534567', telefone: '11966554433', nascimento: '1984-10-10'},
    {id: 4, nome: 'João Souza', email: 'joao@teste.com.br', cpf: '45645645678', telefone: '11955443322', nascimento: '1986-10-10'},
    {id: 5, nome: 'Ana Trindade', email: 'ana@teste.com.br', cpf: '56756756789', telefone: '1944332211', nascimento: '1988-10-10'},
]

const getUser = async () => {

    // FUNCAO DO MODEL É RECEBER OS DADOS DO BANCO DE DADOS E RETORNAR PARA O CONTROLLER 
    return await user
}

const getUserById = async (id) => {

    // FUNCAO DO MODEL É RECEBER OS DADOS DO BANCO DE DADOS E RETORNAR PARA O CONTROLLER 
    const userSelected = user.map(item => item.id === id ?  item : null).filter(x => x)
    return await userSelected;
}

module.exports = {
    getUser,
    getUserById
}