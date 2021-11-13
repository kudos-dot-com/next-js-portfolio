import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Form1 from "../components/multistepform/form1";
import Form2 from "../components/multistepform/form2";
import Form3 from "../components/multistepform/form3";
import Alert from "react-bootstrap/Alert";
import { db } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
function form1({ des }) {
  const [counter, setcounter] = useState(1);
  const [show, setshow] = useState(false);
  const [status,setstatus]=useState(false)
  function uploadFile() {
    // const storageRef = ref(storage, localStorage.getItem('file'));
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };
    console.log(localStorage.getItem("file"));
    // Upload file and metadata to the object 'images/mountains.jpg'
    
  }
  async function handleSubmit() {
    console.log("hi");
    if (
      localStorage.getItem("name") === null ||
      !localStorage.getItem("email") === null ||
      !localStorage.getItem("number") === null ||
      !localStorage.getItem("q1") === null ||
      !localStorage.getItem("q2") === null ||
      !localStorage.getItem("q3") === null ||
      !localStorage.getItem("link") === null
    ) {
      setshow(true);
    } else {
      console.log(show);
      setshow(false);
      let e = {
        description: des.descriptions,
        email: localStorage.getItem("email"),
        id: "788hd22g2g7g72ezgg77",
        name: localStorage.getItem("name"),
        number: localStorage.getItem("number"),
        q1: localStorage.getItem("q1"),
        q2: localStorage.getItem("q2"),
        q3: localStorage.getItem("q3"),
        role: des.role,
        downloadLink: localStorage.getItem("link")
      };
      try {
        const docRef = await addDoc(collection(db, "careers"), e);
        console.log("Document written with ID: ", docRef.id);
        setstatus(true);
      } catch (err) {
        setstatus(false);
        console.error("Error adding document: ", err);
      }
      
    }
  }
  return (
    <div>
      <div>
        <ProgressBar now={(counter / 3) * 100} label={`${counter}/3`} />
      </div>
      <div
        style={{ display: show ? "block" : "none", color: "red" }}
        className="mt-2 px-2"
      >
        {/* <Alert key='1' variant="danger">
            All Fields Are Required !
          </Alert> */}
        All Fields Are Required !
      </div>
      <br />
      {counter == 1 ? <Form1 /> : counter == 2 ? <Form2 /> : <Form3 />}
      <br />
      <div>
        {
          status?
          <p>Thanks For submitting Your Response! We Will Get Back To You Shortly</p>
          :
          <div>
            <Button
          variant=""
          style={{
            display: counter === 1 ? "none" : "inline-block",
            color: "#fff",
            outline: "none",
            border: "none",
          }}
          onClick={() => {
            setcounter(counter - 1);
          }}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          style={{ display: counter === 3 ? "none" : "inline-block" }}
          onClick={() => {
            setcounter(counter + 1);
          }}
        >
          Next
        </Button>
        <Button
          variant="primary"
          style={{ display: counter === 3 ? "inline-block" : "none" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
            </div>
        }
      </div>
    </div>
  );
}

export default form1;
