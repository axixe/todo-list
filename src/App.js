import React from "react";

import Header from "./components/header";
import CreatePost from "./components/createTaskForm";
import TaskManager from "./components/taskManager";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'axixe',
            posts: [
                {content: 'Посмотреть Гарри-Поттера', status: 'active', id: 0},
                {content: 'Убраться дома', status: 'completed', id: 1}
            ]
        }

        this.handleAddPost = this.handleAddPost.bind(this);
        this.handlePostStatus = this.handlePostStatus.bind(this);
    }

    handleAddPost(content) {
        this.setState(prevState => ({
            posts: [...prevState.posts, {content, status: 'active', id: prevState.posts.length}]
        }));
    }

    handlePostStatus(id, status) {
        this.setState(prevState => ({
            posts: prevState.posts.map(post => post.id === id ? {...post, status} : post)
        }))
    }

    render() {
        const {name, posts} = this.state;

        return (
            <div>
                <Header name={name} />
                <CreatePost onAddPost={this.handleAddPost} />
                <TaskManager posts={posts} onUpdatePostStatus={this.handlePostStatus} />
            </div>
        )
    }
}