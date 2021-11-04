import React, { Component } from 'react';

export default class DropFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file : null,
      fileName : ""
    }
  }

  changeFile = e => {
  }

  saveChanges = () => {
    const fileData = this.state
    this.props.uploadFile(fileData)
  }

  saveFile = e => {
    this.setState({ file:  e.target.files[0], fileName: e.target.files[0].name})
  }

  render (  ) {
    const { changeFile, saveFile, saveChanges, state } = this
    const { file } = state
    return(
      <div>
        <div>
          <section className="container__drop-file" onClick={changeFile}>
            {!file && <input type="file" onChange={saveFile} />}
            {file &&
              <video autoPlay={true} id="videoPreview" >
                <source src={URL.createObjectURL(file)} />
              </video>
            }
          </section>
        </div>
        <button type="button" onClick={saveChanges}> Guardar archivo</button>
      </div>
    );
  }
}

