import "./styles.css";
import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

export default function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
}
