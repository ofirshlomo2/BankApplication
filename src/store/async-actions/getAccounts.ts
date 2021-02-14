
import ACTIONS from "../actions";
import store from "../index"

import getAccountsService from "../services/accounts.service";

const { dispatch } = store

export default async function getAccountsAction() {

    try {
        const result = await getAccountsService()
        dispatch({ type: ACTIONS.ACCOUNTS.GET_ACCOUNTS_SUCCESS, payload: result })
    } catch (error) {
        console.log(error)
    }

}



// async function getAccounts() {

//     try {
//         // const result = accountService.get()
//         // dispatch(GET_ACCOUNTS_DONE)
//     } catch (error) {

//     }
// }