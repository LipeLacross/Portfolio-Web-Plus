import React from 'react';
import '../styles/Portfolio.sass';
import ScrollToTopButton from './ScrollToTopButton';

import imgLipeLacross from '../assets/redes-sociais-lipelacross.jpeg';
import imgCertificados1 from '../assets/Sistema de Geração de Certificados 1.png';
import imgSuatmb from '../assets/suatmb.jpeg';
import imgDecodificaTudo from '../assets/decodificatudo.jpeg';
import imgBiturytech from '../assets/biturytech.jpeg';
import imgBolosDaNilda from '../assets/bolosdanilda.jpeg';
import imgBatuqueWeb from '../assets/batuque-web.png'; // Supondo que você tenha uma imagem para Batuque-Web

function Portfolio() {
    const projetos = [
        {
            titulo: "LipeLacross - Redes Sociais",
            imagem: imgLipeLacross,
            descricao: "Uma página feita com Vue para disponibilizar links de redes sociais.",
            funcionalidades: [
                "Visualização de Perfil: Exibe a foto de perfil, nome e profissão.",
                "Links de Redes Sociais: Fornece links para diversas redes sociais, como Instagram, LinkedIn, YouTube e GitHub.",
                "Animações: Inclui animações suaves para elementos ao passar o mouse e durante a renderização inicial."
            ],
            link: "https://github.com/LipeLacross/Links-Social-Media",
            site: "https://lipelacrosslinks.netlify.app"
        },
        {
            titulo: "Sistema de Geração de Certificados",
            imagem: imgCertificados1,
            descricao: "Um projeto desenvolvido com Django e SQLite para controle de eventos e geração de certificados.",
            funcionalidades: [
                "Controle de Eventos: Gerenciamento de eventos com informações detalhadas.",
                "Geração de Certificados: Criação e armazenamento de certificados personalizados em formato PNG.",
                "Busca de Certificados: Funcionalidade para procurar certificados por e-mail.",
                "Visualização de Certificados: Exibição de certificados gerados para os participantes e administradores."
            ],
            link: "https://github.com/LipeLacross/PyStackWeek-6.0",
            site: "https://certificados.com (Hospedagem não disponível)"
        },
        {
            titulo: "SuaTMB",
            imagem: imgSuatmb,
            descricao: "O SuaTmb é um projeto de site para calcular a Taxa de Metabolismo Basal (TMB) e ajudar no planejamento de dietas.",
            funcionalidades: [
                "Cálculo de TMB: Calcula a Taxa de Metabolismo Basal com base em dados como idade, peso, altura e gênero.",
                "Planejamento de Dieta: Oferece recomendações de macronutrientes com base nas necessidades diárias e objetivos de dieta.",
                "Interface Amigável: Formulários e resultados apresentados de maneira clara e intuitiva.",
                "Responsividade: Design adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis."
            ],
            link: "https://github.com/LipeLacross/SuaTmb-Website",
            site: "https://suatmb.netlify.app"
        },
        {
            titulo: "DecodificaTudo",
            imagem: imgDecodificaTudo,
            descricao: "Desafio de decodificador web requisitado pelo programa ONE da Oracle.",
            funcionalidades: [
                "Decodificador de texto com opções de criptografia e descriptografia.",
                "Interface responsiva e moderna com animações.",
                "Utilização de Bootstrap e HTML5 Boilerplate para estruturação e estilo."
            ],
            link: "https://github.com/LipeLacross/Decoder-Challenge",
            site: "https://decodificatudo.netlify.app"
        },
        {
            titulo: "Biturytech",
            imagem: imgBiturytech,
            descricao: "Este projeto é um site para a BituryTech, uma startup de tecnologia que oferece soluções inovadoras e avançadas.",
            funcionalidades: [
                "Navegação: Barra de navegação fixa com links para as principais seções do site.",
                "Seção 'Sobre': Apresenta o aplicativo ChronosGram com um vídeo demonstrativo e descrição das suas funcionalidades.",
                "Seção Destaque: Enfatiza a mensagem principal 'Nunca mais reprove sem estudar!' com design atraente.",
                "Seção 'Home': Detalha a BituryTech, incluindo a missão da empresa e imagem do aplicativo.",
                "Seção 'Produtos': Oferece um formulário para captura de e-mails e links para redes sociais.",
                "Rodapé: Informações sobre o desenvolvedor do site."
            ],
            link: "https://github.com/LipeLacross/Website-Biturytech",
            site: "https://biturytech.netlify.app"
        },
        {
            titulo: "Bolos da Nilda",
            imagem: imgBolosDaNilda,
            descricao: "A 'Bolos da Dona Nilda' é um site dedicado à venda de bolos e sucos artesanais.",
            funcionalidades: [
                "Exibição de Produtos: Mostra produtos e categorias com imagens e preços.",
                "Carrinho de Compras: Permite adicionar produtos ao carrinho e calcular o total.",
                "Responsividade: Interface adaptada para diferentes dispositivos e tamanhos de tela.",
                "Interface Intuitiva: Navegação simples e direta para melhorar a experiência do usuário."
            ],
            link: "https://github.com/LipeLacross/Website-BolosDaNilda",
            site: "https://bolosdanilda.netlify.app"
        },
        {
            titulo: "Batuque-Web",
            imagem: imgBatuqueWeb,
            descricao: "Batuque-Web é o site de demonstração para o projeto Batuque, que exibe uma série de seções e funcionalidades para uma bateria de realidade aumentada.",
            funcionalidades: [
                "Cabeçalho Fixo: Um cabeçalho fixo com um menu de navegação e botões de contato e bug report.",
                "Responsividade: Design responsivo que se adapta a diferentes tamanhos de tela.",
                "Interatividade: Menu de navegação interativo adaptável para dispositivos menores.",
                "Animações e Transições: Animações sutis e transições suaves para uma melhor experiência.",
                "Efeitos de Rolagem Animados: Utilização da biblioteca AOS para animações durante a rolagem da página.",
                "Integração de Ícones: Ícones para enriquecer a interface e facilitar a navegação."
            ],
            link: "https://github.com/LipeLacross/Batuque-Web",
            site: "https://batuqueofc.netlify.app"
        },
    ];

    return (
        <main className="portfolio">
            <section className="portfolio__conteudo">
                <div className="portfolio__sobre">
                    <h1 className="portfolio__titulo">Meus Projetos</h1>
                    <p className="portfolio__texto">
                        Aqui estão alguns dos projetos em que trabalhei.
                    </p>
                    <h2 className="portfolio__destaque-titulo">Projetos em Destaque</h2>
                </div>
                <div className="portfolio__projetos">
                    <div className="portfolio__lista-projetos">
                        {projetos.map((projeto) => (
                            <div className="projeto" key={projeto.titulo}>
                                <h3 className="projeto__titulo">{projeto.titulo}</h3>
                                <img className="projeto__imagem" src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} />
                                <p className="projeto__descricao">{projeto.descricao}</p>
                                <ul className="projeto__funcionalidades">
                                    {projeto.funcionalidades.map((funcionalidade, i) => (
                                        <li key={i}>{funcionalidade}</li>
                                    ))}
                                </ul>
                                <div className="projeto__links">
                                    <a className="projeto__link" href={projeto.link} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i> Ver no GitHub
                                    </a>
                                    {projeto.site && (
                                        <a className="projeto__link" href={projeto.site} target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i> Visitar Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ScrollToTopButton />
        </main>
    );
}

export default Portfolio;
