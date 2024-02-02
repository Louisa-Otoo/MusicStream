import React from 'react'
import { useForm } from 'react-hook-form'
import '../components/styles/login.css'
import { Link } from 'react-router-dom';
import Register from './Register';


const Login = () => {
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
        <div className="loginContainer">
            <form className="innerLogin" onSubmit={handleSubmit(onSubmission)}>
                <h2 className="login">Login</h2>

                <div className="details">
                    <label htmlFor="" className='log-label'>Email or username</label> 
                    <input          
                        type="text" name='email' placeholder='name@example.com' className='log-input'
                        {...register('email', { 
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Invalid email format"
                            },
                            })} 
                            />
                            <small className="invalid-msg">
                                {errors.email && <p>{errors.email.message}</p>}
                            </small>
                </div>


                <div className="details">
                    <label htmlFor="" className='log-label'>Password</label>
                    <input 
                        type="text" placeholder='password' className='log-input'
                        {...register('password', {
                            required: "Password is required",
                            minLength: { value: 7, message: "Password must be at least 7 characters"}
                        })}
                        />
                        <small className="invalid-msg">
                            {errors.password && <p>{errors.password.message}</p>}
                        </small>
                </div>


                <div className="buttons">
                    <button type='submit' className='continueBtn'>Proceed</button>
                </div>

                
                <p>New to MusicStream?  
                    <span>
                        <Link to="/register">
                            <button type='submit' className='createBtn'>Sign up here</button>
                        </Link>
                    </span>
                </p>

            </form>
        </div>
    </>
  )
}


export default Login