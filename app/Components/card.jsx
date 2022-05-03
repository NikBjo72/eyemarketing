import React from 'react';
import { url } from '../Helpers/images';
import './card.css';

export class Card extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={'card'}>
                <img className={"cardImg"} src = {url[this.props.url]} />
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