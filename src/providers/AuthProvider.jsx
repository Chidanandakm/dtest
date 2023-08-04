// "use client";

// import { useRouter } from "next/navigation";
// import { createContext, useEffect } from "react";

// export const AuthContext = createContext({});

// const AuthProvider = ({ children }) => {
//   const router = useRouter();
//   const email = "distinct@gmail.com";
//   const password = "distinct123";
//   const handleLogin = (values) => {
//     if (values.email === email && values.password === password) {
//       localStorage.setItem("auth", true);
//       navigate("/");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };
//   useEffect(() => {
//     const authenticated = localStorage.getItem("auth");
//     console.log(authenticated);
//     if (!authenticated) {
//       router.push("/login");
//     }
//   }, [router]);

//   return (
//     <AuthContext.Provider value={{ handleLogin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
