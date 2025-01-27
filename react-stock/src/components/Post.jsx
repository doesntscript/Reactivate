import { useEffect, useState } from "react";

const names = ['DevGui', 'GuiDeveloper'];


const Post = () => {

    const [ chosenName , setChosenName] = useState(names[0]);

    useEffect (() => {
        const interval = setInterval(() => { 
        setChosenName( prevName => (prevName === names[0] ? names[1] : names[0]));
    }, 10000); 

    return () => clearInterval(interval);

}, []);

  return (
    <>
    <p> {chosenName} </p>
    <p> React.Js is Awesome! </p>
    </>
)
};

export default Post;