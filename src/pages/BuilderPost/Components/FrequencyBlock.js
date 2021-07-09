import '../Styles/BuilderPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {getGroup, setParamsAnimal, setParamsRegion} from "../../../redux/slices/publicationsSlice";
import Select from '@material-ui/core/Select';
import {MenuItem} from "@material-ui/core";

function FrequencyBlock () {

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
        >
            <MenuItem value={10}>Каждую минуту</MenuItem>
            <MenuItem value={20}>Каждый день</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    );
}