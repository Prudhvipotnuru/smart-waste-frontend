import Button from "../style-components/Button";

function LoginModal(){
    return (
        <>
            <div>
                <input type="text" placeholder="Email or Username"/>
                <input type="text" placeholder="Password"/>
                <Button>Login</Button>
            </div>
        </>
    )
}