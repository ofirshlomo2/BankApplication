import React, { useState } from "react"
import { Form, Col, Button } from "react-bootstrap"
import { registerUser } from "../../../../store/async-actions/registerUser"


export interface IUserDetails {
    email: string,
    firstName: string,
    lastName: string,
    phone: number | undefined,
    bankBranch: number | undefined,
    id: number | undefined,
    address: string,
    password: string
}


export function Register() {
    const registrationHeader: string = "Register"
    const user: IUserDetails = {
        email: "",
        firstName: "",
        lastName: "",
        phone: undefined,
        bankBranch: undefined,
        id: undefined,
        address: "",
        password: ""
    }
    const [userDetails, setUserDetails] = useState(user)
    const [emailValidation, setEmailValidation] = useState({ message: "", isValid: true })
    function onChangeUserDetails(key: string, value: string) {
        setUserDetails({ ...userDetails, [key]: value })
    }

    // if you want something more build in - use form validation in react
    function emailValidate(value: string) {
        if (!value) setEmailValidation({ isValid: false, message: "email is required" })
        else if (!value.includes("@")) {
            console.log("no @ in the email format value")
            setEmailValidation({ isValid: false, message: "email format is wrong" })
        } else if (value) setEmailValidation({ isValid: true, message: "" })

    }

    function sendUserDetails() {
        registerUser(userDetails)
        console.log(userDetails)
    }
    return <div>
        <h1> {registrationHeader} </h1>
        <div>
            <Form>
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" onChange={(event) => {
                            emailValidate(event?.target.value)
                            onChangeUserDetails(event?.target.name, event?.target.value)
                        }}
                            type="email" placeholder="Enter email" />
                        {emailValidation.isValid ? "" : emailValidation.message}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} placeholder="Password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Id</Form.Label>
                        <Form.Control name="id" type="number" placeholder="id" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} />
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" placeholder="1234 Main St" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone" type="number" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstName" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastName" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Bank Branch</Form.Label>
                        <Form.Control name="bankBranch" type="number" onChange={(event) => onChangeUserDetails(event?.target.name, event?.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" onClick={sendUserDetails} type="button">
                    Save
  </Button>
            </Form>
        </div>
    </div>

}
