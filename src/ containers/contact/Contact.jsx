import React,{useState, createRef, useEffect} from "react";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { RiContactsFill,  } from "react-icons/ri";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./styles.scss"

const Contact = () => {

  const nameRef = createRef(null);
  const descriptionRef = createRef(null);
  const lNameRef = createRef(null);
  const [infoData, setInfoData] = useState({});

  const handleChange = (event) =>{
    event.preventDefault();
    const extraCurrentValueFromName = nameRef.current.value;
    const extraCurrentValueFromDescription = descriptionRef.current.value;
    const extraCurrentValueFromLname = lNameRef.current.value;
    setInfoData({
      name : extraCurrentValueFromName,
      description : extraCurrentValueFromDescription,
      lName : extraCurrentValueFromLname
    })

  }
console.log(infoData);

  return (
    <section>
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div>
     
        <Form>
        <h1 className="form-h1">Keep in touch</h1>

          <Row className="mx-2 mt-5">
            <Col className="my-4 ">
              <Form.Control ref={nameRef} id="input" name="fname" onChange={handleChange} placeholder="First name" />
              <Form.Control ref={descriptionRef} id="input"  name="description" onChange={handleChange} className="my-4" placeholder="Description" as="textarea" rows={9} />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col className="my-4">
              <Form.Control ref={lNameRef} id="input"  name="lname" onChange={handleChange} placeholder="Last name" />
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
