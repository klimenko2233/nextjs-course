import Link from "next/link";

type Comment = {
    id: number;
    name: string;
    email: string;
}

export default async function CommentsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments:Comment[] = await res.json();

    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Comments</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <Link
                            href={`comments/${comment.id}`}
                            className="text-blue-600 hover:underline"
                        >
                                {comment.name} ({comment.email})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}