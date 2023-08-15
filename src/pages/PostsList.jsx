import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './styles.css';
import { getListPosts } from 'fetch/fetch';
import Comments from 'components/Comments';

const PostsList = () => {
  const [arrayPosts, setArrayPosts] = useState([]);

  useEffect(() => {
    const resultFetch = getListPosts();
    resultFetch.then(result => setArrayPosts(result));
  }, []);

  const toggleVanishComments = e => {
    e.currentTarget.classList.toggle('vanishComments');
  };

  return (
    <div className="posts_container">
      <h1 className="title_Post">POSTS:</h1>
      <ul className="posts_list">
        {arrayPosts.map(post => (
          <li
            className="posts_item"
            key={nanoid()}
            onClick={toggleVanishComments}
          >
            <h4 className="posts_title">{post.title}</h4>
            <p className="posts_body">{post.body}</p>

            <Comments postId={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
