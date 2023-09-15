import React from 'react'
import './Widgets.css';
import {TwitterTimeleineEmbed} from "react-TwitterTimeleineEmbed";
const Widgets = () => {
  return (
    <div className='widgets'>
      <TwitterTimeleineEmbed
      sourceType="profile"
      screenName="harsh"
      options={{ height: 400}}
      />
    </div>
  )
}

export default Widgets;
