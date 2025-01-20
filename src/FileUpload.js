import React, { useState } from "react";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check file type
      const fileType = file.type;
      if (fileType === "image/jpeg" || fileType === "image/jpg") {
        setFileName(file.name); // Set the file name
       
      }
    } else {
        setFileName(""); // Reset the file name
        e.target.value = null; }
  };

  const ClickHandle = (fileName) => {
    console.log("File name:", fileName);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>File Upload</h2>
      <form>
        <input
          type="file"
          accept=".jpg,.jpeg" // Accept only .jpg and .jpeg files
          onChange={handleFileChange}
        /><br />
        {fileName && <p>Selected File: {fileName}</p>}<br />
        <button type="button" onClick={() => ClickHandle(fileName)}>Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
