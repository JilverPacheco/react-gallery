import React, { useState } from "react";
import { ImagesContainer, Container } from "../styles/styles";
import { ImageGrid } from "./ImageGrid.component";
import { Modal } from "./modal.components";
import { UploadForm } from "./UploadForm.component";

export const ImagesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container>
      <UploadForm />
      <ImagesContainer>
        <ImageGrid setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </ImagesContainer>
    </Container>
  );
};
