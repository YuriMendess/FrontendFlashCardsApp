import { Button } from "../../components/Button/styles";
import * as F from "../../components/form/styles";
import { Input } from "../../components/Input/styles";
import { Label } from "../../components/label/styles";


export const SignIn = () => {
    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>

            </div>
            <F.Form action="">
                <F.Title>Login</F.Title>
                <Label>
                    <Input type="email" placeholder="E-mail"/>
                </Label>
                
                <Label htmlFor="">
                    <Input type="password" placeholder="Password"/>
                </Label>                
                <Button style={{marginBottom: "2rem"}}>Sign Up</Button>
                <a href="#">Don't have an account? Sign Up</a>
            </F.Form>
        </div>
    );
};