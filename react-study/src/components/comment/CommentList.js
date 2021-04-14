'use strict'

import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        return (
            <div>
                <Comment author="王五" date="5 分钟前">天气针不戳啊1</Comment> 
                <Comment author="李四" date="3 分钟前">天气针不戳啊2</Comment> 
                <Comment author="小雪" date="1 分钟前">天气针不戳啊3</Comment>    
            </div>
        );
    }
}

export { 
    CommentList as default 
}
