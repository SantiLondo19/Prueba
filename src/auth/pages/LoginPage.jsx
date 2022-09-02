import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const [name, setName] = useState('No name')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const lastPath = localStorage.getItem('lastPath') || '/'
    login(name)
    navigate(lastPath, {
      replace: true
    });
  }

  const onChange = ({ target }) => {
    setName(target.value)
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <form onSubmit={ handleLogin }>
          <input type='text' className="form-control" onChange={onChange} name={name} placeholder="Ingrese su nombre" />
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    </>
  )
}
