import {useEffect, useState} from 'preact/hooks';
import { api } from '../utils/api';

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        api.url('/functions/users').get().json().then((users) => setUsers(users as User[]));
    }, [])

    return (
        <div>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;
