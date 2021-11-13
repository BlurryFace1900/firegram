import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, serError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    console.log("changed");
    let selected = e.target.files[0];

    if (selected && types.include(selected.types)) {
      setFile(selected);
      serError(null);
    } else {
      setFile(null);
      serError("Please choose jpeg/png image");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
