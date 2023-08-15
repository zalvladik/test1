import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import './styles.css';
import { fetchComments } from 'fetch/fetch';

const Comments = ({postId}) => {
  const [arrayComments, setArraycomments] = useState([]);

  useEffect(() => {
    fetchComments(postId).then((comments) => {
        setArraycomments(comments)
    });
  }, [postId]);

  if (!arrayComments) {
    return <div>here not eveilable comments</div>;
  }

  if (arrayComments) {
    return (
        <div className="comments_container">
        <h1 className="title_Comments">COMMENTS:</h1>
        <ul className="comments_list">
          {arrayComments.map(comment =>
            <li key={nanoid()} className="comments_item">
            <p className="comments_name">{comment.name}</p>
            <p className="comments_content">Mail: {comment.email}</p>
            <p className="comments_content">Text: {comment.body}.</p>
          </li>
          )}
        </ul>
      </div>
    );
  }
};

export default Comments;
