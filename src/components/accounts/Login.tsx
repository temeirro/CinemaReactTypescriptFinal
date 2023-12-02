import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { ILoginDto } from "../../types/login-user";
import { AuthService } from "../../services/auth.service";
import { setTokenFromLocalStorage } from "../../services/localStorage.helper";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<ILoginDto>();
    const navigate = useNavigate();
    const onSubmit = async (user: ILoginDto) => {
        const token = await AuthService.login(user);
        if(token){
            setTokenFromLocalStorage("token", token);
            alert(token);
            navigate("/movies");
        }
        // alert(`Username: ${user.username}, Password: ${user.password}`);
    }
    return (
        <>
            <h2>Login</h2>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("username")}
                        id="username-input"
                        label="Login"
                        type="username"
                        autoComplete="username"
                        style={{ margin: '8px 0' }}
                    />
                    <br></br>
                    <TextField
                        {...register("password")}
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="password"
                        style={{ margin: '8px 0' }}

                    />
                    <br></br>
                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </Box>
        </>
    )
}
export default Login;