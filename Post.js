import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import {
  MoreHoriz,
  ChatBubbleOutline,
  Repeat,
  Favorite,
  FavoriteBorder,
  PublishOutlined,
} from '@mui/icons-material';

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [commenting, setCommenting] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, { user: 'YourUsername', text: commentText }]);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__header-info">
          <h3>Harsh</h3>
          <h4>@Harsh8340</h4>
        </div>
        <MoreHoriz className="post__header-icon" />
      </div>

      <div className="post__description">
         This is My first Post.
      </div>
      <div className='post__media'>
        <img src='https://play-lh.googleusercontent.com/vnU_vABlis6Gzia4YTv9cux9WAS2H5JHXAppzB2yKRtsOmsAHZH1xnjtmgwfWoptSuPH' alt='ivykids'></img>
      </div>
      <div className='post__footer'>
        <ChatBubbleOutline onClick={() => setCommenting(!commenting)} />
        <Repeat />
        <div
          className={`post__icon ${liked ? 'post__liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? <Favorite /> : <FavoriteBorder />}
          {likes > 0 && <span>{likes}</span>}
        </div>
        <PublishOutlined />
      </div>

      {commenting && (
        <div className="post__comment">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleComment}>Post</button>
        </div>
      )}

      <div className="post__comments">
        {comments.map((comment, index) => (
          <div className="post__comment" key={index}>
            <strong>{comment.user}</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
