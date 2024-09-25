import React from "react";

import TaskListItem from "../taskListItem";

import './style.css';

function TaskList({ status, children }) {
    const listStyle = {
        listStyleType: 'none',
        padding: '0'
    };

    return (
        <div className={`task-list__block task-list__block--${status}`}>
            <h3 className={`task-list__title task-list__title--${status}`}>{status === 'active' ? 'Активные' : 'Завершённые'}: </h3>
            <ul style={listStyle}>
                {children}
            </ul>
        </div>
    )
}

function TaskListNothing() {
    return (
        <div className='task-list__item--nothing'>Задачи не найдены</div>
    )
}

export default class TaskManager extends React.Component {
    constructor(props) {
        super(props);

        this.filterByStatus = this.filterByStatus.bind(this);
        this.handleToggleStatus = this.handleToggleStatus.bind(this);
    }

    filterByStatus(status) {
        return this.props.posts.filter(item => item.status === status);
    }

    handleToggleStatus(id) {
        const post = this.props.posts.find(value => value.id === id);

        if (post) {
            this.props.onUpdatePostStatus(id, post.status === 'active' ? 'completed' : 'active');
        }
    }

    render() {
        const activeListItems = this.filterByStatus('active');
        const completedListItems = this.filterByStatus('completed');

        return (
            <section className='task-list'>
                <TaskList status='active'>
                    {activeListItems.length !== 0
                    ? activeListItems.map(value => <TaskListItem key={value.id} title={value.content} id={value.id} onToggleStatus={this.handleToggleStatus} />)
                    : <TaskListNothing />}
                </TaskList>

                <TaskList status='completed'>
                    {completedListItems.length !== 0 
                    ? completedListItems.map(value => <TaskListItem key={value.id} title={value.content} id={value.id} onToggleStatus={this.handleToggleStatus} />)
                    : <TaskListNothing />}
                </TaskList>
            </section>
        )
    }
}