import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();
    const logoutAuth0 = () => {
        logout({ returnTo: window.location.origin })
    }

    return (
        <button onClick={ logoutAwsAndAuth0 }>
            Log Out
        </button>
    );
};

export default LogoutButton;