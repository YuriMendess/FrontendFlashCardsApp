import { Button } from "../../components/Button/styles";
import * as F from "../../components/form/styles";
import { Input } from "../../components/Input/styles";


export const SignIn = () => {
    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <F.Form action="">
                <F.Title>Login</F.Title>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Password"/>
                
                <Button>Sign Up</Button>
                <a href="#">Do you not have account? Sign Up</a>
            </F.Form>
        </div>
    );
};