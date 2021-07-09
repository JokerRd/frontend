import '../Styles/BuilderPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {getGroup, setParamsAnimal, setParamsRegion} from "../../../redux/slices/publicationsSlice";


function generateOption(items, currentItem){
    let options = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] === currentItem) {
            options.push(<option selected>{items[i]}</option>);
        } else {
            options.push(<option>{items[i]}</option>);
        }
    }
    return options;
}


function SelectBlock({items, style, name, currentItem}) {
    const paramRegion = useSelector(state => state.publications.paramsRegion)
    const paramAnimal = useSelector(state => state.publications.paramsAnimal)
    const dispatch = useDispatch()
    return (
        <div className={style}>
            <label className="label">{name}</label>
            <select className="form-control"  onChange={(event) => {
                if (name == "Тип животного") {
                    dispatch(setParamsAnimal(event.target.value))
                    dispatch(getGroup({region: paramRegion, animalType: event.target.value}))
                } else {
                    dispatch(setParamsRegion(event.target.value))
                    dispatch(getGroup({region: event.target.value, animalType: paramAnimal}))
                }
            }}>
                <option selected>Нет</option>
                {generateOption(items, currentItem)}
            </select>
        </div>
    );
}

export default SelectBlock;