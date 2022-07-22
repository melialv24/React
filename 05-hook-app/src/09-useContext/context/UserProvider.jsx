import { useState } from "react";
import { UserContext } from "./UserContext";

const [user, setUser] = useState({});

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
