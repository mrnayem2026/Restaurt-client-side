import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import registerImg from '../../assets/register.png';
import { updateProfile } from "firebase/auth";


const Register = () => {

    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const { createUser } = useContext(AuthContext);

    // Handle Name 
    const handleName = (e) => {
        const nameInput = e.target.value;
        setName(nameInput)
    }

    // Handle Photo URL
    const handlePhotoUrl = (e) => {
        const PhotoUrlInput = e.target.value;
        setPhotoUrl(PhotoUrlInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError) {
            e.target.email.focus();
            return;
        } else if (passwordError) {
            e.target.password.focus();
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('');
                e.target.reset();
                setSuccess('User has been created successfully');
                navigate("/");
                updateUserData(loggedUser, name, photoUrl);
                console.log(loggedUser, name, photoUrl);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    };

    // uncontrolled component => controlled component
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
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


    const updateUserData = (loggedUser, name, photoUrl) => {
        updateProfile(loggedUser, {
            displayName: name,
            photoURL: photoUrl
        }).then(() => {
            console.log('user name updated')
        })
            .catch(error => {
                setError(error.message);
            })


    }
    // one way data binding

    return (
        <div className="mt-20 container mx-auto  flex gap-56" >

            {/* Register from strat */}
            <div className="mt-24 bg-gray-100 h-2/4 p-10">
                <form onSubmit={handleSubmit} className="">
                    <div className="py-6">
                        <p className='text-red-500'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                    {/* name  */}
                    <div className="relative z-0  w-full mb-6 group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleName}
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer ${email
                                ? emailError
                                    ? "border-red-500"
                                    : "border-green-500"
                                : "border-white focus:border-blue-600"
                                }`}
                            placeholder=" "

                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                        {/* {emailError && <span className="error text-black">{emailError}</span>} */}
                    </div>

                    {/* email  */}
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

                    {/* password  */}
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

                    {/* photoURL  */}
                    <div className="relative z-0  w-full mb-6 group">
                        <input
                            type="text"
                            name="name"
                            id="photo"
                            value={photoUrl}
                            onChange={handlePhotoUrl}
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer ${email
                                ? emailError
                                    ? "border-red-500"
                                    : "border-green-500"
                                : "border-white focus:border-blue-600"
                                }`}
                            placeholder=" "
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Image URL
                        </label>
                        {/* {emailError && <span className="error text-black">{emailError}</span>} */}
                    </div>

                    {/* <button className="btn btn-outline btn-info rounded-xl w-2/4">Login</button> */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <button className="btn hover:bg-zinc-800 hover:text-slate-50 bg-slate-50 text-black  rounded-xl w-2/4">Register</button>
                    </div>

                    <p className="text-black">
                        Have an account?{" "}
                        <Link to="/login" state={location.state} className="link">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
            {/* Registerfrom end */}
            <div>
                <img src={registerImg} alt="" />
            </div>
        </div>
    );
};

export default Register;
