import React, { useState, useEffect } from 'react';
import { ScreensTable } from '../components/ScreensTable';
import { FormInfoClient } from '../components/FormInfoClient';
import { Buttons } from '../components/Buttons';
import { useLocalStorage } from '../utils/useLocalStorage';
import { getStateLocalStorage } from '../utils/localStorage';

export const FormDataClient = () => {

  // Se comprueba si existen datos en la storage si es verdadero
  // se habilita la la edicion de datos del formaulario
  let boleanEdit;
  const actualityStorage = getStateLocalStorage("dataClient")
  if (actualityStorage.length === 0) {
    boleanEdit = false
  } else {
    boleanEdit = true;
  }
  //Una vez comprabada la existencia de data en la bd
  //se evalua que el usuario halla ingresado los dos requeridos para
  //poder continuar con el proeceso
  const dataRequiredForm = getStateLocalStorage("dataClient");
  const dataRequiredTable = getStateLocalStorage("dbListScreen");
  const resTable = dataRequiredTable.find(data => data.state === true);

  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const [storage, setStorage] = useLocalStorage("dataClient", "");
  const [isEdit, setisEdit] = useState(boleanEdit);
  const [reload, setReload] = useState(false);

  const [disabledBtn, setdisabledBtn] = useState(false);
  const [selectedCheck, setselectedCheck] = useState(false);
  const [completeForm, setcompleteForm] = useState(false);

  //Getting values of localstorage
  //let dataClientDb = getStateLocalStorage('dataClient');
  let data;
  if (storage) {
    storage.forEach(element => (data = element));
  }

  const [formValues, setformValues] = useState({
    nameClient: isEdit ? data.nameClient : '',
    email: isEdit ? data.email : '',
    tel: isEdit ? data.tel : '',
    camp: isEdit ? data.camp : ''
  });

  const handleChangeInput = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  let { nameClient, email, tel, camp } = formValues;

  useEffect(() => {

    if (completeForm && selectedCheck) {
      setReload(true);
      setdisabledBtn(false);
    }

    if (dataRequiredForm && resTable) {
      setReload(true);
      setdisabledBtn(false)
    }

    if (!selectedCheck) {
      setReload(true);
      setdisabledBtn(false)
    }

    if (!resTable) {

    } setReload(true);
    setdisabledBtn(false)

    setTimeout(() => {
      setShow(false)
    }, 3800)
  }, [dataRequiredForm, resTable, selectedCheck, completeForm, reload])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameClient === '' && email === '' && tel === '' && camp === '') {
      setShow(true);
      setVariant("danger");
      setTextAlert("datos erroneos");
    } else {
      let arrayDb = [];

      if (isEdit) {
        const upDateDb = storage.map(items => {
          return {
            ...items,
            nameClient: nameClient,
            email: email,
            tel: tel,
            camp: camp
          }
        })
        localStorage.setItem("dataClient", JSON.stringify(upDateDb));
      } else {
        arrayDb.push(formValues);
        setStorage(arrayDb);
        setisEdit(true);
        setcompleteForm(true);
      }
    }
  }

  return (
    <div className="data__contrat-cont">
      <div className="grid__contrat">
        <div>
          <FormInfoClient
            handleSubmit={handleSubmit}
            formValues={formValues}
            handleChangeInput={handleChangeInput}
            textAlert={textAlert}
            variant={variant}
            show={show}
            isEdit={isEdit}
            data={data}
          />
        </div>
        <div>
          <ScreensTable
            selectedCheck={setselectedCheck}
          />
          <div>
            <p
              className="title__form"
            >
              ¿Que tan serio vas con Loopita?
            </p>
          </div>
          <Buttons
            firstLink={'planPorDia'}
            secondLink={'planMensual'}
            firstName={'En serio'}
            secondName={'Muy en serio'}
            firstSubText={"plan por dia"}
            secondSubText={"plan mensual"}
            disabledBtn={disabledBtn}
          />
          <div className="bx__btn-next">
            <button
              className="btn btn-primary btn-sm"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}