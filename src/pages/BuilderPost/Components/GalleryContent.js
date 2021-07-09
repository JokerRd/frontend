import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryButton from "./GalleryButton";
import {useState} from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import '../Styles/BuilderPost.css'
import AliceCarousel from 'react-alice-carousel';
import one from '../imgtest/1.jpg'
import two from '../imgtest/2.jpg'
import three from '../imgtest/3.jpg'
import {Image} from "react-bootstrap";
import ImageUploader from "react-images-upload";
import {Form} from "react-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input'
import {FormGroup, FormText, Input, Label} from "reactstrap";
import {saveAndStartPublication, updateAndStartPublication} from "../../../redux/slices/publicationsSlice";
import axios from "axios";
import {uri} from "../../../url";



const handleDragStart = (e) => e.preventDefault();

const items = [
    <Image src= {one} thumbnail />,
    <Image src= {two} thumbnail />,
    <Image src= {three} thumbnail />,
];

function createImage(file){
    let url = window.URL.createObjectURL(file);
    return <Image src={url} thumbnail />
}

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


function GalleryContent(props) {
    const [items, setItems] = useState([])
    const [file, setFile] = useState();
    /*const propsfile = {
        onRemove: file => {
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                setFileList(fileList);
            }
        },
        beforeUpload: file => {
                setFileList([...fileList, file])
                return false;
        },
        fileList,
    };*/

    return (
        <>
            <AliceCarousel mouseTracking items={items} responsive={responsive} />
            <FormGroup>
                <input type="file" name="file" id="exampleFile" onChange={event => {
                    event.preventDefault();
                    setFile(event.target.files[0])
                    let item = createImage(file)
                    setItems([...items, item])
                    console.log(event.target.files[0])
                }} />
                <button className= "btn btn-primary" onClick={() => {
                    if (file !== undefined) {
                        let formData = new FormData();
                        console.log(file)
                        formData.append("uploads", file, file.name);
                        console.log(formData.keys())
                        axios.post(uri + "/uploadFiles", formData, {
                            headers: {
                                'content-type': 'multipart/form-data'
                            },
                            withCredentials: true
                        }).then(r => {
                            console.log(r.data)
                        })
                    }
                }} > Загрузить файл</button>
            </FormGroup>
        </>
    );
}

export default GalleryContent;
