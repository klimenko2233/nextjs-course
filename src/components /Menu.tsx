import Link from 'next/link';

export default function Menu() {
    return (
        <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/comments">Comments</Link>
        </nav>
    );
}

