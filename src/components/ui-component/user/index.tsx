import React from "react"
import { Dropdown, DropdownButton } from 'react-bootstrap';

import css from "./style.module.css"
import { PersonSquare, EnvelopeFill } from "react-bootstrap-icons"

interface IUser {
    firstName: string
    email: string
}


export default function UserCard(props: IUser) {
    return <div className={css.userCard}>
        <h3><PersonSquare /> {props.firstName}  </h3>
        <h3><EnvelopeFill /> {props.email}</h3>
    </div>
}
