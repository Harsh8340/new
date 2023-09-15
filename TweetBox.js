import React, { useState } from 'react';
import { Avatar, Button, IconButton, TextField } from '@mui/material';
import {
  GifOutlined,
  PollOutlined,
  SentimentSatisfiedAltOutlined,
  CalendarTodayOutlined,
  LocationOnOutlined,
  PhotoOutlined,
} from '@mui/icons-material';

import './TweetBox.css';

const TweetBox = () => {
  const [tweetText, setTweetText] = useState('');
  const [charCount, setCharCount] = useState(280);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTweetTextChange = (event) => {
    const text = event.target.value;
    setTweetText(text);
    setCharCount(280 - text.length);
  };

  const handleTweet = () => {
    // Handle the tweet submission here, e.g., send it to an API
    console.log('Tweet:', tweetText);

    // Reset the tweet input and selected file
    setTweetText('');
    setCharCount(280);
    setSelectedFile(null);
  };

  const handlePhotoUpload = (event) => {
    // Handle the photo upload logic here
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="tweetbox">
      <form className="tweetbox__form">
        <Avatar />
        <div className="tweetbox__form-field">
          <TextField
            multiline
            fullWidth
            rows={4}
            placeholder="What's happening?"
            variant="outlined"
            value={tweetText}
            onChange={handleTweetTextChange}
          />
          <div className="tweetbox__icons">
            <IconButton>
              <GifOutlined />
            </IconButton>
            <IconButton>
              <PollOutlined />
            </IconButton>
            <IconButton>
              <SentimentSatisfiedAltOutlined />
            </IconButton>
            <IconButton>
              <CalendarTodayOutlined />
            </IconButton>
            <IconButton>
              <LocationOnOutlined />
            </IconButton>
            {/* Add Photo from My Device option */}
            <input
              type="file"
              accept="image/*"
              id="photo-upload-input"
              style={{ display: 'none' }}
              onChange={handlePhotoUpload}
            />
            <IconButton onClick={() => document.getElementById('photo-upload-input').click()}>
              <PhotoOutlined />
            </IconButton>
          </div>
          {selectedFile && (
            <div className="tweetbox__selected-photo">
              <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
            </div>
          )}
          <div className="tweetbox__bottom">
            <span className="tweetbox__charcount">{charCount}</span>
            <Button
              variant="contained"
              color="primary"
              onClick={handleTweet}
              disabled={tweetText.length === 0 || charCount < 0 || !selectedFile}
            >
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
