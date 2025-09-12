type Post = {
    id: number;
    title: string;
    body: string;
};

type Props = { params: { id: string } };

export default async function PostPage({ params }: Props) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post: Post = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}