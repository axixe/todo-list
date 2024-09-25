import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import './style.css';

export default class TaskListItem extends React.Component {

    render() {
        const { title, id, onToggleStatus } = this.props;

        return (
            <li className='task-list__item' onClick={() => onToggleStatus(id)}>
                {title}
                <FontAwesomeIcon className="task-list__icon--delete" icon={faTrashCan} />
            </li>
        )
    }
}