import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from "react-icons/fa"
import { register, reset } from "../features/auth/authSlice"
import Spinner from '../components/Spinner'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [validationError, setValidationError] = useState({})
  const [canSubmit, setCanSubmit] = useState(false)

  const { name, email, password, confirmPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth) 
  // destructuring authSlice states
  // state.auth can be traced back to authSlice

  console.log(user);

  useEffect(() => {


    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
    // dispatch is executing the authSlice methods

  }, [user, isError, isSuccess, message, navigate, dispatch])


  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  
  const handleSubmit = (event) => {
    event.preventDefault()
    setValidationError(validate(formData))
    setCanSubmit(true)


    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      if (Object.keys(validationError).length === 0 && canSubmit) {
        const userData = {
          name,
          email,
          password
        }
  
        dispatch(register(userData))
      }
    }
  }


  // useEffect(() => {
  //   console.log(validationError);
  //   if (Object.keys(validationError).length === 0 && canSubmit) {
  //     console.log(formData);
  //   }
  // }, [validationError]);


  
  const validate = (values) => {
    const errors = {}
    const regexName = /^[a-z ,.'-]+$/i;
    const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const regexPassword = /^[A-Za-z]\w{7,14}$/;

    if (!values.name) {
      errors.name = "Name is required"
    } else if (!regexName.test(values.name)) {
      errors.email = "Invalid name"
    }


    if (!values.email) {
      errors.email = "Email is required"
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email address"
    }


    if (!values.password) {
      errors.password = "Password is required"
    } else if (!regexPassword.test(values.password)) {
      errors.email = "Invalid password"
    }


    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm password"
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }
    
    return errors
  }


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
          <h1>
            <FaUser /> Register
          </h1>

          <p>Please create an account</p>
      </section>

      <section className="form">
      <form onSubmit={ handleSubmit }>
          <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={ name }
                placeholder="Name"
                onChange={ handleChange }
                />
            <p style={{ color:'red', fontSize: "1rem" }}>{ validationError.name }</p>
          </div>


          <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                id="email" 
                name="email" 
                value={ email }
                placeholder="Email"
                onChange={ handleChange }
                />
              <p style={{ color:'red', fontSize: "1rem" }}>{ validationError.email }</p>

          </div>

          <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password" 
                value={ password }
                placeholder="Password"
                onChange={ handleChange }
                />
            <p style={{ color:'red', fontSize: "1rem" }}>{ validationError.password }</p>
          </div>


          <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={ confirmPassword }
                placeholder="Confirm password"
                onChange={ handleChange }
                />
              <p style={{ color:'red', fontSize: "1rem" }}>{ validationError.confirmPassword }</p>
          </div>


          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}


export default Register

