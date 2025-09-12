type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};
type Props = { params: { id: string } };


export default async function CommentPage({ params }: Props) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`);
    const comment:Comment = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{comment.name}</h1>
            <p>{comment.body}</p>
        </div>
    );
}