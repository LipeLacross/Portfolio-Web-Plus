import React from 'react';
import '../styles/About.sass';
import profileImage from '../assets/Photo_Profile.png';
import ScrollToTopButton from './ScrollToTopButton';

function About() {
    return (
        <main className="sobre">
            <section className="sobre__conteudo">
                <h1 className="sobre__titulo">Sobre mim</h1>
                <p className="sobre__texto">
                    Olá! Meu nome é <span className="texto-destaque">Felipe Moreira</span> e sou um <span className="texto-destaque">Fullstack Developer</span> com experiência em <span className="texto-destaque">JavaScript</span> e <span className="texto-destaque">TypeScript</span>. Trabalho com uma variedade de tecnologias, incluindo <span className="texto-destaque">Node.js</span>, <span className="texto-destaque">Vue.js</span>, <span className="texto-destaque">React</span>, <span className="texto-destaque">Next.js</span>, e <span className="texto-destaque">Express.js</span>. Atualmente, estou cursando Engenharia da Computação na Universidade Federal Rural de Pernambuco e continuo a expandir meu conhecimento nessas áreas.
                </p>
                <p className="sobre__texto">
                    Estou em busca de oportunidades para aplicar minhas habilidades em projetos desafiadores. Embora eu ainda não tenha experiência profissional formal, meu comprometimento com o aprendizado e minha paixão pela tecnologia me motivam a buscar constantemente novos conhecimentos e a enfrentar desafios que me ajudem a crescer como profissional.
                </p>
            </section>
            <img className="sobre__imagem" src={profileImage} alt="Foto de Felipe" />
            <ScrollToTopButton />
        </main>
    );
}

export default About;
