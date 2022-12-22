import { useState } from "react";
import { GlobalContainer } from "./Home.style";
import NavHome from "../../components/NavHome";
import FormHome from "../../components/FormHome";

function Home() {
    const [signupPage, setSignupPage] = useState(false);

    return (
    <GlobalContainer>
        <NavHome
            signupPage={signupPage}
            setSignupPage={setSignupPage}
        />
        <FormHome
            signupPage={signupPage}
        />
    </GlobalContainer>
  );
}

export default Home;
