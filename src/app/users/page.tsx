import Link from 'next/link';

type User = {
    id: number;
    name: string;
    email: string
};

export default async function UsersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
                            {user.name} ({user.email})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

