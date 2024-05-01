import { Col, Form, FormGroup, Row, Input, Label } from "reactstrap";
import "./register.css";
import { useState } from "react";
const RegisterForm = () => {
  const [customerInfo, SetCustomerInfo] = useState({
    customerName: "",
    lastname: "",
    phoneNumberIndex: "",
    phoneNumber: "",
    businessName: "",
    aboutCustomer: "",
    isChecked: false,
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [filledValue, setFilledValue] = useState({});

  const clear = () => {
    SetCustomerInfo({
      customerName: "",
      lastname: "",
      phoneNumberIndex: "",
      phoneNumber: "",
      businessName: "",
      aboutCustomer: "",
      isChecked: false,
    });
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <Row xs="1">
            <Col md={{ offset: 2, size: 2 }}>
              <Label>name:</Label>
              <Input
                value={customerInfo.customerName}
                onChange={(e) =>
                  SetCustomerInfo({
                    ...customerInfo,
                    customerName: e.target.value,
                  })
                }
                type="text"
                placeholder="enter name"
              ></Input>
            </Col>
            <Col md={{ offset: 1, size: 2 }}>
              <Label>last name</Label>
              <Input
                placeholder="enter lastname"
                value={customerInfo.lastname}
                onChange={(e) =>
                  SetCustomerInfo({ ...customerInfo, lastname: e.target.value })
                }
              ></Input>
            </Col>
          </Row>
          <Row xs="1">
            <Col md={{ offset: 2, size: 1 }}>
              <Label>idex</Label>
              <Input
                value={customerInfo.phoneNumberIndex}
                onChange={(e) =>
                  SetCustomerInfo({
                    ...customerInfo,
                    phoneNumberIndex: e.target.value,
                  })
                }
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option value="+995">+995</option>
                <option value="+900">+900</option>
                <option value="+223">+223</option>
                <option value="+180">+180</option>
                <option value="+550">+550</option>
              </Input>
            </Col>
            <Col md={{ size: 4 }}>
              <Label>phone number</Label>
              <Input
                value={customerInfo.phoneNumber}
                onChange={(e) =>
                  SetCustomerInfo({
                    ...customerInfo,
                    phoneNumber: e.target.value,
                  })
                }
                type="number"
                placeholder="enter your number"
              ></Input>
            </Col>

            <Col md={{ offset: 2, size: 5 }}>
              <Label>business name</Label>
              <Input
                value={customerInfo.businessName}
                onChange={(e) =>
                  SetCustomerInfo({
                    ...customerInfo,
                    businessName: e.target.value,
                  })
                }
                placeholder="business name"
              ></Input>
            </Col>
            <Col md={{ offset: 2, size: 5 }}>
              <Label>message</Label>
              <Input
                value={customerInfo.aboutCustomer}
                onChange={(e) =>
                  SetCustomerInfo({
                    ...customerInfo,
                    aboutCustomer: e.target.value,
                  })
                }
                type="textarea"
              ></Input>
            </Col>
            <Row>
              <Col md={{ offset: 2, size: 1 }}>
                <Input
                  onChange={() =>
                    SetCustomerInfo({
                      ...customerInfo,
                      isChecked: !customerInfo.isChecked,
                    })
                  }
                  checked={customerInfo.isChecked}
                  type="checkbox"
                ></Input>
              </Col>
              <Col xs={{ size: 2 }}>
                <button
                  onClick={() => {
                    if (customerInfo.isChecked) {
                      setIsSubmited(true);
                      setFilledValue({ ...customerInfo });
                      clear();
                    }
                  }}
                  type="button"
                >
                  submit
                </button>
              </Col>
            </Row>
          </Row>
        </FormGroup>
      </Form>
      {filledValue.isChecked && isSubmited ? (
        <Row>
          <Col md={{ offset: 2, size: 5 }}>
            <p>customer name is: {filledValue.customerName}</p>
          </Col>
          <Col md={{ offset: 2, size: 5 }}>
            <p>customer lastname is: {filledValue.lastname}</p>
          </Col>
          <Col md={{ offset: 2, size: 5 }}>
            <p>
              customer number is:
              {filledValue.phoneNumberIndex + filledValue.phoneNumber}
            </p>
          </Col>
          <Col md={{ offset: 2, size: 5 }}>
            <p>busness name: {filledValue.businessName}</p>
          </Col>
          <Col md={{ offset: 2, size: 5 }}>
            <p>customer message: {filledValue.aboutCustomer}</p>
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

export { RegisterForm };
