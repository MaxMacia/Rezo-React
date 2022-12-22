import { Button } from "../../utils/styles";
import { Form, Fields } from './FormHome.style'

function FormHome({ signupPage }) {
    return (
        <Form>
            <Fields>
                <label htmlFor="identifiant">Identifiant</label>
                <input type="text" name="identifiant" required />
            </Fields>
            {signupPage ? (
                <Fields>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </Fields>
            ) : null}
            <Fields>
                <label htmlFor="mot-de-passe">Mot de passe</label>
                <input type="password" name="mot-de-passe" required />
            </Fields>
            <Button type="submit" value={signupPage ? "S'enregistrer" : "Connexion"} />
        </Form>
    );
};

export default FormHome