import {useState} from 'react';
import TextFields from './TextFields';

function UserForm({ onAddUser }) {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddUser(user);
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <TextFields 
                label="First Name:"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
            />
            <TextFields 
                label="Last Name:"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
            />
            <div>
                <label>Email:</label>
                <input type="email"
                       name="email"
                       value={user.email}
                       onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password"
                       name="password"
                       value={user.password}
                       onChange={handleChange} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password"
                       name="confirmPassword"
                       value={user.confirmPassword}
                       onChange={handleChange} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date"
                       name="dob"
                       value={user.dob}
                       onChange={handleChange} />
            </div>
            <button type="submit"> REGISTER </button>
        </form>
    </div>
  );
}

export default UserForm;