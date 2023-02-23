import { useEffect, useState } from 'react'
import './styles.scss'


const SignUp = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            full_name: '',
            username: '',
            password: '',
            p2:''
        })

    }, [])

    return (
            <form className="sign-up">
                <div className="title">Create an account.</div>

                <label>
                    <span className={data.username ? 'active' : ''}>Username</span>

                    <input
                        type="text"
                        className={data.username ? 'active' : ''}
                        value={data.username}
                        onChange={e=> setData({...data, username: e.target.value})}
                        required
                        />

                </label>

                <label>
                    <span className={data.password ? 'active' : ''}>Password</span>
                    <input
                        type="password"
                        className={data.password ? 'active' : ''}
                        value={data.password}
                        onChange={e=> setData({...data, password: e.target.value})}
                        required
                        />
                </label>

                <button>Create account</button>

                <div className="footer">
                    Already have an account? 
                    <a href="/sign-in">Sign in.</a>
                </div>
            </form>
    )
}

export default SignUp;