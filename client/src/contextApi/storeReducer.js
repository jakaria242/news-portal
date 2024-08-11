 import deCodeToken from "../utils/deCodeToken"


 const storeReducer = (state,action)=>{
     const { type, payload } = action
     if (type === 'login-successful') {
        // console.log(state);
        // console.log(type);
        // console.log(payload);
         state.token = payload.token
         state.userInfo = deCodeToken(payload.token)
        
     }
    return state
 }

 export default storeReducer