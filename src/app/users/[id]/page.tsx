type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
};

type Props = {
    params: { id: string };
};

export default async function UserPage({ params }: Props) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user: User = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
}
