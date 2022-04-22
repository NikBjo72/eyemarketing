import React from 'react';
import { url } from './Helpers/images'

export class Card extends React.Component {

    constructor(props) {
        super(props);
        console.log(url);
    }
    
    render() {
        return (
            <div key = {'key'} class='card'>
                <img class="cardImg" src = {url[this.props.url]} />
                <h4 class='bg-transp text-black' id="cardHeader">Beskrivningstaggar</h4>
                
                {/* <p class='bg-transp text-black' >{this.props.tags}</p> */}

                {this.props.tags != undefined
                    ?
                    this.props.tags.map((tag) => (
                        <span key={tag} className={'bg-transp text-black'}>
                          {tag}{', '}
                        </span>
                        ))
                    :
                    'nej' }

                    
            </div>
        );
    }
}