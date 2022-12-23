import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../utils/styles";
import { Form, Fields, FieldInputs } from './FormHome.style';


function FormHome({ signupPage }) {
    const [loginInput, setLoginInput] = useState({
        identifier: '',
        password: ''
    });
    const [loginValidation, setloginValidation] = useState({
        identifier: '',
        password: ''
    });
    const onUpdateLoginFields = event => {
        const { name, value } = event.target;
        setLoginInput({ ...loginInput, [name]: value });
    };

    const checkLoginValidation = () => {
        let errors = loginValidation;
        if (!loginInput.identifier.trim()) {
            errors.identifier = 'Veuillez entrer un identifiant';
        } else {
            errors.identifier = '';
        }
        if(!loginInput.password.trim()) {
            errors.password = 'Veuillez entrer un mot de de passe'
        } else {
            errors.password = '';
        }
        setloginValidation(errors);
    };

    useEffect(() => {
        checkLoginValidation();
    }, [loginInput]);
    
    const onSubmitLoginForm = event => {
        event.preventDefault();
        const { identifier, password } = loginValidation;
        if (!!identifier && !!password) {
            return;
        }
        alert(JSON.stringify(loginInput, null, 2));
    }

    const [signupInput, setSignupInput] = useState({
        identifier: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [signupValidation, setSignupValidation] = useState({
        identifier: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const onUpdateSignupFields = event => {
        const { name, value } = event.target;
        setSignupInput({ ...signupInput, [name]: value });
    };
    const checkSignupValidation = () => {
        let errors = signupValidation;
        if (!signupInput.identifier.trim()) {
            errors.identifier = 'Veuillez entrer un identifiant';
        } else {
            errors.identifier = '';
        }
        if (!signupInput.email.trim()) {
            errors.identifier = 'Veuillez entrer un email';
        } else if (!new RegExp(/\S+@\S+\.\S+/).test(signupInput.email)) {
            errors.email = 'le format de l\'email est incorrect';
        } else {
            errors.identifier = '';
        }
        if(!signupInput.password.trim()) {
            errors.password = 'Veuillez entrer un mot de de passe'
        } else {
            errors.password = '';
        }
        if(!signupInput.confirmPassword.trim()) {
            errors.confirmPassword = 'Veuillez entrer un mot de de passe'
        } else if (signupInput.confirmPassword.trim() !== signupInput.password.trim()) {
            errors.confirmPassword = 'Le mot de passe ne correspond pas au mot de passe de confirmation';
        } else {
            errors.password = '';
        }
        setSignupValidation(errors);
    };

    useEffect(() => {
        checkSignupValidation();
    }, [signupInput]);

    const onSubmitSignupForm = event => {
        event.preventDefault();
        const { identifier, password } = signupValidation;
        if (!!identifier && !!password) {
            return;
        }
        alert(JSON.stringify(signupInput, null, 2));
    };
    

    return (
        <Form onSubmit={signupPage ? onSubmitSignupForm : onSubmitLoginForm}>
            <Fields>
                <label htmlFor="identifier">Identifiant</label>
                <FieldInputs type="text" name="identifier" onBlur={signupPage ? onUpdateSignupFields : onUpdateLoginFields}  />
                {loginValidation.identifier && <p>{loginValidation.identifier}</p>}
            </Fields>
            {signupPage ? (
                <Fields>
                    <label htmlFor="email">Email</label>
                    <FieldInputs type="email" name="email" onChange={onUpdateSignupFields} required />
                </Fields>
            ) : null}
            <Fields>
                <label htmlFor="password">Mot de passe</label>
                <FieldInputs type="password" name="password" onBlur={signupPage ? onUpdateSignupFields : onUpdateLoginFields}  />
            </Fields>
            {loginValidation.password && <p>{loginValidation.password}</p>}
            {signupPage ? (
                <Fields>
                    <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
                    <FieldInputs type="password" name="confirmPassword" onChange={onUpdateSignupFields}  required />
                </Fields>
            ) : null}
            <Button type="submit" value={signupPage ? "S'enregistrer" : "Connexion"} />
        </Form>
    );
};

export default FormHome