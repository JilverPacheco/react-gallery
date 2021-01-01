import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import { ImageGridWrapper, ImageWrap, ImageContent } from "../styles/styles";

export const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <ImageGridWrapper>
      {docs &&
        docs.map((doc) => (
          <ImageWrap
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
            key={doc.id}
          >
            <ImageContent
              src={doc.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </ImageWrap>
        ))}
    </ImageGridWrapper>
  );
};
