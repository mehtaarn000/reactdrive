export default function MyDrive(props) {
    return <FileForm error={props.error}></FileForm>
}

class FileForm extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.error}</div>
                <form action="/drive" method="post" encType="multipart/form-data"> 
                    <input type="file" multiple name="uploadfiles"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}


