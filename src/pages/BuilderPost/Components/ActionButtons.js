import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/BuilderPost.css';
import {useDispatch, useSelector} from "react-redux";
import {
    saveAndStartPublication,
    savePost,
    setUserId,
    startPublication,
    stopPublication, updateAndStartPublication,
    updatePost
} from "../../../redux/slices/publicationsSlice";
import {Link, useParams} from "react-router-dom";


function StopPublicationButton({dispatch}) {
    const userId = useSelector(state => state.publications.userId)
    const postId = useSelector(state => state.publications.postId)
    return(
        <div className= "actions col-xl">
            <button className= "btn btn-primary" onClick={() => {
                dispatch(stopPublication({userId: userId, postId: postId}))
            }}>Остановить публикацию</button>
        </div>
    )
}

function StartPublicationButton({dispatch}) {
    const statusPost= useSelector(state => state.publications.statusPost)
    const post = useSelector(state => state.publications.post)
    return(
        <div className= "actions col-xl">
            <button className= "btn btn-primary" onClick={() => {
                if (statusPost === ""){
                    dispatch(saveAndStartPublication(post))
                } else {
                    dispatch(updateAndStartPublication(post))
                }
            }}>Начать публикацию</button>
        </div>
    )
}



function ActionButtons(props) {
    const post = useSelector(state => state.publications.post)
    const statusPost= useSelector(state => state.publications.statusPost)
    console.log(post);
    const dispatch = useDispatch()
    console.log(statusPost)
    let button = statusPost === "OnPublications" ? <StopPublicationButton dispatch={dispatch} /> :
        <StartPublicationButton dispatch={dispatch} />;
    return (
        <div className="filter-region row">
            <div className= "actions col-xl">
                <Link to="/publications">
                    <button className= "btn btn-primary">Отмена</button>
                </Link>
            </div>
            <div className= "actions col-xl">
                    <button className= "btn btn-primary" onClick={() => {
                        if (statusPost === "") {
                            dispatch(savePost(post))
                        } else {
                            dispatch(updatePost(post))
                        }
                    }}>Сохранить</button>
            </div>
            {button}
        </div>
    );
}

export default ActionButtons;
