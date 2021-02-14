
import axios from "axios"
import { IChangePassword } from "../../components/containers/pages/changePassword";
import { IUserDetails } from "../../components/containers/pages/register";
import ACTIONS from "../actions";
import store from "../index"
import changePasswordService from "../services/changePassword.service";

const { dispatch } = store;



export async function changePasswordAction(changePasswordDetails: IChangePassword) {

    try {
        const result = await changePasswordService(changePasswordDetails)
        alert(result)
    } catch (ex) {
        console.log(ex)
        // dispatch({ type: ACTIONS.REGISTER.USER_REGISTRATION_FAILED, payload: "Something went wrong" })
        // console.log("we had an error", ex)
    } finally {
        // dispatch({ type: ACTIONS.MOVIES.IS_CURRENT_MOVIE_LOADING, isCurrentMovieLoading: false })
    }
}

