export default function MyDrive(props) {
    return (
        <div>
            <FileForm error={props.error}></FileForm>
            <DocumentsList documents={props.documents}></DocumentsList>
        </div>
    )
}

function FileForm(props) {
    return (
        <div>
            <div>{props.error}</div>
            <form action="/drive" method="post" encType="multipart/form-data"> 
                <input type="file" multiple name="uploadfiles"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

function DocumentsList(props) {

    let documents = props.documents.map((doc, i) => {
        let url = "/drive/" + doc
        return (<div key={i}>
            <a href={url} key={i}>{doc}</a>
            <br></br>
        </div>)
    })

    return <div>{documents}</div>
}