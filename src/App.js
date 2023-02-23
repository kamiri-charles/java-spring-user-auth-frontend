import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import './App.scss'

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route exact path='/sign-in' element={ <SignIn /> } />
				<Route exact path='/sign-up' element={ <SignUp /> } />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
