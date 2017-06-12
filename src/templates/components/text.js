import React, { PropTypes } from 'react';
const TextContent = ({text}) => {
    return (
            <div className="container">
                <div className="profile__image">
                    <img src="/src/templates/img/photo.jpg" alt=""/>
                </div>
                {text}
            </div>
        )

}
export default TextContent;