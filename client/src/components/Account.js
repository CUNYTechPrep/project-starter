import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LogoutButton from './LogoutButton';
const Account = () => {
    const auth = useContext(AuthContext);
    const { user } = auth
    return(
        <div>
            <h2>ACCOUNT</h2>
            <p>{user.email}</p>
            <LogoutButton />

            <div>
                <h3>Order history</h3>
                <p>You haven't placed any orders yet.</p>
            </div>
        </div>
    )
}

export default Account;