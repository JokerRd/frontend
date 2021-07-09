import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/BuilderPost.css';

function GalleryButton(props) {

    return (
        <div className="filter-region row">
            <div className="col-xl-9">
                <label>{props.name}</label>
            </div>
            <div className="col-xl-3 ">
                <button className="btn btn-primary">{props.nameButton}</button>
            </div>
        </div>
    );
}

export default GalleryButton;
