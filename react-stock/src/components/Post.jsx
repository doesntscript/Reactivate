import React from 'react'

import classes from './Post.module.css';
// const  names = ['DevGui', 'DeveloperGui']

export default function Post(props) {

    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    

  return (
    <div className={classes.post} >
    <p className={classes.author}> {props.author} </p>
    <p className={classes.text}> {props.body} </p>
    </div>
  );
};
