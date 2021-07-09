import 'bootstrap/dist/css/bootstrap.min.css';
import TimeBlock from "./TimeBlock";
import InputBlock from "./InputBlock";
import {useDispatch, useSelector} from "react-redux";
import {setDataTime, setPublicationsGroups, setInterval} from "../../../redux/slices/publicationsSlice";
import {useCallback, useRef, useState} from "react";
import {ReCron, ReUnixCron} from "@sbzen/re-cron";
import {DEFAULT_LOCALE_RU, localization} from "../../../utils/localizationCronToRus";
import {Cron} from "react-js-cron";
import 'antd/dist/antd.css';




function RowContent({number, nameGroup, idGroup, checked, group}) {
    const publicationsGroups = useSelector(state => state.publications.post.publicationGroups)
    const defaultGroup = {
        id: idGroup,
        nameGroup: nameGroup,
        publicationDataTime: "",
        publicationInterval: "0 * * * *"
    }
    const defaultValue = group.publicationInterval;
    const [value, setValue] = useState(defaultValue)
    console.log(value)
    defaultGroup.publicationInterval = value;
    const dispatch = useDispatch();
    return(
        <tr>
            <th>{number}</th>
            <td>{nameGroup}</td>
            <td>
                <TimeBlock group = {defaultGroup} oldGroup={group} />
            </td>
            <td>
                <Cron value={value} setValue={setValue} locale={DEFAULT_LOCALE_RU} />
            </td>
            <td>
                <input className="form-check-input" checked = {checked} type="checkbox" id={idGroup} onChange={ event => {
                    dispatch(setPublicationsGroups({checked: event.target.checked, group: defaultGroup}))
                }} />
            </td>
        </tr>
    );
}

function generateRow(groups, postGroups){
    let rows = [];
    let count = 0;
    for (let i= 0; i < groups.length; i++) {
        if (containsGroup(postGroups, groups[i])) {
            let oldGroup = getGroup(postGroups, groups[i])
            rows.push(<RowContent number={count + 1} group = {oldGroup} checked={true} nameGroup={groups[i].nameGroup} idGroup={groups[i].id} />)
        } else {
            rows.push(<RowContent number={count + 1} group={groups[i]} checked={false} nameGroup={groups[i].nameGroup} idGroup={groups[i].id} />)
        }
        count++;
    }
    return rows;
}

function containsGroup(postGroups, group) {
    let result = postGroups.some(gr => gr.nameGroup === group.nameGroup)
    return postGroups.some(gr => gr.nameGroup === group.nameGroup)
}

function getGroup(postGroups,group){
    for (let i = 0; i < postGroups.length; i++) {
        if (postGroups[i].nameGroup === group.nameGroup) {
            return postGroups[i];
        }
    }
    return group;
}

function GroupsContent(props) {
    const groups = useSelector(state => state.publications.groups);
    const postGroups = useSelector(state => state.publications.post.publicationGroups)
    console.log(groups);
    return (
        <table className= "table">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название группы</th>
                    <th scope="col">Время начала публикации</th>
                    <th scope="col">Частота</th>
                    <th scope="col">Статус</th>
                </tr>
            </thead>
            <tbody>
                {generateRow(groups, postGroups)}
            </tbody>
        </table>
    );
}

export default GroupsContent;