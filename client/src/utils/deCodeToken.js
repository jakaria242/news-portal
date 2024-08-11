import {jwtDecode} from 'jwt-decode'

const deCodeToken = (token)=> {
     if (token) {
        try {
            const decodeToken = jwtDecode(token)
            const expire = new Date(decodeToken.exp * 1000)
            if (new Date() > expire) {
                localStorage.removeItem('newsToken')
                return ""
            }else{
                return decodeToken
            }
        } catch (error) {
            return console.log("token decode faild", error);
        }
     } else {
         return console.log("token nai");
         
     }
}

export default deCodeToken