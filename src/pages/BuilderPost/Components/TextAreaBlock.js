import '../Styles/BuilderPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function TextAreaBlock(props) {
    return (
        <div className={props.style}>
            <label className="label">{props.name}</label>
            <textarea required defaultValue={props.defaultValue}
                      onChange={(event) => props.set(event.target.value)}  className= "form-control"/>
        </div>
    );
}

export default TextAreaBlock;