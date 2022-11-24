import { Button } from "../../components/Button/styles";
import * as F from "../../components/form/styles";
import { Input } from "../../components/Input/styles";


export const SignUp = () => {
    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <F.Form action="">
                <F.Title>Create your account</F.Title>
                <Input type="text" placeholder="Name"/>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <Button>Sign Up</Button>
                <a href="#">Do you already have account? Sign In</a>
            </F.Form>
        </div>
    );
};