// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import app from "../components/Header/Firebase";

// export const authContext = React.createContext();

// const AuthContextProvider = ({ children }) => {
//   const [errorMsg, setErrorMsg] = useState("");

//   const navigate = useNavigate();

//   const handleRegister = () => {
//     app
//       .auth()
//       .createUserWithEmailAndPassword(gmail, password)
//       .then(() => {
//         navigate("/profileCreate");
//       })
//       .catch(err => {
//         switch (err.code) {
//           case "auth/email-already-in-use":
//           case "auth/invalid-email":
//             setErrorMsg("Email already in use or invalid");
//             break;
//           case "auth/weak-password":
//             setErrorMsg("Weak password");
//             break;
//         }
//       });
//   };
//   const handleLogin = () => {
//     app
//       .auth()
//       .signInWithEmailAndPassword(gmail, password)
//       .then(() => navigate("/"))
//       .catch(err => {
//         switch (err.code) {
//           case "auth/user-disabled":
//           case "auth/invalid-email":
//           case "auth/user-not-found":
//           case "auth/wrong-password":
//             setErrorMsg("Invalid mail or password");
//             break;
//         }
//       });

//     return (
//       <authContext.Provider
//         value={{
//           name,
//           gmail,
//           password,
//           password2,
//           setName,
//           setGmail,
//           setPassword,
//           setPassword2,
//         }}>
//         {children}
//       </authContext.Provider>
//     );
//   };
// };

// export default AuthContextProvider;
