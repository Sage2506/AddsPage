import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Home } from '../ImpactoVisualApp/Home';
import { FormDataClient } from '../ImpactoVisualApp/FormDataClient';
import { PlanMensual } from "../ImpactoVisualApp/PlanMensual";
import { PlanPorDia } from "../ImpactoVisualApp/PlanPorDia";
import UploadFile from "../ImpactoVisualApp/UploadFile";
import PreView from "../ImpactoVisualApp/PreView";
import { BuyConfirm } from "../ImpactoVisualApp/BuyConfirm";
import { TicketMonth } from "../ImpactoVisualApp/TicketMonth";
import { TicketDay } from "../ImpactoVisualApp/TicketDay";
import { Ending } from "../ImpactoVisualApp/Ending";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contrato" component={FormDataClient} />
                    <Route exact path="/planMensual" component={PlanMensual} />
                    <Route exact path="/planPorDia" component={PlanPorDia} />
                    <Route exact path="/archivos" component={UploadFile}/>
                    <Route exact path="/previsualizacion" component={PreView}/>
                    <Route exact path="/compra" component={BuyConfirm}/>
                    <Route exact path="/confirmacionCompraMes" component={TicketMonth} />
                    <Route exact path="/confirmacionCompraDia" component={TicketDay} />
                    <Route exact path="/finalizacion" component={Ending} />
                </Switch>
            </div>
        </Router>
    )
}