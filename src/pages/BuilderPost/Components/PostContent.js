import 'bootstrap/dist/css/bootstrap.min.css';
import InputBlock from "./InputBlock";
import TextAreaBlock from "./TextAreaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setAgeAnimal, setDescription, setNamePost} from "../../../redux/slices/publicationsSlice";


const freqItems = ["Каждый день", "Каждые 3 дня"];

function PostContent(props) {
    const post = useSelector(state => state.publications.post)
    console.log(post)
    const dispatch = useDispatch();
    return (
        <>
            <div className="row">
                <div className="col-xl">
                    <InputBlock defaultValue={post.namePost} set = {(value) => dispatch(setNamePost(value))} name="Название поста" style="filter-region"/>
                </div>
                <div className="col-xl">
                    <InputBlock defaultValue={post.ageAnimal} set = {(value) => dispatch(setAgeAnimal(value))} name="Возраст" style="filter-region"/>
                </div>
            </div>
            <div className= "row">
                <div className= "col-xl">
                    <TextAreaBlock defaultValue = {post.description} set = {(value) => dispatch(setDescription(value))} name = "Описание" style="filter-region" />
                </div>
            </div>
        </>
    );
}

export default PostContent;
