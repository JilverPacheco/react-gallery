import React, { Fragment, useEffect } from "react";
import { useFirebaseStorage } from "../hooks/useFirebaseStorage";
import { BarProgress } from "../styles/styles";
export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useFirebaseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Fragment>
      <BarProgress max={100} value={progress} />
    </Fragment>
  );
};
