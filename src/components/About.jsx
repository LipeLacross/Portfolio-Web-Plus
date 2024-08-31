import React from 'react';
import '../styles/About.sass';
import profileImage from '../assets/profile.png';
import ScrollToTopButton from './ScrollToTopButton';

function About() {
    return (
        <main className="apresentacao">
            <section className="apresentacao__conteudo">
                <h1 className="apresentacao__conteudo__titulo">Sobre mim</h1>
                <p className="apresentacao__conteudo__texto">
                    Olá! Meu nome é <span className="apresentacao_conteudo_texto_destaque">Felipe Moreira</span> e sou um <span className="apresentacao_conteudo_texto_destaque">Fullstack Developer</span> com experiência em <span className="apresentacao_conteudo_texto_destaque">JavaScript</span> e <span className="apresentacao_conteudo_texto_destaque">TypeScript</span>. Trabalho com uma variedade de tecnologias, incluindo <span className="apresentacao_conteudo_texto_destaque">Node.js</span>, <span className="apresentacao_conteudo_texto_destaque">Vue.js</span>, <span className="apresentacao_conteudo_texto_destaque">React</span>, <span className="apresentacao_conteudo_texto_destaque">Angular</span>, <span className="apresentacao_conteudo_texto_destaque">Next.js</span>, e <span className="apresentacao_conteudo_texto_destaque">Express.js</span>. Atualmente, estou cursando Engenharia da Computação na Universidade Federal Rural de Pernambuco e continuo a expandir meu conhecimento nessas áreas.
                </p>
                <p className="apresentacao__conteudo__texto">
                    Estou em busca de oportunidades para aplicar minhas habilidades em projetos desafiadores. Embora eu ainda não tenha experiência profissional formal, meu comprometimento com o aprendizado e minha paixão pela tecnologia me motivam a buscar constantemente novos conhecimentos e a enfrentar desafios que me ajudem a crescer como profissional.
                </p>
            </section>
            <ScrollToTopButton />
            <img className="apresentacao__imagem" src={profileImage} alt="Foto de Felipe" />
        </main>
    );
}

export default About;
