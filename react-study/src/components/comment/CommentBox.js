'use strict'

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm'; 

class CommentBox extends React.Component {
    render() {
        return (
            <div className="ui comments">
                <h1>评论盒子</h1>
                <div className="ui divider"></div>
                <CommentList></CommentList>
                <CommentForm></CommentForm>
            </div>
        );
    }
}

export { 
    CommentBox as default 
}
