import React from 'react';
import { Notification } from './Notification';

export const FormInfoClient = (
    {
        handleSubmit,
        handleChangeInput,
        variant,
        textAlert,
        show,
        formValues,
        isEdit,
    }
) => {

    const { nameClient, email, tel, camp } = formValues;

    return (
        <div>
            <p
                className="title__form"
            >
                Introduce tu información
            </p>

            <Notification
                show={show}
                variant={variant}
                textAlert={textAlert}
            />

            <form
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm`}
                        name="nameClient"
                        value={nameClient}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className={`form-control form-control-sm `}
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm`}
                        name="tel"
                        value={tel}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group ">
                    <label>Nombre de campaña</label>
                    <input
                        type="text"
                        className={`form-control form-control-sm `}
                        name="camp"
                        value={camp}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group ">
                    <input
                        type="submit"
                        className={`btn btn-primary btn-sm`}
                        value={`${isEdit ? 'Editar datos' : 'Ingresar datos'}`}
                    />
                </div>

            </form>
            <hr />

        </div>
    )
}