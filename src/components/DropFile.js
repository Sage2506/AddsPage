import React, { useState } from 'react';
import axios from 'axios';

export const DropFile = () => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
        setFileName(e.target.files[0].name);
    }

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);

        try {
            const res = await axios.post(
                "http://localhost:4000/upload",
                formData
            );
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    }
    const changeFile = e => {
      console.log(e.target.id)
      console.log('intending to change file')
    }

    return (
        <>
            <div>
                <section className="container__drop-file" onClick={changeFile}>
                    { !file && <input type="file" onChange={saveFile} />}
                    { file &&
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

        </>
    )
}