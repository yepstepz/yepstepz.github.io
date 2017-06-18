import React, { PropTypes } from 'react';
import Profile from './profile';
import Links from './links';

const TextContent = ({content}) => {
    return (
            <main>
                <Profile/>
                <Links link={content.links} />
                <div className="title">
                    <div className="title__name">
                        {content.name}
                    </div>
                    <div className="title__job">
                        Junior Front End Developer
                    </div>
                </div>
                {content.text}
            </main>
        )

}
export default TextContent;