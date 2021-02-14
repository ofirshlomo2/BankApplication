import React from "react"
import { Dropdown, DropdownButton } from 'react-bootstrap';

import css from "./style.module.css"
import { PersonSquare, EnvelopeFill } from "react-bootstrap-icons"

interface IAccount {
    accountId: string
    createdAt: string
    users: Array<any>
}

export default function DropDownList(props: IAccount) {
    return (
        <DropdownButton  title={props.accountId}>
            <div>
                {props.users.map(user => <Dropdown.Item href="#/action-1">user</Dropdown.Item>)}
            </div>
        </DropdownButton>
    )
}

