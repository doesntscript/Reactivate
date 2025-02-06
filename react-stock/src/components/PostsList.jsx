import React, { useState } from 'react'

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

export default function () {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);

  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);

  }

  return (
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="DevGui" body="Learning about ReactThreeFiber"/>
    </ul>
    </>
  )
}
