import React, { useState } from "react";
import Dropzone from "react-dropzone";

const FileDropZone = () => {
  const [fileName, setFileName] = useState("");

  const handleDrop = (acceptedFiles) => {
    const filename = acceptedFiles[0].name;
    setFileName(filename);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File read error");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <>
      <div className="file-dropzone">
        <Dropzone
          onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}
          accept={{
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
              [".xlsx"],
            "application/vnd.ms-excel": [".xls"],
            "text/csv": [".csv"],
          }}
          maxFiles={1}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>
                  Drag and drop files here or click to select files to upload
                </p>
                <p>
                  Only Microsoft Excel (.xls, xlsx) or CSV file (.csv) are
                  supported.
                </p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div>{fileName && <p>File to upload: {fileName}</p>}</div>
    </>
  );
};

export default FileDropZone;
