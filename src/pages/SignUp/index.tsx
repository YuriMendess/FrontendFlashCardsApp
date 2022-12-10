import { Button } from "../../components/Button/styles";
import * as F from "../../components/form/styles";
import { Input } from "../../components/Input/styles";
import { Label } from "../../components/label/styles";
import { Flex } from "../../styles/layout";
import Image from "../../assets/imageLogin.png";

export const SignUp = () => {
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
        >
            <F.Box>
                <F.Form action="">
                    <F.Title>Create your account</F.Title>
                    <Label htmlFor="name">
                        Name
                        <Input type="text" name="name"/>
                    </Label>

                    <Label htmlFor="email">
                        Email
                        <Input type="email" name="email"/>
                    </Label>

                    <Label htmlFor="">
                        Password
                        <Input type="password"/>
                    </Label>

                    <Label htmlFor="">
                        Confirm your password
                        <Input type="password"/>
                    </Label>
                    
                    <Button style={{marginBottom: "2rem"}}>Sign Up</Button>
                    <a href="#">Do you already have account? Sign In</a>
                </F.Form>
                <F.ImageBox>
                    <img src={Image}/>
                </F.ImageBox>
            </F.Box>
        </Flex>
    );
};