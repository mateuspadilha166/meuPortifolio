import React from 'react';
import { Link } from "react-router-dom";
import './sobre.css';
import gogeta from './gogeta.jpg'; 

function Sobre() {
    return (
        <div className="sobre-container">
            <img className="perfil" src={gogeta} alt="Não tenho foto minha" />
            <h2>Sobre EU</h2>
            <p>
                Estou cursando Análise e Desenvolvimento de Sistemas no Senac Jaraguá do Sul.<br />
                Confira meus <Link to="/Projetos" className="link-projetos">Projetos</Link>!
            </p>
        </div>
    );
}

export default Sobre;
