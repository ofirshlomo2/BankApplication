import axios from "axios"
import { BASE_URL } from "./register.service"


const API_URL = `${BASE_URL}/account`
export default async function getAccountsService() {
    const { data } = await axios.get(`${API_URL}`)
    const modeldedAccounts = createAccounts(data)
    return modeldedAccounts
}

function createAccounts(data: Array<any>) {
    if (!Array.isArray(data)) return;
    const accountObjReduce = data.reduce((accountsObj, currentAccountUser) => {
        const { accountId, firstName, email, createdAt } = currentAccountUser;
        const newAccount = !accountsObj[accountId] ? { accountId, createdAt, users: [{ firstName, email }] } : {
            ...accountsObj[accountId],
            users: [...accountsObj[accountId].users, { firstName, email }]
        }
        return {
            ...accountsObj, [accountId]: newAccount
        }
    }, {})
    return Object.values(accountObjReduce)
}



//reduce 2
 // if (accountsObj[accountId]) {
        //     return {
        //         ...accountsObj, [accountId]: {
        //             ...accountsObj[accountId],
        //             users: [...accountsObj[accountId].users, { firstName, email }]
        //         }
        //     }
        // } else {
        //     return { ...accountsObj, [accountId]: { accountId, createdAt, users: [{ firstName, email }] } }
        // }




//reduce implementation
// console.log(data)
// let accountObject: any = {};
// for (let index = 0; index < data.length; index++) {
//     const accountUser = data[index];
//     const currentAccount = accountObject[accountUser.accountId];
//     if (currentAccount) {
//         currentAccount.users.push({ firstName: accountUser.firstName, email: accountUser.email })
//     } else {
//         const { accountId, createdAt, firstName, email } = accountUser;
//         accountObject[accountUser.accountId] = { accountId, createdAt, users: [{ firstName, email }] }
//     }

// }
// console.log(accountObject)
// i have:

// Object
// accountId: 123
// createdAt: "2021-02-07T16:02:28.000Z"
// email: "sapiro@gmail.com"
// firstName: "sapiro"
// __proto__: Object
// accounts.service.ts:16 
// Object
// accountId: 123
// createdAt: "2021-02-07T16:02:28.000Z"
// email: "refaat1123@gmail.com"
// firstName: "refaat"
// __proto__: Object

// i need

// Object
// accountId: 123
// createdAt: "2021-02-07T16:02:28.000Z"
// users: [ { firstName: "refaat" ,email: "sapiro@gmail.com" },  { firstName: "refaat" ,email: "refaat1123@gmail.com" } ] 
// __proto__: Object


// "{"123":{"accountId":123,"createdat":"111","users":[{"name":"sapir"},{"name":"rafa"}]},"11111":{"accountId":123,"createdat":"111","users":[{"name":"sapir"}]}}"
