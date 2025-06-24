import { useEffect, useState } from "react";
import type { Post } from "../types/index";
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";


const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>

      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
export default Posts;