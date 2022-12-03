// import { setUserAction } from "../reducers/userReducer"
// @ts-ignore
console.log("123")

//
// export const handleUserSignUp = (email: string, password: string, username: string, callback: () => void = () => {}) => {
//     return (dispatch: any) => {
//         UserService.userCreate(email, password, username)
//         .then(user => dispatch(setUserAction(user)))
//         .then(() => callback())
//         .catch(console.error)
//     }
// }
//
// export const handleUserSignIn = (email: string, password: string, callback: () => void) => {
//     return (dispatch: any) => {
//         UserService.tokenCreate(email, password)
//             .then(tokens => {
//                 for (let token in tokens) {
//                     localStorage.setItem(token, tokens[token])
//                     console.log(localStorage.getItem(token), token)
//                 }
//                 return UserService.getUser(tokens.access)
//             })
//             .then(user => dispatch(setUserAction(user)))
//             .then(() => callback())
//             .catch(console.error)
//     }
// }
//
// export const handleGetUser = (accessToken: string, refreshToken: string) => {
//     return (dispatch: any) => {
//         UserService.getUser(accessToken)
//             .then(user => dispatch(setUserAction(user)))
//             .catch(() => UserService.accessTokenUpdate(refreshToken))
//             .then(token => {
//                 if (typeof token === "object") {
//                     localStorage.setItem("access", token.access)
//                     return UserService.getUser(token.access)
//                 }
//             })
//             .then(user => {
//                 if (typeof user === "object") {
//                     dispatch(setUserAction(user))
//                 }
//             })
//             .catch(console.error)
//     }
// }