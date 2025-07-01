import React, { Component, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "../../../styles/global.css";

interface CPF {
    valor: string;
    dataEmissao: string;
}

interface RG {
    valor: string;
    dataEmissao: string;
}

interface Telefone {
    ddd: string;
    numero: string;
}

interface Produto {
    nome: string;
    preco: number;
}

interface Servico {
    nome: string;
    preco: number;
}

interface ClienteResponse {
    nome: string;
    nomeSocial: string;
    genero: string;
    cpf: CPF;
    rg: RG[];
    telefone: Telefone[];
    produto: Produto[];
    servico: Servico[];
}

const clientesFicticios: ClienteResponse[] = [
    {
        nome: "Sarah Oliveira",
        nomeSocial: "Sarah",
        genero: "Feminino",
        cpf: { valor: "123.321.456-99", dataEmissao: "2017-07-21" },
        rg: [{ valor: "MG-23.456.789", dataEmissao: "2017-07-18" }],
        telefone: [{ ddd: "11", numero: "981234567" }],
        produto: [{ nome: "Produto D", preco: 130.0 }],
        servico: [{ nome: "Serviço A", preco: 60.0 }]
    },
    {
        nome: "Alinne Costa",
        nomeSocial: "Alinne",
        genero: "Feminino",
        cpf: { valor: "987.654.111-00", dataEmissao: "2019-02-12" },
        rg: [{ valor: "SP-12.345.678", dataEmissao: "2019-02-08" }],
        telefone: [{ ddd: "21", numero: "992345678" }],
        produto: [{ nome: "Produto E", preco: 250.0 }],
        servico: [{ nome: "Serviço B", preco: 100.0 }]
    },
    {
        nome: "Valdirene Silva",
        nomeSocial: "Valdirene",
        genero: "Feminino",
        cpf: { valor: "111.222.333-44", dataEmissao: "2020-01-15" },
        rg: [{ valor: "SP-32.654.876", dataEmissao: "2020-01-10" }],
        telefone: [{ ddd: "22", numero: "981234567" }],
        produto: [{ nome: "Produto G", preco: 90.0 }],
        servico: [{ nome: "Serviço D", preco: 55.0 }]
    },
    {
        nome: "Daiene Santos",
        nomeSocial: "Daiene",
        genero: "Feminino",
        cpf: { valor: "555.666.777-88", dataEmissao: "2022-03-30" },
        rg: [{ valor: "RJ-76.543.210", dataEmissao: "2022-03-25" }],
        telefone: [{ ddd: "41", numero: "999876543" }],
        produto: [{ nome: "Produto I", preco: 120.0 }],
        servico: [{ nome: "Serviço F", preco: 90.0 }]
    },
    {
        nome: "Stella Martins",
        nomeSocial: "Stella",
        genero: "Feminino",
        cpf: { valor: "444.555.666-77", dataEmissao: "2023-01-19" },
        rg: [{ valor: "RJ-98.765.432", dataEmissao: "2023-01-14" }],
        telefone: [{ ddd: "51", numero: "998123456" }],
        produto: [{ nome: "Produto K", preco: 190.0 }],
        servico: [{ nome: "Serviço H", preco: 170.0 }]
    },
    {
        nome: "Vinah Costa",
        nomeSocial: "Vinah",
        genero: "Feminino",
        cpf: { valor: "222.333.444-55", dataEmissao: "2022-11-14" },
        rg: [{ valor: "SP-54.321.654", dataEmissao: "2022-11-09" }],
        telefone: [{ ddd: "61", numero: "912345678" }],
        produto: [{ nome: "Produto M", preco: 80.0 }],
        servico: [{ nome: "Serviço J", preco: 50.0 }]
    }
];

interface Props {
    tema: string;
}

interface State {
    cpfBusca: string;
    resultado: ClienteResponse | null;
    erro: string;
}

class BuscarClientePorCPF extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            cpfBusca: "",
            resultado: null,
            erro: ""
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ cpfBusca: event.target.value, erro: "", resultado: null });
    };

    buscarCliente = () => {
        const cpfLimpo = this.state.cpfBusca.replace(/[^\d]/g, "");
        const cliente = clientesFicticios.find(cliente => cliente.cpf.valor === cpfLimpo);

        if (cliente) {
            this.setState({ resultado: cliente });
        } else {
            this.setState({ erro: "Cliente não encontrado" });
        }
    };

    render() {
        const { tema } = this.props;
        const { cpfBusca, resultado, erro } = this.state;

        return (
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="z-depth-2" style={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "30px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                    <h5 className="pink-text text-lighten-1 center-align">BUSCAR CLIENTE POR CPF</h5>
                    <div className="input-field">
                        <input
                            type="text"
                            value={cpfBusca}
                            onChange={this.handleChange}
                            placeholder="Digite o CPF do cliente"
                            className="validate"
                        />
                    </div>
                    <div className="center-align">
                        <button className={`btn ${tema}`} onClick={this.buscarCliente}>
                            Buscar
                        </button>
                    </div>
                    {erro && <p className="center-align red-text" style={{ marginTop: '1.5rem' }}>{erro}</p>}
                    {resultado && (
                        <div className="card" style={{ marginTop: '1.5rem' }}>
                            <div className="card-content pink-text text-lighten-1">
                                <span className="card-title">{resultado.nome}</span>
                                <p><strong>Nome Social:</strong> {resultado.nomeSocial}</p>
                                <p><strong>Gênero:</strong> {resultado.genero}</p>
                                <p><strong>CPF:</strong> {resultado.cpf.valor}</p>
                                <p><strong>Data de Emissão:</strong> {new Date(resultado.cpf.dataEmissao).toLocaleDateString()}</p>
                                <div className="divider" style={{ margin: "10px 0" }}></div>
                                <p><strong>RG(s):</strong></p>
                                <ul>
                                    {resultado.rg.map((doc, idx) => (
                                        <li key={idx}>{doc.valor} - {new Date(doc.dataEmissao).toLocaleDateString()}</li>
                                    ))}
                                </ul>
                                <p><strong>Telefones:</strong></p>
                                <ul>
                                    {resultado.telefone.map((tel, idx) => (
                                        <li key={idx}>({tel.ddd}) {tel.numero}</li>
                                    ))}
                                </ul>
                                <p><strong>Produtos Consumidos:</strong></p>
                                <ul>
                                    {resultado.produto.map((prod, idx) => (
                                        <li key={idx}>{prod.nome} - R$ {prod.preco.toFixed(2)}</li>
                                    ))}
                                </ul>
                                <p><strong>Serviços Consumidos:</strong></p>
                                <ul>
                                    {resultado.servico.map((serv, idx) => (
                                        <li key={idx}>{serv.nome} - R$ {serv.preco.toFixed(2)}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BuscarClientePorCPF;
