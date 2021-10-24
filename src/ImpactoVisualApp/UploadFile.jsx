import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import DropFile from '../components/DropFile';
import { getLocalScreen, getSelectedDates, getSelectedPlan, setLocalFileAdd } from '../service/storaje';
import { calculateDailyServiceTotals, currencyFormat } from '../utils/common';

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: '',
      addFile: null,
      servicePlan: { id: -1 },
      screen: { id: -1 },
      statistics: {
        ageRangeFifteenToNineteen: 0,
        ageRangeFourtyfiveToFiftyfour: 0,
        ageRangeOverFiftyfive: 0,
        ageRangeThirtyToFourtyfour: 0,
        ageRangeTwentyToTwentynine: 0,
        ageRangeZeroToFourteen: 0,
        men: 0,
        noPeakHour: 0,
        peakHour: 0,
        profileAB: 0,
        profileC: 0,
        profileCPlus: 0,
        profileD: 0,
        profileE: 0,
        total: 0,
        totalCars: 0,
        totalImpactEstimation: 0,
        totalProjectTime: 0,
        totalSpots: 0,
        women: 0
      }
    }
  }

  componentDidMount = () => {
    const screen = getLocalScreen(); // the selected screen for the list
    const servicePlan = getSelectedPlan() // selected month plan if one
    const dailyServiceConfig = getSelectedDates(); // configurated daily plan if one
    if (servicePlan.id === -1 && dailyServiceConfig !== null) {
      this.calculateDailyTotal(dailyServiceConfig)
    } else {
      this.calculateMonthTotal(servicePlan)
    }
    this.setState({
      screen,
      servicePlan
    })
  }

  calculateMonthTotal = (servicePlan) => {
    const statistics = {
      ageRangeFifteenToNineteen: 0,
      ageRangeFourtyfiveToFiftyfour: 0,
      ageRangeOverFiftyfive: 0,
      ageRangeThirtyToFourtyfour: 0,
      ageRangeTwentyToTwentynine: 0,
      ageRangeZeroToFourteen: 0,
      men: 0,
      noPeakHour: 0,
      peakHour: 0,
      profileAB: 0,
      profileC: 0,
      profileCPlus: 0,
      profileD: 0,
      profileE: 0,
      total: 0,
      totalCars: 0,
      totalImpactEstimation: 0,
      totalProjectTime: 0,
      totalSpots: 0,
      women: 0,
    }

    statistics.total = servicePlan.price
    statistics.peakHour = statistics.total / 2
    statistics.noPeakHour = statistics.total / 2
    statistics.totalSpots = statistics.total / 10 / servicePlan.loopMultipliyer
    statistics.totalProjectTime = statistics.totalSpots * 20 / 60
    statistics.totalCars = 1000 / 18 / 60 * statistics.totalProjectTime
    const totalImpactEstimation = statistics.totalCars * 1.5
    statistics.totalImpactEstimation = totalImpactEstimation
    statistics.profileCPlus = totalImpactEstimation * 0.35
    statistics.profileC = totalImpactEstimation * 0.38
    statistics.profileAB = totalImpactEstimation * 0.12
    statistics.profileE = totalImpactEstimation * 0.09
    statistics.profileD = totalImpactEstimation * 0.06
    statistics.men = totalImpactEstimation * 0.45
    statistics.women = totalImpactEstimation * 0.55
    statistics.ageRangeZeroToFourteen = totalImpactEstimation * 0.16
    statistics.ageRangeFifteenToNineteen = totalImpactEstimation * 0.15
    statistics.ageRangeTwentyToTwentynine = totalImpactEstimation * 0.14
    statistics.ageRangeThirtyToFourtyfour = totalImpactEstimation * 0.22
    statistics.ageRangeFourtyfiveToFiftyfour = totalImpactEstimation * 0.18
    statistics.ageRangeOverFiftyfive = totalImpactEstimation * 0.15

    this.setState({
      statistics
    })
  }

  calculateDailyTotal = (dailyServiceConfig) => {
    const statistics = {
      ageRangeFifteenToNineteen: 0,
      ageRangeFourtyfiveToFiftyfour: 0,
      ageRangeOverFiftyfive: 0,
      ageRangeThirtyToFourtyfour: 0,
      ageRangeTwentyToTwentynine: 0,
      ageRangeZeroToFourteen: 0,
      men: 0,
      noPeakHour: 0,
      peakHour: 0,
      profileAB: 0,
      profileC: 0,
      profileCPlus: 0,
      profileD: 0,
      profileE: 0,
      total: 0,
      totalCars: 0,
      totalImpactEstimation: 0,
      totalProjectTime: 0,
      totalSpots: 0,
      women: 0,
    }
    const { total, minTotal, maxTotal } = calculateDailyServiceTotals(dailyServiceConfig)
    statistics.total = total;
    statistics.peakHour = maxTotal;
    statistics.noPeakHour = minTotal;
    statistics.totalSpots = total / 10
    statistics.totalProjectTime = statistics.totalSpots * 20 / 60
    statistics.totalCars = 1000 / 18 / 60 * statistics.totalProjectTime
    const totalImpactEstimation = statistics.totalCars * 1.5
    statistics.totalImpactEstimation = totalImpactEstimation
    statistics.profileCPlus = totalImpactEstimation * 0.35
    statistics.profileC = totalImpactEstimation * 0.38
    statistics.profileAB = totalImpactEstimation * 0.12
    statistics.profileE = totalImpactEstimation * 0.09
    statistics.profileD = totalImpactEstimation * 0.06
    statistics.men = totalImpactEstimation * 0.45
    statistics.women = totalImpactEstimation * 0.55
    statistics.ageRangeZeroToFourteen = totalImpactEstimation * 0.16
    statistics.ageRangeFifteenToNineteen = totalImpactEstimation * 0.15
    statistics.ageRangeTwentyToTwentynine = totalImpactEstimation * 0.14
    statistics.ageRangeThirtyToFourtyfour = totalImpactEstimation * 0.22
    statistics.ageRangeFourtyfiveToFiftyfour = totalImpactEstimation * 0.18
    statistics.ageRangeOverFiftyfive = totalImpactEstimation * 0.15

    this.setState({
      statistics
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
    const {
      file,
      statistics
    } = this.state;
    const {
      ageRangeFifteenToNineteen,
      ageRangeFourtyfiveToFiftyfour,
      ageRangeOverFiftyfive,
      ageRangeThirtyToFourtyfour,
      ageRangeTwentyToTwentynine,
      ageRangeZeroToFourteen,
      men,
      noPeakHour,
      peakHour,
      profileAB,
      profileC,
      profileCPlus,
      profileD,
      profileE,
      total,
      totalCars,
      totalImpactEstimation,
      totalProjectTime,
      totalSpots,
      women,
    } = statistics

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
              <tbody>
                <tr>
                  <td>Pantalla</td>
                  <td>{ }</td>
                </tr>
                <tr>
                  <td>Presupuesto proyectado</td>
                  <td>{currencyFormat(total)}</td>
                </tr>
                <tr>
                  <td>Hora pico</td>
                  <td>{currencyFormat(peakHour)}</td>
                </tr>
                <tr>
                  <td>Hora no pico</td>
                  <td>{currencyFormat(noPeakHour)}</td>
                </tr>
                <tr>
                  <td>Total de tiempo proyectado</td>
                  <td>{(totalProjectTime).toFixed(2)}</td>
                </tr>
                <tr>
                  <th colSpan="2">Impactos totales</th>
                </tr>
                <tr>
                  <td>No. de automóviles</td>
                  <td>{totalCars.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Estimado de impactos</td>
                  <td>{totalImpactEstimation.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th colSpan="2">Perfil socioeconomico</th>
                </tr>
                <tr>
                  <td>C+</td>
                  <td>{profileCPlus.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>{profileC.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>AB</td>
                  <td>{profileAB.toFixed(2)}</td>
                </tr>
                <tr>
                  <td> E</td>
                  <td>{profileE.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>{profileD.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Hombres</td>
                  <td>{men.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Mujeres</td>
                  <td>{women.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th colSpan="2">Rangos de edad</th>
                </tr>
                <tr>
                  <td>0-14</td>
                  <td>{ageRangeZeroToFourteen.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>15-19</td>
                  <td>{ageRangeFifteenToNineteen.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>20-29</td>
                  <td>{ageRangeTwentyToTwentynine.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>30-44</td>
                  <td>{ageRangeThirtyToFourtyfour.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>45-54</td>
                  <td>{ageRangeFourtyfiveToFiftyfour.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Más de 55</td>
                  <td>{ageRangeOverFiftyfive.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="dobule_section_grid">
          <div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>No. total de spots</td>
                  <td>{totalSpots}</td>
                </tr>
              </tbody>
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