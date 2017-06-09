import React from 'react';
class Locale extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <span onClick={ this.props.switchRU } >RU </span>
                    <span onClick={ this.props.switchENG } >ENG</span>
                </div>
            </div>
        )
    }
}
export default Locale;