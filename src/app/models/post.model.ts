export interface Post {
  _id: String;
  title: String;
  publishedDate: Date;
  updateDate: Date;
  timeToRead: Number;
  content: String;
  author: String;
  categories: String[]
}
