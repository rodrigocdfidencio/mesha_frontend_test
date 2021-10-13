import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
    <div class="container">
        <div class="row">
        <div class="col-6 pr- 5about-project">
            <h2>Weather Music App</h2>
            <p class="text-white-50">
            Teste para desenvolvedor Front-End Júnior da empresa Mesha,
            desenvolvido por Rodrigo Fidencio utilizando a React e Hooks, consumindo dados de clima da Open Weather Map e
            de músicas do Shazam.
            </p>
        </div>
        <div class="col links">
            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <ul class="m-0 p-0">
            <li>
                <a target="_blank" href="https://github.com/rodrigocdfidencio"
                >Github Pessoal</a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/rodrigocdfidencio/mesha_frontend_test"
                >Github do Projeto</a>
            </li>
            <li>
                <a
                target="_blank"
                href="https://www.linkedin.com/in/rodrigocdfidencio/"
                >LinkedIn</a>
            </li>
            <li>
                <a target="_blank" href="https://openweathermap.org/"
                >Site da Open Weather Map</a>
            </li>
            <li>
                <a
                target="_blank"
                href="https://rapidapi.com/apidojo/api/shazam/"
                >Api do Shazam no RapidApi</a
                >
            </li>
            </ul>
        </div>
        <div class="col contact">
            <h4 class="mt-lg-0 mt-sm-4">Contato</h4>
            <p>rodrigo.fidencio@gmail.com</p>
        </div>
        </div>
    </div>
    </div>
    );
}

export default Footer;