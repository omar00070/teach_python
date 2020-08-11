// import * as actiontypes from actiontypes

// export const getProfileStart = () => {
//   return {
//     type: actionTypes.GET_PROFILE_START,
//   };
// };

// export const getProfileSuccess = (user) => {
//   return {
//     type: actionTypes.GET_PROFILE_SUCCESS,
//     user
//   };
// };

// export const getProfileFail = (error) => {
//   return {
//     type: actionTypes.GET_PROFILE_FAIL,
//     error: error,
//   };
// };

// export const getPofile = (user) =>{
//   return dispatch => {
//     dispatch(getProfileStart())
//     axios.default.headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${user.token}`
//     }
//     axios.get(`http://127.0.0.1:8000/api/profile/${user.userId}`)
//     .then(res => {

//     })
//   }
// }
