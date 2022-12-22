import { List, ListItem } from './NavHome.style'

function NavHome({ signupPage, setSignupPage }) {
    return (
        <nav>
            <List>
                <ListItem selected={signupPage ? false : true} onClick={() => setSignupPage(false)}>login</ListItem>
                <ListItem selected={signupPage ? true : false} onClick={() => setSignupPage(true)}>signup</ListItem>
            </List>
        </nav>
    );
};

export default NavHome;