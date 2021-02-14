import React, { useState } from "react"
import { Form, Col, Button } from "react-bootstrap"
import { changePasswordAction } from "../../../../store/async-actions/changePassword"


export interface IChangePassword {
    email: string,
    password: string,
    newPassword: string
    confirmNewPassword: string,
}


export function ChangePassword() {
    const cpd: IChangePassword = {
        email: "",
        password: "",
        newPassword: "",
        confirmNewPassword: "",

    }
    const [changePasswordDetails, setChangePasswordDetails] = useState(cpd)
    function onChangePassword(key: string, value: string) {
        setChangePasswordDetails({ ...changePasswordDetails, [key]: value })
    }

    // if you want something more build in - use form validation in react


    function sendChangePasswordReuquest() {
        changePasswordAction(changePasswordDetails)
    }
    return <div>
        <h1> Change Password </h1>
        <div style={{ width: "600px" }}>
            <Form >
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" onChange={(event) => {
                            onChangePassword(event?.target.name, event?.target.value)
                        }}
                            type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={(event) => onChangePassword(event?.target.name, event?.target.value)} placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control name="newPassword" onChange={(event) => onChangePassword(event?.target.name, event?.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control name="confirmNewPassword" onChange={(event) => onChangePassword(event?.target.name, event?.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" onClick={sendChangePasswordReuquest} type="button">
                    Save
  </Button>
            </Form>
        </div>
    </div>

}
