import { useState } from 'react';
import './Admin.scss';
import { LoginForm, Dashboard } from '../../components/';

const Admin = () => {
    const [isLogged, setIsLogged] = useState(false);
    
    return(
        <div className="admin-container">
            {isLogged ? <Dashboard /> : <LoginForm setIsLogged={setIsLogged} />}
        </div>
    );
}

export default Admin;