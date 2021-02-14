import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import getAccountsAction from "../../../../store/async-actions/getAccounts"
import AccountCard from "../../../ui-component/account"


import { IState } from "../../../../store/reducers/mainReducers"

export default function AccountsPage() {

    const accounts = useSelector((store: IState) => store.accounts)


    useEffect(() => {
        getAccountsAction()
    }, [])

    return <div>
        <h1> Accounts  </h1>
        <div>
            {accounts.map(account => <AccountCard key={account.accountId} {...account} />)}
        </div>
    </div>
}