function Greeting(props) {
  console.log(props)
    //const message = "Hello Ana!";
  
    return (
      <div className="Greeting">
        <u>{props.firstName}</u>
      </div>
    );
  }
  
  export default Greeting;
  