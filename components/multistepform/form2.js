import React,{useState} from "react";
import Form from "react-bootstrap/Form";

function form1() {
    
    return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>tell me about youself?</Form.Label>
          <Form.Control
          onChange={(e)=>localStorage.setItem('q1',e.target.value)}
            as="textarea"
            rows={3}
            placeholder="write in not more than 100 words"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Why Do You Want to Join Us?</Form.Label>
          <Form.Control
          onChange={(e)=>localStorage.setItem('q2',e.target.value)}
            as="textarea"
            rows={3}
            placeholder="write in not more than 100 words"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Do You Have Any Past Experiences?</Form.Label>
          <Form.Control
          onChange={(e)=>localStorage.setItem('q3',e.target.value)}
            as="textarea"
            rows={3}
            placeholder="write in not more than 100 words"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default form1;
