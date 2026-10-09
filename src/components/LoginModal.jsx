import Button from "../style-components/Button";

function LoginModal({...props}){
    return (
        <>
            <div {...props}>
                <input type="text" placeholder="Email or Username"/>
                <input type="password" placeholder="Password"/>
                <Button>Login</Button>
            </div>
        </>
    )
}

export default LoginModal;