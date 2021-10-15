import React, { Component } from 'react';
import { Buttons } from '../components/Buttons';
import DropFile from '../components/DropFile';
import { setLocalFileAdd } from '../service/storaje';

const ADD_FILE = "addFile"

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file : null,
      fileName : '',
      addFile : null
    }
  }

  handleUpload = fileData => {
    setLocalFileAdd(fileData)
  }

  render (  ) {
    return(
      <div className="Drop__file">
      <p className="title__video">Sube tu video</p>
      <p>Especificaciones del video. Lorem ipsum dolot sit amet, consectetuer
          adispicing e it, sed diam nonummy nibh</p>
      <DropFile uploadFile={this.handleUpload} />
      <Buttons
          firstLink="planPorDia"
          firstName="atrás"
          secondLink="previsualizacion"
          secondName="Siguiente"
      />
    </div>
    );
  }
}