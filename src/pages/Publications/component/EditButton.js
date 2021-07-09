import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap' ;
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import {Link} from "react-router-dom";

function EditButton({userId, postId}) {
    let url = "/builderPost/" + userId + "/" + postId;
    return (
        <div>
            <Link to={url}>
                <Button className="mr-2" variant="primary">
                    Редактировать
                </Button>
            </Link>
        </div>
    );
}

export default EditButton;