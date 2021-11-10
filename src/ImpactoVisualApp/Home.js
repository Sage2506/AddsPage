import React from "react";
import { Link } from "react-router-dom";


/* <Link to="/contrato">
                            <button
                                className="btn btn-primary btn-home"
                            >Contratar
                            </button>
                        </Link>
                         */
export const Home = () => {
    return (
        <div>
            <div className="cover__page">
              <div className="grid_double">
              <Link to="/contrato">
                            <button
                                className="btn btn-primary btn-home contratar__Web"
                            >Contratar
                            </button>
                        </Link>
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