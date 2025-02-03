import React from 'react'

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

export default function () {

  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
        <Post author="GuiDeveloper" body="React.js is Awesome!" />
        <Post author="DevGui" body="Learning about ReactThreeFiber"/>
    </ul>
    </>
  )
}
