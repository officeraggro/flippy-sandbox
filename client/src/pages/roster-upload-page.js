import React, {useCallback} from 'react'
import { Link } from "react-router-dom";
import FileDropZone from "../components/file-dropzone"

const RosterUploadPage = () => {

    return (
      <>
        <div className="top-banner">
          <h1 className="hero-message">
            This is my React Flow sandbox! Great job!
          </h1>
        </div>
        <div className="banner-buffer" />
        <Link to="/">Back</Link>
        <br />
        <FileDropZone />
      </>
    );
}

export default RosterUploadPage