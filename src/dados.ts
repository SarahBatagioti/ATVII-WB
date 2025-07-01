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
  },
  {
    id: 3,
    nome: "Carlos Souza",
    nomeSocial: "Carlão",
    genero: "Masculino",
    cpf: { valor: "11122233344", dataEmissao: "1999-03-03" },
    rg: { valor: "RG111222", dataEmissao: "2000-03-03" },
    telefone: { ddd: "14", numero: "966666666" },
    produtos: [produtos[1], produtos[5]],
    servicos: [servicos[3], servicos[7]]
  },
  {
    id: 4,
    nome: "Ana Paula",
    nomeSocial: "Aninha",
    genero: "Feminino",
    cpf: { valor: "22233344455", dataEmissao: "1998-04-04" },
    rg: { valor: "RG333444", dataEmissao: "2001-04-04" },
    telefone: { ddd: "15", numero: "955555555" },
    produtos: [produtos[5], produtos[7]],
    servicos: [servicos[5], servicos[6]]
  },
  {
    id: 5,
    nome: "Lucas Pereira",
    nomeSocial: "Luquinhas",
    genero: "Masculino",
    cpf: { valor: "33344455566", dataEmissao: "1997-05-05" },
    rg: { valor: "RG444555", dataEmissao: "2002-05-05" },
    telefone: { ddd: "16", numero: "944444444" },
    produtos: [],
    servicos: [servicos[6], servicos[8]]
  },
  {
    id: 6,
    nome: "Juliana Souza",
    nomeSocial: "Ju",
    genero: "Feminino",
    cpf: { valor: "44455566677", dataEmissao: "2000-06-06" },
    rg: { valor: "RG555666", dataEmissao: "2001-06-06" },
    telefone: { ddd: "17", numero: "933333333" },
    produtos: [produtos[7], produtos[8]],
    servicos: [servicos[7], servicos[9]]
  },
  {
    id: 7,
    nome: "Eduardo Lima",
    nomeSocial: "Dudu",
    genero: "Masculino",
    cpf: { valor: "55566677788", dataEmissao: "2001-07-07" },
    rg: { valor: "RG666777", dataEmissao: "2002-07-07" },
    telefone: { ddd: "18", numero: "922222222" },
    produtos: [produtos[8], produtos[2]],
    servicos: [servicos[0], servicos[4]]
  },
  {
    id: 8,
    nome: "Carla Rodrigues",
    nomeSocial: "Carlita",
    genero: "Feminino",
    cpf: { valor: "66677788899", dataEmissao: "2002-08-08" },
    rg: { valor: "RG777888", dataEmissao: "2003-08-08" },
    telefone: { ddd: "19", numero: "911111111" },
    produtos: [produtos[2], produtos[3]],
    servicos: [servicos[1], servicos[8]]
  },
  {
    id: 9,
    nome: "Felipe Gomes",
    nomeSocial: "Fefê",
    genero: "Masculino",
    cpf: { valor: "77788899900", dataEmissao: "2003-09-09" },
    rg: { valor: "RG888999", dataEmissao: "2004-09-09" },
    telefone: { ddd: "20", numero: "900000000" },
    produtos: [],
    servicos: [servicos[3], servicos[6]]
  },
  {
    id: 10,
    nome: "Sofia Santos",
    nomeSocial: "Sofi",
    genero: "Feminino",
    cpf: { valor: "88899900011", dataEmissao: "2004-10-10" },
    rg: { valor: "RG999000", dataEmissao: "2005-10-10" },
    telefone: { ddd: "21", numero: "988888888" },
    produtos: [produtos[9], produtos[1]],
    servicos: [servicos[9], servicos[2]]
  },
  {
    id: 11,
    nome: "Ricardo Martins",
    nomeSocial: "Rick",
    genero: "Masculino",
    cpf: { valor: "99900011122", dataEmissao: "2005-11-11" },
    rg: { valor: "RG000111", dataEmissao: "2006-11-11" },
    telefone: { ddd: "22", numero: "977777777" },
    produtos: [produtos[0], produtos[4]],
    servicos: [servicos[5], servicos[7]]
  },
  {
    id: 12,
    nome: "Beatriz Almeida",
    nomeSocial: "Bia",
    genero: "Feminino",
    cpf: { valor: "10111213141", dataEmissao: "2006-12-12" },
    rg: { valor: "RG111112", dataEmissao: "2007-12-12" },
    telefone: { ddd: "23", numero: "966666666" },
    produtos: [produtos[3], produtos[7]],
    servicos: [servicos[6], servicos[1]]
  },
  {
    id: 13,
    nome: "Tiago Costa",
    nomeSocial: "Titi",
    genero: "Masculino",
    cpf: { valor: "12131415161", dataEmissao: "2007-01-13" },
    rg: { valor: "RG131415", dataEmissao: "2008-01-13" },
    telefone: { ddd: "24", numero: "955555555" },
    produtos: [produtos[6], produtos[9]],
    servicos: [servicos[2], servicos[0]]
  },
  {
    id: 14,
    nome: "Roberta Silva",
    nomeSocial: "Beta",
    genero: "Feminino",
    cpf: { valor: "14151617181", dataEmissao: "2008-02-14" },
    rg: { valor: "RG151617", dataEmissao: "2009-02-14" },
    telefone: { ddd: "25", numero: "944444444" },
    produtos: [produtos[4], produtos[0]],
    servicos: [servicos[1], servicos[5]]
  },
  {
    id: 15,
    nome: "Marcos Oliveira",
    nomeSocial: "Marcão",
    genero: "Masculino",
    cpf: { valor: "16171819101", dataEmissao: "2009-03-15" },
    rg: { valor: "RG171819", dataEmissao: "2010-03-15" },
    telefone: { ddd: "26", numero: "933333333" },
    produtos: [produtos[5], produtos[3]],
    servicos: [servicos[0], servicos[9]]
  },
  {
    id: 16,
    nome: "Fernanda Lima",
    nomeSocial: "Nanda",
    genero: "Feminino",
    cpf: { valor: "12378945601", dataEmissao: "1995-01-01" },
    rg: { valor: "RG987654", dataEmissao: "2000-01-01" },
    telefone: { ddd: "11", numero: "9191919191" },
    produtos: [produtos[1], produtos[4]],
    servicos: [servicos[0], servicos[2]]
  },
  {
    id: 17,
    nome: "Roberto Silva",
    nomeSocial: "Beto",
    genero: "Masculino",
    cpf: { valor: "22345678910", dataEmissao: "1994-02-15" },
    rg: { valor: "RG654321", dataEmissao: "1995-02-15" },
    telefone: { ddd: "12", numero: "9272727272" },
    produtos: [produtos[2], produtos[7]],
    servicos: [servicos[1], servicos[3]]
  },
  {
    id: 18,
    nome: "Larissa Costa",
    nomeSocial: "Lari",
    genero: "Feminino",
    cpf: { valor: "34567890123", dataEmissao: "1998-03-20" },
    rg: { valor: "RG123123", dataEmissao: "1999-03-20" },
    telefone: { ddd: "13", numero: "9383838383" },
    produtos: [produtos[3], produtos[6]],
    servicos: [servicos[4], servicos[6]]
  },
  {
    id: 19,
    nome: "Victor Santos",
    nomeSocial: "Vico",
    genero: "Masculino",
    cpf: { valor: "45678901234", dataEmissao: "1997-04-25" },
    rg: { valor: "RG543210", dataEmissao: "1998-04-25" },
    telefone: { ddd: "14", numero: "9494949494" },
    produtos: [produtos[0], produtos[9]],
    servicos: [servicos[2], servicos[7]]
  },
  {
    id: 20,
    nome: "Juliana Almeida",
    nomeSocial: "Juju",
    genero: "Feminino",
    cpf: { valor: "56789012345", dataEmissao: "1996-05-30" },
    rg: { valor: "RG654987", dataEmissao: "1997-05-30" },
    telefone: { ddd: "15", numero: "9606060606" },
    produtos: [produtos[5], produtos[8]],
    servicos: [servicos[3], servicos[5]]
  },
  {
    id: 21,
    nome: "Gustavo Martins",
    nomeSocial: "Gus",
    genero: "Masculino",
    cpf: { valor: "67890123456", dataEmissao: "1999-06-10" },
    rg: { valor: "RG876543", dataEmissao: "2000-06-10" },
    telefone: { ddd: "16", numero: "9717171717" },
    produtos: [produtos[1], produtos[4]],
    servicos: [servicos[4], servicos[6]]
  },
  {
    id: 22,
    nome: "Patrícia Oliveira",
    nomeSocial: "Pati",
    genero: "Feminino",
    cpf: { valor: "78901234567", dataEmissao: "1995-07-22" },
    rg: { valor: "RG123654", dataEmissao: "1996-07-22" },
    telefone: { ddd: "17", numero: "9828282828" },
    produtos: [produtos[2], produtos[6]],
    servicos: [servicos[5], servicos[9]]
  },
  {
    id: 23,
    nome: "Ricardo Lima",
    nomeSocial: "Rick",
    genero: "Masculino",
    cpf: { valor: "89012345678", dataEmissao: "1994-08-30" },
    rg: { valor: "RG543789", dataEmissao: "1995-08-30" },
    telefone: { ddd: "18", numero: "9939393939" },
    produtos: [produtos[3], produtos[7]],
    servicos: [servicos[0], servicos[8]]
  },
  {
    id: 24,
    nome: "Natália Ferreira",
    nomeSocial: "Nati",
    genero: "Feminino",
    cpf: { valor: "90123456789", dataEmissao: "2000-09-18" },
    rg: { valor: "RG654123", dataEmissao: "2001-09-18" },
    telefone: { ddd: "19", numero: "9040404040" },
    produtos: [produtos[8], produtos[9]],
    servicos: [servicos[1], servicos[2]]
  },
  {
    id: 25,
    nome: "André Souza",
    nomeSocial: "Dre",
    genero: "Masculino",
    cpf: { valor: "11223344556", dataEmissao: "1998-10-12" },
    rg: { valor: "RG876321", dataEmissao: "1999-10-12" },
    telefone: { ddd: "20", numero: "9151515151" },
    produtos: [produtos[0], produtos[5]],
    servicos: [servicos[3], servicos[7]]
  },
  {
    id: 26,
    nome: "Mariana Barbosa",
    nomeSocial: "Mari",
    genero: "Feminino",
    cpf: { valor: "22334455667", dataEmissao: "1997-11-14" },
    rg: { valor: "RG123765", dataEmissao: "1998-11-14" },
    telefone: { ddd: "21", numero: "9262626262" },
    produtos: [produtos[6], produtos[3]],
    servicos: [servicos[2], servicos[9]]
  },
  {
    id: 27,
    nome: "Felipe Rocha",
    nomeSocial: "Felipão",
    genero: "Masculino",
    cpf: { valor: "33445566778", dataEmissao: "1996-12-28" },
    rg: { valor: "RG987321", dataEmissao: "1997-12-28" },
    telefone: { ddd: "22", numero: "9373737373" },
    produtos: [produtos[2], produtos[8]],
    servicos: [servicos[0], servicos[6]]
  },
  {
    id: 28,
    nome: "Bruna Cardoso",
    nomeSocial: "Bru",
    genero: "Feminino",
    cpf: { valor: "44556677889", dataEmissao: "1999-01-05" },
    rg: { valor: "RG654852", dataEmissao: "2000-01-05" },
    telefone: { ddd: "23", numero: "9484848484" },
    produtos: [produtos[4], produtos[7]],
    servicos: [servicos[4], servicos[3]]
  },
  {
    id: 29,
    nome: "Felipe Pereira",
    nomeSocial: "Filipe",
    genero: "Masculino",
    cpf: { valor: "55667788990", dataEmissao: "1998-02-19" },
    rg: { valor: "RG852741", dataEmissao: "1999-02-19" },
    telefone: { ddd: "24", numero: "9595959595" },
    produtos: [produtos[1], produtos[3]],
    servicos: [servicos[1], servicos[8]]
  },
  {
    id: 30,
    nome: "Renata Costa",
    nomeSocial: "Rê",
    genero: "Feminino",
    cpf: { valor: "66778899001", dataEmissao: "1995-03-27" },
    rg: { valor: "RG741852", dataEmissao: "1996-03-27" },
    telefone: { ddd: "25", numero: "9706060606" },
    produtos: [produtos[6], produtos[9]],
    servicos: [servicos[2], servicos[5]]
  }
];

