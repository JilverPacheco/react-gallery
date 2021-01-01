import React, { useState } from "react";
import {
  ErrorWrapper,
  ErrorWarning,
  Form,
  Input,
  Icon,
  Label,
} from "../styles/styles";
import { AiOutlineWarning } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { ProgressBar } from "./ProgressBar.component";

export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const type = ["image/png", "image/jpeg", "image/jpg"];

  const handleInputChange = (e) => {
    let selected = e.target.files[0];
    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError(
        `Cargue una imagen con las siguientes extensiones: [ .png , .jpeg o .jpg ]`
      );
    }
  };
  return (
    <Form>
      <Label htmlFor="upload-image">
        Subir imagen
        <Icon>
          <BsSearch />
        </Icon>
      </Label>
      <Input type="file" onChange={handleInputChange} id="upload-image" />
      <ErrorWrapper>
        {error && (
          <ErrorWarning>
            <Icon>
              <AiOutlineWarning />
            </Icon>
            Error: {error}
            <Icon>
              <AiOutlineWarning />
            </Icon>
          </ErrorWarning>
        )}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </ErrorWrapper>
    </Form>
  );
};
