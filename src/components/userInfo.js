import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from 'axios';

function UserForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [people,setPeople] = useState([]);

  const addPerson = async (e) => {
    e.preventDefault();
    const newPersonData = {
      name: name,
      email: email,
      country: country,
      mobile: mobile
    }

    console.log(newPersonData);
    setPeople([...people,newPersonData]);
    //send a POST request to the API server to store this new person info
    const result = await axios.post(`http://localhost:3001/user`,newPersonData)
    console.log(result.data);
  }


  return (

    <>
    <Form onSubmit={addPerson}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mobile">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type="number" placeholder="Number" onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
    
    <br />
    <h1>Current Users</h1>
    <br />
{people.map((person, index) => {
  return(
    <>
    
    <p key={index}>{person.name}</p>
    <p key={index}>{person.email}</p>
    <p>---------------</p>    
    </>
  )
})}

</>
  );
}

export default UserForm;