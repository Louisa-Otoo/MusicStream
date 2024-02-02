import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../components/styles/register.css'


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmission = async(data) => {
        console.log(data)
    }


  return (
    <>
        <div className="registerContainer">
            <form action="" className="innerContainer" onSubmit={handleSubmit(onSubmission)}>
                <h2 className="signUp">Create an account</h2>

                <div className="registerElements">
                    <div className="block">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" placeholder='Name' className="registration"
                            {...register('name', {
                                required: "Name is required",
                                minLength: {value: 4, message:"Name should be at least 4 characters"}
                            })}
                            />
                            <small className="invalid-msg">
                                {errors.name && <p>{errors.name.message}</p>}
                            </small>
                    </div>

                    <div className="block">
                        <label htmlFor="">Email</label>
                        <input 
                            type="text" placeholder='name@example.com' className="registration"
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value:  /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Invalid email format"
                                },
                            })}
                            />
                            <small className="invalid-msg">
                                {errors.email && <p>{errors.email.message}</p>}
                            </small>
                    </div>

                    <div className="block">
                        <label htmlFor="">Username</label>
                        <input 
                            type="text" placeholder='username' className="registration"
                            {...register('username', {
                                required: "Username is required",
                                minLength: {value: 4, message:"Username should be at least 4 characters"}
                            })}
                            />
                            <small className="invalid-msg">
                                {errors.username && <p>{errors.username.message}</p>}
                            </small>
                    </div>

                    <div className="block">
                        <label htmlFor="">Age</label>
                        <input 
                            type="text" placeholder='18' className="registration"
                            {...register('age', {
                                required: "Age is required",
                                
                            })}
                            />
                            <small className="invalid-msg">
                                {errors.age && <p>{errors.age.message}</p>}
                            </small>
                    </div>

                    <div className="block">
                        <label htmlFor="">Password</label>
                        <input 
                            type="text" placeholder='password' className="registration"
                            {...register('password', {
                                required: "Input a password",
                                minLength: {value: 8, message:"Password should be at least 8 characters"}
                            })}
                            />
                            <small className="invalid-msg">
                                {errors.password && <p>{errors.password.message}</p>}
                            </small>
                    </div>

                    <div className="block">
                        <label htmlFor="">Confirm Password</label>
                        <input 
                            type="text" placeholder='confirm password' className="registration"
                            {...register('confirm_password', {
                                required: "Confirm your password",
                                minLength: {value: 8, message:"Passwords do not match"}
                            })}
                            />
                            <small className="invalid-msg">
                                {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                            </small>
                    </div>
                </div>    


                <div className="butons">
                    <button type='submit' className="registerBtn">Proceed</button>

                    <p>Already a member?  
                    <span>
                        <Link to="/login">
                            <button type='submit' className='btn'>Login</button>
                        </Link>
                    </span>
                </p>
                </div>

            </form>
        </div>
    </>
  )
}


export default Register