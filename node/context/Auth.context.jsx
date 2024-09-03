import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  let initialUser = null;

  try {
    initialUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }

  const [user, setUser] = useState(initialUser);

  const login = async (formData) => {
    const res = await axios.post(
      "http://localhost:5550/api/auth",
      formData
    );
    // setUser(res.data);
    console.log(res.data);

    // console.log(res.data.role);
  };
  const logout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout");
    setUser(null);

    // console.log(res.data.role);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};