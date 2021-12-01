import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className="cover__page">
                <div className="grid_double">

                    <div style={{ textAlign: "center" }} >
                        <div style={{ flex: 7 }}></div>
                        <h4 className="desktop_info">
                            Contrata una pauta en medios <br /> exteriores a la medida de tu marca
                        </h4>
                        <div style={{ flex: 1 }} >
                            <Link to="/contrato" style={{ maxWidth: '150px' }}>
                                <button
                                    className="btn btn-primary btn-home contratar__Web"
                                >Contratar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", paddingTop:'30px' }} >
                    <h4 className="mobile_info">
                        Contrata una pauta en medios exteriores a la medida de tu marca
                    </h4>

                </div>
                <Link to="/contrato" className="contratar__mobil__a">
                    <button
                        className="btn btn-primary btn-home contratar__mobil"
                    >Contratar
                    </button>
                </Link>
            </div>

        </div>
    )
}