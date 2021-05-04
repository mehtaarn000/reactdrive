export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "", 
            password: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, field) {
        this.setState({[field]: event.target.value})
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.error}</h1>
                </div>
                <form method="post" action="/login">
                    <input name="username" type="username" onChange={() => this.handleChange(event, "username")}></input>
                    <input name="password" type="password" onChange={() => this.handleChange(event, "password")}></input>
                    <input type="submit"></input>
                </form> 
            </div>
        )
    }
}