import React from 'react';
import '../styles/Home.sass';
import ScrollToTopButton from './ScrollToTopButton';

import githubImg from '../assets/github.png';
import instagramImg from '../assets/instagram.png';
import youtubeImg from '../assets/youtube.png';
import whatsappImg from '../assets/whatsapp.png';
import linkedinImg from '../assets/linkedin.png';
import profileImg from '../assets/profile.png';

function Home() {
    return (
        <main className="apresentacao">
            <section className="apresentacao__conteudo">
                <h1 className="apresentacao__conteudo__titulo">
                    Eleve seu negócio digital a outro nível<strong className="titulo-destaque"> com um Sistema Web de qualidade!</strong>
                </h1>
                <p className="apresentacao__conteudo__texto">
                    Olá! Sou Felipe Moreira, desenvolvedor Fullstack especializado. Ajudo pequenos negócios a colocarem em prática boas ideias. Vamos conversar?
                </p>
                <div className="apresentacao__links">
                    <h2 className="apresentacao__links__subtitulo">Acesse minhas redes</h2>
                    <a className="apresentacao__links__navegacao" href="https://github.com/LipeLacross">
                        <img src={githubImg} alt="GitHub" />
                        GitHub
                    </a>
                    <a className="apresentacao__links__navegacao" href="https://www.instagram.com/lipelacross/">
                        <img src={instagramImg} alt="Instagram" />
                        Instagram
                    </a>
                    <a className="apresentacao__links__navegacao" href="https://www.youtube.com/@DevLipeLacross">
                        <img src={youtubeImg} alt="YouTube" />
                        YouTube
                    </a>
                    <a className="apresentacao__links__navegacao" href="https://wa.me/74981256120">
                        <img src={whatsappImg} alt="WhatsApp" />
                        WhatsApp
                    </a>
                    <a className="apresentacao__links__navegacao" href="https://www.linkedin.com/in/lipelacross-developer">
                        <img src={linkedinImg} alt="LinkedIn" />
                        LinkedIn
                    </a>
                </div>
            </section>
            <ScrollToTopButton />
            <img className="apresentacao__imagem" src={profileImg} alt="Foto de Felipe" />
        </main>
    );
}

export default Home;
