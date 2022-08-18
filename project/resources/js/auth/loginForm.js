const LoginForm = () => {
    return (
        <div className="form-container">
            <form>
                <h1>Login</h1>

                <div>
                    <input className="input-form" placeholder="Email" />
                    <input className="input-form" type="password" placeholder="Password" />
                    <button
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
