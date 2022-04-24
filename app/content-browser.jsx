import React from 'react';
import { BlinkingEyeBtn } from './blinking-eye-btn';
import { Card } from './card';

export class ContentBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                        {   name: 'bild1',
                            tags: ['foto', 'glad', 'människor', 'kontor', 'skissa', 'presentation']
                        },
                        {   name: 'bild2',
                            tags: ['foto', 'glad', 'människor', 'kontor', 'dator', 'idé']
                        },
                        {   name: 'bild3',
                            tags: ['foto', 'glad', 'människor', 'möte', 'dator']
                        }
                    ],
            logos:  [
                        {   name: 'logo1',
                            tags: ['logo', 'svart mot blå bakgrund', 'huvudlogo' ]
                        },
                        {   name: 'logo2',
                            tags: ['logo', 'monokron', 'svrt mot grå bakgrund']
                        },
                        {   name: 'logo3',
                            tags: ['logo', 'blå logotext', 'används mot mörk bakgrund']
                        }
                    ],
            colors: [
                        {   name: 'color1',
                            tags: ['Pantone process Blue C', 'CMYK 100 29 0 0', 'logofärg', 'blå', 'dekorfärg']
                        },
                        {   name: 'color2',
                            tags: ['Pantone Yellow 012 C', 'CMYK 0 20 100 0', 'Gul', 'dekorfärg']
                        },
                        {   name: 'color3',
                            tags: ['Pantone 521 C', 'CMYK 42 50 9 2', 'duplexfärg bilder', 'dekorfärg']
                        }
                    ],
            chosenCards: '',
            category: ''
        }
    }

    handleClick = (btnName, btnState) => {
        
        if (btnName === 'LOGO') {
            let logos = this.state.logos;
            this.browseChosenCards(logos, btnState);
        }
        if (btnName === 'BILDER') {
            let images = this.state.images;
            this.browseChosenCards(images, btnState);
        }
        if (btnName === 'FÄRGER') {
            let colors = this.state.colors;
            this.browseChosenCards(colors, btnState);
        }
    }

    browseChosenCards = (cards, btnState) => {

        if (btnState === 'active') {
            if (this.state.chosenCards == '') {
                this.setState({chosenCards: cards});
            } else {
                let newState = {...this.state};
                newState.chosenCards = newState.chosenCards.concat(cards);
                this.setState(newState);
            }
        } else {
            let newState = {...this.state};
            cards.forEach(card => {
                newState.chosenCards = newState.chosenCards.filter(object => {
                    return object !== card;
                });
            });
            this.setState(newState);
        }
    }
    
    render() {
        return (
            <div id="contentContainer" className={"row"}>
                <div id="browser" className={"colTwo"}>

                    {this.state.chosenCards === ""
                    ?
                    null
                    :
                    this.state.chosenCards.map((card) => (
                        <Card url = {card.name} tags = {card.tags}/>
                    ))
                    }
                    
                </div>
                <div id="menu" className={"colOne"}>
                    <ul>
                        <BlinkingEyeBtn text = 'LOGO' onClick = {this.handleClick} />
                        <BlinkingEyeBtn text = 'BILDER' onClick = {this.handleClick} />
                        <BlinkingEyeBtn text = 'FÄRGER' onClick = {this.handleClick} />
                    </ul>
                </div>
            </div>
        );
    }
}