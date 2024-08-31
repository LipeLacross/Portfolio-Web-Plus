import React from 'react';
import '../styles/Portfolio.sass';
import ScrollToTopButton from './ScrollToTopButton';

import imgLipeLacross from '../assets/redes-sociais-lipelacross.jpeg';
import imgCertificados1 from '../assets/Sistema de Geração de Certificados 1.png';
import imgCertificados2 from '../assets/Sistema de Geração de Certificados 2.png';
import imgCertificados3 from '../assets/Sistema de Geração de Certificados 3.png';
import imgCertificados4 from '../assets/Sistema de Geração de Certificados 4.png';
import imgSuatmb from '../assets/suatmb.jpeg';
import imgDecodificaTudo from '../assets/decodificatudo.jpeg';
import imgBiturytech from '../assets/biturytech.jpeg';
import imgBolosDaNilda from '../assets/bolosdanilda.jpeg';


function Portfolio() {
    const projetos = [
        {
            titulo: "LipeLacross - Redes Sociais",
            imagem: imgLipeLacross,
            descricao: "Uma página feita com Vue para disponibilizar links de redes sociais. Este projeto visa fornecer um local centralizado onde usuários podem acessar facilmente os links para os perfis de redes sociais.",
            funcionalidades: [
                "Visualização de Perfil: Exibe a foto de perfil, nome e profissão.",
                "Links de Redes Sociais: Fornece links para diversas redes sociais, como Instagram, LinkedIn, YouTube e GitHub.",
                "Animações: Inclui animações suaves para elementos ao passar o mouse e durante a renderização inicial."
            ],
            link: "https://github.com/LipeLacross/Links-Social-Media"
        },
        {
            titulo: "Sistema de Geração de Certificados",
            imagem: imgCertificados1, imgCertificados2, imgCertificados3, imgCertificados4,
            descricao: "Um projeto desenvolvido com Django e SQLite para controle de eventos e geração de certificados. Este sistema é ideal para eventos onde a emissão de certificados para participantes é necessária.",
            funcionalidades: [
                "Controle de Eventos: Gerenciamento de eventos com informações detalhadas.",
                "Geração de Certificados: Criação e armazenamento de certificados personalizados em formato PNG.",
                "Busca de Certificados: Funcionalidade para procurar certificados por e-mail.",
                "Visualização de Certificados: Exibição de certificados gerados para os participantes e administradores."
            ],
            link: "https://github.com/LipeLacross/PyStackWeek-6.0"
        },
        // Continue adicionando os outros projetos
        {
            titulo: "SuatMB",
            imagem: imgSuatmb,
            descricao: "O SuaTmb é um projeto de site para calcular a Taxa de Metabolismo Basal (TMB) e ajudar no planejamento de dietas. O site permite aos usuários inserir dados pessoais e informações sobre seu nível de atividade física para calcular suas necessidades calóricas diárias e recomendações nutricionais.",
            funcionalidades: [
                "Cálculo de TMB: Calcula a Taxa de Metabolismo Basal com base em dados como idade, peso, altura e gênero.",
                "Planejamento de Dieta: Oferece recomendações de macronutrientes com base nas necessidades diárias e objetivos de dieta.",
                "Interface Amigável: Formulários e resultados apresentados de maneira clara e intuitiva.",
                "Responsividade: Design adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis."
            ],
            link: "https://github.com/LipeLacross/SuaTmb-Website"
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
            link: "https://github.com/LipeLacross/Decoder-Challenge"
        },
        {
            titulo: "Biturytech",
            imagem: imgBiturytech,
            descricao: "Este projeto é um site para a BituryTech, uma startup de tecnologia que oferece soluções inovadoras e avançadas. Desenvolvido com Next.js e Tailwind CSS, o site proporciona uma experiência moderna e responsiva.",
            funcionalidades: [
                "Navegação: Barra de navegação fixa com links para as principais seções do site.",
                "Seção 'Sobre': Apresenta o aplicativo ChronosGram com um vídeo demonstrativo e descrição das suas funcionalidades.",
                "Seção Destaque: Enfatiza a mensagem principal 'Nunca mais reprove sem estudar!' com design atraente.",
                "Seção 'Home': Detalha a BituryTech, incluindo a missão da empresa e imagem do aplicativo.",
                "Seção 'Produtos': Oferece um formulário para captura de e-mails e links para redes sociais.",
                "Rodapé: Informações sobre o desenvolvedor do site."
            ],
            link: "https://github.com/LipeLacross/Website-Biturytech"
        },
        {
            titulo: "Bolos da Nilda",
            imagem: imgBolosDaNilda,
            descricao: "A 'Bolos da Dona Nilda' é um site dedicado à venda de bolos e sucos artesanais. O site apresenta uma interface amigável com uma estrutura simples para navegar pelos produtos, adicionar itens ao carrinho e visualizar o total.",
            funcionalidades: [
                "Exibição de Produtos: Mostra produtos e categorias com imagens e preços.",
                "Carrinho de Compras: Permite adicionar produtos ao carrinho e calcular o total.",
                "Responsividade: Interface adaptada para diferentes dispositivos e tamanhos de tela.",
                "Interface Intuitiva: Navegação simples e direta para melhorar a experiência do usuário."
            ],
            link: "https://github.com/LipeLacross/Website-BolosDaNilda"
        },
    ];

    return (
        <main className="apresentacao">
            <section className="apresentacao__conteudo">
                <h1 className="apresentacao__conteudo__titulo">Meus Projetos</h1>
                <p className="apresentacao__conteudo__texto">
                    Aqui estão alguns dos projetos em que trabalhei. Eles abrangem uma variedade de tecnologias e abordagens, refletindo minha experiência e aprendizado.
                </p>
                <h2 className="apresentacao__conteudo__titulo">Projetos em Destaque</h2>
                <div className="apresentacao__projetos">
                    {projetos.map((projeto, index) => (
                        <div className="projeto" key={index}>
                            <h3 className="projeto__titulo">{projeto.titulo}</h3>
                            <img className="projeto__imagem" src={projeto.imagem} alt={projeto.titulo} />
                            <p className="projeto__descricao">{projeto.descricao}</p>
                            <ul className="projeto__funcionalidades">
                                {projeto.funcionalidades.map((funcionalidade, i) => (
                                    <li key={i}>{funcionalidade}</li>
                                ))}
                            </ul>
                            <a className="projeto__link" href={projeto.link} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <ScrollToTopButton />
        </main>
    );
}

export default Portfolio;
