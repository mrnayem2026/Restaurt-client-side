import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import singInimg from '../../assets/signupPic.png';
import github from '../../assets/github.png';
import google from '../../assets/google.png';

const Login = () => {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const { setUser, login } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.state);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError) {
            e.target.email.focus();
            return;
        } else if (passwordError) {
            e.target.password.focus();
            return;
        }

        // login
        login(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            navigate(location.state.pathname || "/");
        });
    };

    // uncontrolled component => controlled component
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else if (!/.+[A-Z].+/.test(passwordInput)) {
            setPasswordError("Password must contain at least one capital letter");
        } else {
            setPasswordError("");
        }
    };

    const handleEmail = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        if (
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                emailInput
            )
        ) {
            setEmailError("Please provide a valid email");
        } else {
            setEmailError("");
        }
    };

    // one way data binding

    return (
        <div className="mt-20 container mx-auto  flex gap-56" >

            <div>
                <img src={singInimg} alt="" />
            </div>

            {/* login from strat */}
            <div className="mt-24 bg-gray-100 h-2/4 p-10">
                <form onSubmit={handleSubmit} className="">
                    <div className="relative z-0  w-full mb-6 group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleEmail}
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer ${email
                                ? emailError
                                    ? "border-red-500"
                                    : "border-green-500"
                                : "border-white focus:border-blue-600"
                                }`}
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {emailError && <span className="error text-black">{emailError}</span>}
                    </div>

                    <div className="relative z-0  w-full mb-6 group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handlePassword}
                            className={`block py-2.5 px-0  w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer ${password
                                ? passwordError
                                    ? "border-red-500"
                                    : "border-green-500"
                                : "border-gray-300 focus:border-blue-600"
                                }`}
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {passwordError && <span className="error text-black">{passwordError}</span>}
                    </div>

                    {/* <button className="btn btn-outline btn-info rounded-xl w-2/4">Login</button> */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <button className='btn hover:bg-zinc-800 hover:text-slate-50 bg-slate-50 text-black '><img src={google} alt="google icon" className='w-10 pr-2' />Singup with google</button>
                        <button className='btn hover:bg-blue-300 hover:text-black bg-slate-50 text-black '><img src={github} alt="github icon" className='w-10 pr-2' />Singup with github</button>
                        <button className="btn hover:bg-zinc-800 hover:text-slate-50 bg-slate-50 text-black  rounded-xl w-2/4">Login</button>
                    </div>

                    <p className="text-black">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" state={location.state} className="link">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
            {/* login from end */}
        </div>
    );
};

export default Login;
