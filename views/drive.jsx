export default function MyDrive() {
    return <FileForm></FileForm>
}

class FileForm extends React.Component {
    render() {
        return (
            <div>
                <div></div>
                <form action="/upload" method="post" encType="multipart/form-data"> 
                    <input type="file" multiple name="uploadfiles"></input>
                </form>
            </div>
        )
    }
}


