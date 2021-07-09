import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/BuilderPost.css';

function GalleryCheckbox(props) {

    return (
        <div className= "filter-region row">
            <div className="col-xl-9">
                <label>{props.name}</label>
            </div>
            <div className="col-xl-3 ">
                <input className="form-check-input" type="checkbox" id="1" />
            </div>
        </div>
    );
}

export default GalleryCheckbox;
