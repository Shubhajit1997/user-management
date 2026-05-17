import {useState} from 'react';

function UserForm() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        console.log('Name: ', name, 'Value: ', value);
        setUser({
            ...user,
            [name]: value
        });
        console.log('User object: ', user);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('User object: ', user);
    }

  return (
    <div> 
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: </label>
                <input type="text"
                       name="firstName"
                       value={user.firstName}
                       onChange={(e)=>{setUser({...user, firstName: e.target.value})}} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text"
                       name="lastName"
                       value={user.lastName}
                       onChange={handleChange}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email"
                       name="email"
                       value={user.email}
                       onChange={handleChange}/>
            </div>

            <button type="submit"> SUBMIT </button>
        </form>
    </div>
  );
}

export default UserForm;