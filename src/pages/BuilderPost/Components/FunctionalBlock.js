import '../Styles/BuilderPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LabelFunctionalBlock from "./LabelFunctionalBlock";


function FunctionalBlock(props) {

    return (
        <div className= "container-xl functional-block">
            <LabelFunctionalBlock name = {props.name}/>
            {props.content}
        </div>
    );
}

export default FunctionalBlock;