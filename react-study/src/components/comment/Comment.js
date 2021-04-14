'use strict'

import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="data">{this.props.data}</div>
                    <div className="data">{this.props.data}</div>
                </div>
            </div>
        );
    }
}

export { 
    Comment as default 
}
