import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useFetch from '../../features/useFetch';
    
export default function Posts() {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         async function loadPosts() {
//             const response = await fetch('/wp-json/wp/v2/posts');
//             if(!response.ok) {
//                 // oups! something went wrong
//                 return;
//             }
    
//             const posts = await response.json();
//             setPosts(posts);
//         }
    
//         loadPosts();
//    }, [])
    const posts = useFetch('http://localhost:18002/wp-json/wp/v2/posts')
  return (
    <Grid container spacing={2}>
      {posts && posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <Card>
           <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
     ))}
    </Grid>
 );
}