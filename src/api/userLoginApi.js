import axios from "axios";
import { setError, setLoading, setUser } from "../features/slices/loginSlice";
const ROOT_URL = 'SXXFKDFNSDLF'
const BASE_URL = 'DFSDFSDFSDF'



//  user login
 
export const userLogin =()=>async(dispatch)=>{
    const Url = `${ROOT_URL+BASE_URL}/ENDPOINT`;
    const body ={
        "body here":body
    };
    try {
        dispatch(setLoading(true))
       const response =  axios.post(Url,body)
       dispatch(setUser(response))
        
    } catch (error) {
        dispatch(setError(error.response.data.message))

        
    }
}