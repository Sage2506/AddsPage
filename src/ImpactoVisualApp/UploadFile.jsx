import React, { Component } from 'react';
import { Buttons } from '../components/Buttons';
import DropFile from '../components/DropFile';
import { getDailyAmount, getLocalFileAdd, getLocalScreen, getSelectedPlan, setLocalFileAdd } from '../service/storaje';
import { currencyFormat } from '../utils/common';

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: '',
      addFile: null,
      servicePlan: { id : -1},
      screen : { id : -1}
    }
  }

  componentDidMount = () => {
    const screen = getLocalScreen();
    const servicePlan = getSelectedPlan()
    const dailyAmount = getDailyAmount();
    if( servicePlan.id === -1 && dailyAmount !== null){
      servicePlan['price'] = dailyAmount
    }
    this.setState({
      screen,
      servicePlan
    })
  }
  handleUpload = fileData => {
    this.setState({
      file: fileData.file,
      fileName: fileData.fileName
    })
    setLocalFileAdd(fileData)
  }

  render() {
    const { file, screen, servicePlan } = this.state;

    const impactEstimate = 10000/18/60*(servicePlan.price*2/60)*1.5;
    return (
      <div className="Drop__file">
        <div className="dobule_section_grid">
          <div>
            <p className="title__video">¿Como te van a recordar?</p>
            <p>Sube tu archivo en formato .jpg, .png o .mp4</p>
            <DropFile uploadFile={this.handleUpload} />
          </div>
          <div>
            <p className="title__video">Previsualizacion</p>
            <p>Especificaciones del video</p>
            {file &&
              <div>
                <video controls id="videoPreview" >
                  <source src={URL.createObjectURL(file)} />
                </video>
              </div>
            }
          </div>
        </div>
        <div className="triple_section_grid">
          <div>
            <table className="table table-striped">
              <tr>
                <td>Pantalla</td>
                <td>{screen.name}</td>
              </tr>
              <tr>
                <td>Presupuesto proyectado</td>
                <td>{currencyFormat(servicePlan.price)}</td>
              </tr>
              <tr>
                <td>Hora pico</td>
                <td>{currencyFormat(servicePlan.price / 2)}</td>
              </tr>
              <tr>
                <td>Hora no pico</td>
                <td>{currencyFormat(servicePlan.price / 2)}</td>
              </tr>
              <tr>
                <td>No. total de spots</td>
                <td>{servicePlan.price / 10}</td>
              </tr>
              <tr>
                <td>Total de tiempo proyectado</td>
                <td>{(servicePlan.price * 2 / 60).toFixed(2)}</td>
              </tr>
              <tr>
                <th colSpan="2">Impactos totales</th>
              </tr>
              <tr>
                <td>No. de automóviles</td>
                <td>{(10000 / 18 / 60 * (servicePlan.price * 2 / 60)).toFixed(0)}</td>
              </tr>
              <tr>
                <td>Estimado de impactos</td>
                <td>{(impactEstimate).toFixed(0)}</td>
              </tr>
            </table>
          </div>
          <div>
            <table className="table table-striped">
              <tr>
                <th>Perfil socioeconomico</th>
              </tr>
              <tr>
                <td>C+</td>
                <td>{(impactEstimate * 0.35).toFixed(0)}</td>
              </tr>
              <tr>
                <td>C</td>
                <td>{(impactEstimate * 0.38).toFixed(0)}</td>
              </tr>
              <tr>
                <td>AB</td>
                <td>{(impactEstimate * 0.12).toFixed(0)}</td>
              </tr>
              <tr>
                <td> E</td>
                <td>{(impactEstimate * 0.09).toFixed(0)}</td>
              </tr>
              <tr>
                <td>D</td>
                <td>{(impactEstimate * 0.06).toFixed(0)}</td>
              </tr>

            </table>
            <table className="table table-striped">
              <tr>
                <td>Hombres</td>
                <td>{(impactEstimate * 0.45).toFixed(0)}</td>
              </tr>
              <tr>
                <td>Mujeres</td>
                <td>{(impactEstimate * 0.55).toFixed(0)}</td>
              </tr>
            </table>
          </div>
          <div>
            <table className="table table-striped">
              <tr>
                <th colSpan="2">Rangos de edad</th>
              </tr>
              <tr>
                <td>0-14</td>
                <td>{(impactEstimate * 0.16).toFixed(0)}</td>
              </tr>
              <tr>
                <td>15-19</td>
                <td>{(impactEstimate * 0.15).toFixed(0)}</td>
              </tr>
              <tr>
                <td>20-19</td>
                <td>{(impactEstimate * 0.14).toFixed(0)}</td>
              </tr>
              <tr>
                <td>30-44</td>
                <td>{(impactEstimate * 0.22).toFixed(0)}</td>
              </tr>
              <tr>
                <td>45-54</td>
                <td>{(impactEstimate * 0.18).toFixed(0)}</td>
              </tr>
              <tr>
                <td>Más de 55</td>
                <td>{(impactEstimate * 0.15).toFixed(0)}</td>
              </tr>
            </table>

          </div>
        </div>
        <div className="dobule_section_grid">
          <div>
            <table className="table table-striped">
              <tr>
                <td>No. total de spots</td>
                <td>{servicePlan.price / 10}</td>
              </tr>
            </table>

          </div>
          <div>
            <Buttons
              firstLink="planPorDia"
              firstName="atrás"
              secondLink="compra"
              secondName="Siguiente"
            />
          </div>
        </div>
        <div>
          *datos calculados con estadisticos de sintrafico.com
        </div>
      </div>
    );
  }
}