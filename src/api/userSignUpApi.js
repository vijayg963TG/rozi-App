import axios from "axios";
import { getRootUrl } from "./getRootUrl";
import { setError, setLoading, setStatusCode, setSuccessMessage } from "../features/slices/signupSlice";
const ROOT_URL = getRootUrl();

//  user signup
 
export const userSignup = (data) => async(dispatch) => {
    const Url = `${ROOT_URL}/signup`;
    const body = {
    user:{
    first_name:data.firstname,
    last_name:data.lastname,
    company_name:data.companyname,
    password_confirmation:data.confirmpassword,
    password:data.password,
    email:data.email,
    mobile_number:data.mobile_number
    }
    };
    try {
        dispatch(setLoading(true))
       const response = await axios.post(Url,body)
       dispatch(setStatusCode(response.data.status.code))
       if (response.data.status.code == 200) {
        dispatch(setSuccessMessage(response.data.status.message))
       }
        
    } catch (error) {
        dispatch(setStatusCode(error.response.data.status.code))
        dispatch(setError(error.response.data.status.message))

        
    }
}