import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button.jsx";
import LogoutButton from "./logout-button.jsx";

export default function NavBarButtons() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};