import { useState } from "react";
import { Button } from "../../utils/styles";
import { Form, Fields } from './FormHome.style'

function FormHome({ signupPage }) {
    const [input, setInput] = useState({});
    
    function submitForm(inputs) {
       let valid = true;
       const keys = Object.keys(inputs)
        for (let i = 0; i < keys.length; i++) {
            valid &= inputs[keys[i]].reportValidity(); 
            if (!valid) {
                break;
            }
        }
        if (valid) {
            alert(signupPage ? "Utilisateur enregistré" : "Utilisateur connecté")
        }
    };

    return (
        <Form onSubmit={() => submitForm(input)}>
            <Fields>
                <label htmlFor="identifiant">Identifiant</label>
                <input type="text" name="identifiant" onChange={signupPage ? (
                    input.name && !input.pwd && !input.email ? event => (
                        setInput({ name: event.target.value })
                        ) : (
                            event => setInput({ ...input, name: event.target.value })
                        )
                ) : (
                    input.name && !input.pwd ? event => (
                        setInput({ name: event.target.value })
                        ) : (
                            event => setInput({ ...input, name: event.target.value })
                        )
                )} required />
            </Fields>
            {signupPage ? (
                <Fields>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={input.email && !input.name && !input.pwd ? event => (
                    setInput({ email: event.target.value })
                    ) : (
                        event => setInput({ ...input, email: event.target.value })
                    )} required />
                </Fields>
            ) : null}
            <Fields>
                <label htmlFor="mot-de-passe">Mot de passe</label>
                <input type="password" name="mot-de-passe" onChange={signupPage ? (
                    input.pwd && !input.name && !input.email ? (
                        event => setInput({ pwd: event.target.value })
                    ) : (
                        event => setInput({ ...input, pwd: event.target.value})
                    )
                ) : (
                    input.pwd && !input.name ? (
                        event => setInput({ pwd: event.target.value })
                    ) : (
                        event => setInput({ ...input, pwd: event.target.value})
                    )
                )} required />
            </Fields>
            <Button type="submit" value={signupPage ? "S'enregistrer" : "Connexion"} />
        </Form>
    );
};

export default FormHome