import React, { Component } from 'react';
import { alterDateHours } from '../service/storaje';

export default class TimePickerDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringDate: "",
      startHour: 5,
      endHour: 6
    }
  }

  componentDidMount = () => {
    this.setState(this.props.getDate)
  }

  startTimeUp = () => {
    const { startHour, endHour } = this.state
    if (endHour - startHour > 1 && startHour !== 22) {
      this.changeTime(startHour + 1, 'startHour')
    }
  }

  startTimeDown = () => {
    const { startHour } = this.state
    if (startHour !== 5) {
      this.changeTime(startHour - 1, 'startHour')
    }
  }

  endTimeUp = () => {
    const { endHour } = this.state
    if (endHour !== 23) {
      this.changeTime(endHour + 1, 'endHour')
    }
  }

  endTimeDown = () => {
    const { endHour, startHour, } = this.state
    if (endHour - startHour > 1 && startHour !== 7) {
      this.changeTime(endHour - 1, 'endHour')
    }
  }

  handleHourChange = e => {
    if (!isNaN(e.target.value)) {
      const newHour = parseInt(e.target.value)
      if (e.target.id === 'startHour') {
        if (newHour >= 5 && newHour < this.state.endHour && newHour < 23) {
          this.changeTime(newHour, e.target.id)
        }
      } else {
        if (newHour > 5 && newHour > this.state.startHour && newHour < 24) {
          this.changeTime(newHour, e.target.id)
        }
      }
    }
  }

  changeTime = (newHour, hourToChange) => {
    this.setState({ [hourToChange]: newHour })
    alterDateHours({ ...this.state, [hourToChange]: newHour })
    this.props.changeAddTime({ ...this.state, [hourToChange]: newHour })
  }

  render() {
    const { startTimeDown, startTimeUp, endTimeDown, endTimeUp, state, handleHourChange } = this
    const { stringDate, startHour, endHour } = state
    return (
      <div>
        {stringDate}
        <div className="grid__contrat">
          <div>
            Hora inicio:
            <div className="input-group inline-group">
              <div className="input-group-prepend">
                <button className="btn btn-outline-secondary btn-minus" onClick={startTimeDown}>
                  <i className="fa fa-minus"></i>
                </button>
              </div>
              <input className="form-control quantity" min="0" value={startHour} type="number" name="startHour" id="startHour" onChange={handleHourChange} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-plus" onClick={startTimeUp}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            Hora final:
            <div className="input-group inline-group">
              <div className="input-group-prepend">
                <button className="btn btn-outline-secondary btn-minus" onClick={endTimeDown}>
                  <i className="fa fa-minus"></i>
                </button>
              </div>
              <input className="form-control quantity" min="0" value={endHour} type="number" name="endHour" id="endHour" onChange={handleHourChange} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-plus" onClick={endTimeUp}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


