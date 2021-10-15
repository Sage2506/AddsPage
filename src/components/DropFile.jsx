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
    console.log(e.target.id)
    console.log('intending to change file')
  }

  saveChanges = () => {
    const fileData = this.state
    this.props.uploadFile(fileData)
  }

  saveFile = e => {
    console.log(e.target.files[0])
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
              <video controls id="videoPreview">
                <source src={URL.createObjectURL(file)} />
              </video>
            }
          </section>
        </div>
        <img
          alt="miimagen"
          src="http://localhost:4000/uploads/test.png"
        />
        <button type="button" onClick={saveChanges}> Guardar archivo</button>
      </div>
    );
  }
}

