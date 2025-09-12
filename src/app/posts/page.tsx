import Link from "next/link";

type Post = {
    id: number;
    title: string;
}

export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul className="list-disc pl-5">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link
                            href={`/posts/${post.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}