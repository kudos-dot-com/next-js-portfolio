import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { storage } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@firebase/storage";

function Form3() {
  const [file, setfile] = useState();
  const [text, settext] = useState("Upload");
  const [percent, setpercent] = useState("");
  const [error, seterror] = useState(false);
  const [toggle, settoggle] = useState(false);
  const onFileChange = (e) => {
    seterror(false);
    const storageRef = ref(storage, `/files/${file.name}`);
    // console.log(storageRef)
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        settext("Uploading...");
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setpercent(Math.round(progress));
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        seterror(true);
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          settext("Upload");
          settoggle(true);
          seterror(false);
          localStorage.setItem("link", downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Your Cv</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              setfile(e.target.files[0]);
            }}
          />
        </Form.Group>
      </Form>
      {!toggle && !error ? (
        <Button
          variant="danger"
          style={{
            color: "#fff",
            outline: "none",
            border: "none",
          }}
          onClick={onFileChange}
        >
          {text}
        </Button>
      ) : (
        "uploading done"
      )}
      <small className="mx-2 mt-1">
        {" "}
        {text === "Uploading..." ? `${percent}% done` : ""}
      </small>
      <small className="mx-2 mt-1" style={{ color: "red" }}>
        {" "}
        {error ? `error while uploading` : ""}
      </small>
    </div>
  );
}

export default Form3;
