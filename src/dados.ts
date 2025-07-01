// dados.ts
export const produtos = [
  { id: 1, nome: "Shampoo", preco: 29.9 },
  { id: 2, nome: "Condicionador", preco: 35.5 },
  { id: 3, nome: "Pomada", preco: 22.0 },
  { id: 4, nome: "Creme corporal", preco: 40.0 },
  { id: 5, nome: "Gel de cabelo", preco: 18.0 },
  { id: 6, nome: "Máscara capilar", preco: 50.0 },
  { id: 7, nome: "Esfoliante facial", preco: 45.0 },
  { id: 8, nome: "Hidratante facial", preco: 60.0 },
  { id: 9, nome: "Pó compacto", preco: 80.0 },
  { id: 10, nome: "Rímel", preco: 45.0 }
];

export const servicos = [
  { id: 1, nome: "Corte de cabelo", preco: 45.0 },
  { id: 2, nome: "Barba", preco: 25.0 },
  { id: 3, nome: "Escova", preco: 60.0 },
  { id: 4, nome: "Manicure", preco: 35.0 },
  { id: 5, nome: "Pedicure", preco: 40.0 },
  { id: 6, nome: "Limpeza de pele", preco: 70.0 },
  { id: 7, nome: "Design de sobrancelhas", preco: 50.0 }
];

export const clientes = [
  {
    id: 1,
    nome: "João da Silva",
    nomeSocial: "Joãozinho",
    genero: "Masculino",
    cpf: { valor: "12345678901", dataEmissao: "2000-01-01" },
    rg: { valor: "RG123456", dataEmissao: "2001-01-01" },
    telefone: { ddd: "12", numero: "988888888" },
    produtos: [produtos[0], produtos[2]],
    servicos: [servicos[0], servicos[1]]
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    nomeSocial: "Mari",
    genero: "Feminino",
    cpf: { valor: "98765432100", dataEmissao: "2001-02-02" },
    rg: { valor: "RG654321", dataEmissao: "2002-02-02" },
    telefone: { ddd: "13", numero: "977777777" },
    produtos: [produtos[3], produtos[6]],
    servicos: [servicos[2], servicos[4]]
  }
];
