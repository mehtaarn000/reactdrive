import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import SwitchBetweenRegisterAndLogin from "./components/SwitchBetweenRegisterAndLogin"
import { useState } from "react"

export default function App(props) {
    return (
        <LoginOrRegister error={props.error} register={props.register}></LoginOrRegister>
    )
}

class aaLoginOrRegister extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            register: 0
        }

        this.switchToLogin = this.switchToLogin.bind(this)
        this.switchToRegister = this.switchToRegister.bind(this)
    }

    switchToLogin() {
        this.setState({register: 0})
    }

    switchToRegister() {
        this.setState({register: 1})
    }

    render() {
        if (this.props.register) {
            this.switchToRegister()
        }

        if (this.state.register) {
            return (
                <div>
                    <SwitchBetweenRegisterAndLogin switchToLogin={this.switchToLogin} register={1}></SwitchBetweenRegisterAndLogin>
                    <RegisterForm error={this.props.error}></RegisterForm>
                </div>
            )
        } else {
            return (
                <div>
                    <SwitchBetweenRegisterAndLogin switchToRegister={this.switchToRegister} register={0}></SwitchBetweenRegisterAndLogin>
                    <LoginForm error={this.props.error}></LoginForm>
                </div>
            )
        }
    }
}

function LoginOrRegister(props) {
    const [register, setRegister] = useState(props.register)

    if (register) {
        return (
            <div>
                <SwitchBetweenRegisterAndLogin switchToLogin={() => setRegister(0)} register={1}></SwitchBetweenRegisterAndLogin>
                <RegisterForm error={props.error}></RegisterForm>
            </div>
        )
    } else {
        return (
            <div>
                <SwitchBetweenRegisterAndLogin switchToRegister={() => setRegister(1)} register={0}></SwitchBetweenRegisterAndLogin>
                <LoginForm error={props.error}></LoginForm>
            </div>
        )
    }
}