import './styles.scss'

const SignIn = () => {
    return (
            <form className="sign-in">
                <div className="title">Sign in to your account.</div>

                <label>
                    <span>Username</span>
                    <input type="text" required/>
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>

                <button>Log in</button>

                <div className="footer">
                    Don't have an account? 
                    <a href="/sign-up">Create an account.</a>
                </div>
            </form>
    )
}

export default SignIn;