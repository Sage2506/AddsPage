import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className="cover__page">
            </div>

            <div className="poster__ad">
                <div className="content__poster">
                    <p className="txt__blue">
                        Haz que todo Tijuana vea tu negocio
                    </p>
                    <p>
                        Contratá el servicio de carteleras
                        digitales para publicitar tu negocio
                        en las zonas más concurridas de la región.
                    </p>

                    <div className="btn__cont-contrato">
                        <Link to="/contrato">
                            <button
                                className="btn btn-primary btn-home"
                            >Contratar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}