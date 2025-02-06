


import classes from './NewPost.module.css';

export default function (props) {

  // const stateData = useState("");
  // stateData[0] // current value / 
  // stateData[1] // state upddating funciton

  // const [ enteredBody, setEnteredBody ] = useState('');
  // let enteredBody = '';


  // function ChangeTextHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  return (
    <>
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id='body' required rows={3} onChange={props.onBodyChange} />
        </p>
        
        <p>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' required  onChange={props.onAuthorChange}/>
        </p>
    </form>
    </>
  )
}
