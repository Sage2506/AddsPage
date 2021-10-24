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
                <div>
                  <div>
                  </div>
                  <div>
                    <div>
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
            </div>
        </div>
    )
}