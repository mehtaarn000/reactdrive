export default class SwitchBetweenRegisterAndLogin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.register) {
            return (
                <button onClick={this.props.switchToLogin}>Login</button>
            )
        }

        return (
            <button onClick={this.props.switchToRegister}>Register</button>
        )
    }
}