import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://next_blog_admin:ae4DI3wxs5tTQAsU@cluster0.ykf8cn6.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );
  return client;
}
