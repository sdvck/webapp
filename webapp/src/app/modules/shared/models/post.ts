export class Post {
    title: string;
    content: string;
    author: string;
    datePosted: Date;
    numberOfLikes: number;
    comments: Array<Comment>;
}
