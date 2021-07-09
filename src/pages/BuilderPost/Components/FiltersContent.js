import '../Styles/BuilderPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectBlock from "./SelectBlock";
import {useSelector} from "react-redux";

const testItems = ["Екатеринбург", "Саратов", "Пермь"];
const testAnimals = ["Собака", "Кошка"];

function FiltersContent({regions, animals, post}) {
    const filters = useSelector(state => state.publications.filters)
    return (
        <div className="filters-body row">
            <div className="col-xl">
                <SelectBlock  name = "Регион" currentItem={post.region} items = {filters.regions} style = "filter-region" />
            </div>
            <div className= "col-xl">
                <SelectBlock  name = "Тип животного" currentItem={post.animalType} items = {filters.animalTypes} style = "filter-region" />
            </div>
        </div>
    );
}

export default FiltersContent;
