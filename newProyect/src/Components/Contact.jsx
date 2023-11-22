function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  
  function Component3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }


function Contact() {

    const [user, setUser] = useState("Jesse Hall");

    
    return ( 
        <>
             <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
     );
}

export default Contact;