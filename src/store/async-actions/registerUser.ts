
import axios from "axios"
import { IUserDetails } from "../../components/containers/pages/register";
import ACTIONS from "../actions";
import store from "../index"
import registerService from "../services/register.service";

const { dispatch } = store;



export async function registerUser(userDetails: IUserDetails) {

    try {
        const result = await registerService(userDetails)
        dispatch({ type: ACTIONS.REGISTER.USER_REGISTRATION_SUCCESS, payload: result })
    } catch (ex) {
        console.log(ex)
        dispatch({ type: ACTIONS.REGISTER.USER_REGISTRATION_FAILED, payload: "Something went wrong" })
        // console.log("we had an error", ex)
    } finally {
        // dispatch({ type: ACTIONS.MOVIES.IS_CURRENT_MOVIE_LOADING, isCurrentMovieLoading: false })
    }
}

