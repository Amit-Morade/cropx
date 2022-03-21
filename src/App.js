import Navbar from "./components/navbar/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import UserInputs from "./components/userinputs/UserInputs"
import './App.css'
import 'tachyons'

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <UserInputs />
        </div>
    )
}

export default App