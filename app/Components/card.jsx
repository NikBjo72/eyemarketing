import React from 'react';
import { url } from '../Helpers/images';
import './card.css';
import propTypes from "prop-types";

class Card extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={'card'}>
                <h4 className={'bg-transp text-black'} id="cardHeader">{this.props.name}</h4>
                <div id="imageHolder">
                    <img className={"cardImg"} src = {url[this.props.url]} />
                </div>
                <h4 className={'bg-transp text-black'} id="cardHeader">Beskrivningstaggar</h4>

                {this.props.tags != undefined
                    ?
                    this.props.tags.map((tag) => (
                        <span key={tag} className={'bg-transp text-black'}>
                          {tag}{', '}
                        </span>
                        ))
                    :
                    'inga taggar' }      
            </div>
        );
    }
}
Card.propTypes = {
   url: propTypes.string.isRequired,
   tags: propTypes.array.isRequired,
   name: propTypes.array.isRequired 
}
export default Card;