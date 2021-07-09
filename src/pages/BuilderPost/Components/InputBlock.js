import '../Styles/BuilderPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function InputBlock({set, style, name,defaultValue}) {
    return (
        <div className={style}>
            <label className="label">{name}</label>
            <input defaultValue={defaultValue} className= "form-control" onChange={(event)=> set(event.target.value)} type = "text"/>
        </div>
    );
}

export default InputBlock;