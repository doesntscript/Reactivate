

// const names = ['DevGui', 'GuiDeveloper'];


const Post = (props) => {

//     const [ chosenName , setChosenName] = useState(names[0]);

//     useEffect (() => {
//         const interval = setInterval(() => { 
//         setChosenName( prevName => (prevName === names[0] ? names[1] : names[0]));
//     }, 1000); 

//     return () => clearInterval(interval);

// }, []);




  return (
    <>
    {/* <p> {chosenName} </p>
    <p> React.Js is Awesome! </p>
    */}
    <p> {props.author} </p>
    <p> {props.body} </p>
    </>
)
};

export default Post;