import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'japo',
        email: 'japo@test.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    // useEffect( () => {
    //     console.log('Use Effect called');
    // },[]);

    // useEffect( () => {
    //     console.log('formState changed');
    // },[ formState ]);

    // useEffect( () => {
    //     console.log('Email changed');
    // },[ email ]);


  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="test@test.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            ( username === 'japo2' ) && <Message />
        }
    </>
  )
}
