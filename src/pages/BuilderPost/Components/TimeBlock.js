
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/plugins/sidebar-nav/dist/sidebar-nav.min.css';
import '../../../styles/scss/icons/font-awesome/old/css/font-awesome.min.css';
import {useState} from "react";
import {DateTimePicker} from "@material-ui/pickers";


function TimeBlock({group, oldGroup}) {
    console.log(oldGroup)
    let value = oldGroup.publicationDataTime === ""? new Date(): new Date(oldGroup.publicationDataTime)
    const [dateTime, setDateTime] = useState(value);
    group.publicationDataTime = dateTime.toISOString();
    return (
        <DateTimePicker value={dateTime}
                        onChange={setDateTime}
                        format = "d MMM yyyy HH:mm"
                        cancelLabel = "Отмена"
                        ampm = {false}
                        disablePast/>
    );
}

export default TimeBlock;
