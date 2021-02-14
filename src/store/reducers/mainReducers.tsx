import ACTIONS from "../actions"

export interface IState {
    accounts: Array<any>;
    userName: string | null
}

const initialState: IState = { accounts: [], userName: null }
function mainReducer(state = initialState, action: any) {
    switch (action.type) {

        case ACTIONS.REGISTER.USER_REGISTRATION_SUCCESS: {
            alert(action.payload)
            return state;
        }

        case ACTIONS.REGISTER.USER_REGISTRATION_FAILED: {
            alert(action.payload)
            return state;
        }

        case ACTIONS.REGISTER.USER_REGISTRATION_PENDING: {

            return state;
        }

        case ACTIONS.ACCOUNTS.GET_ACCOUNTS_SUCCESS: {
            return { ...state, accounts: [...action.payload] };
        }

        default: {
            return state;
        }
    }
}

export default mainReducer;