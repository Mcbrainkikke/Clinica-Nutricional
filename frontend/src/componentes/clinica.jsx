import { Navigate } from "react-router-dom";
import { useState } from "react";



export default function Clinica() {

    return (
        <div>
            <div className="container ">
                <div className="row">
                    <h2>Sobre Nosotros</h2>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 p-5 my-3 border navbar-dark text-white">
                        <p align='left'>Bienvenido a nuestra clínica nutricional, donde brindamos un enfoque integral y personalizado a la salud y el bienestar de nuestros pacientes.
                            Nuestra clínica cuenta con un equipo de profesionales altamente capacitados y experimentados, incluyendo nutricionistas y dietistas registrados, quienes trabajan juntos para brindar a nuestros pacientes un plan de alimentación y estilo de vida que se adapte a sus necesidades individuales.
                        </p>
                        <p align='left'>
                            Ofrecemos una amplia variedad de servicios, desde evaluaciones nutricionales y planes de alimentación personalizados, hasta programas de pérdida de peso y tratamientos para condiciones médicas específicas como diabetes, enfermedades cardíacas y trastornos alimentarios.
                        </p>

                        <p align='left'>
                            Además, ofrecemos sesiones de seguimiento regulares para asegurarnos de que nuestros pacientes estén cumpliendo sus objetivos y haciendo los cambios necesarios en su plan de alimentación y estilo de vida.
                            En nuestra clínica, entendemos que cada persona es única y que la nutrición y la salud no son una "talla única".
                        </p>
                        <p align='left'>
                            Es por eso que nos esforzamos por brindar un enfoque personalizado y colaborativo en nuestra atención médica.
                            Si está buscando mejorar su salud y bienestar a través de una alimentación adecuada y un estilo de vida saludable, no dude en ponerse en contacto con nosotros para programar una consulta. Estamos ansiosos de ayudarlo a alcanzar sus metas de salud.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}