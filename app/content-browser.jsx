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
            this.setCategory('LOGO')
            console.log('LOGO');
            let logos = this.state.logos.map((l) => l.name);
            this.browseChosenCards(logos, btnState);
        }
        if (btnName === 'BILDER') {
            this.setCategory('BILDER');
            console.log('BILDER');
            let images = this.state.images.map((i) => i.name);
            console.log(images);
            this.browseChosenCards(images, btnState);
        }
        if (btnName === 'FÄRGER') {
            this.setCategory('FÄRGER');
            console.log('FÄRGER');
            let colors = this.state.colors.map((c) => c.name);
            this.browseChosenCards(colors, btnState);
        }
    }

    browseChosenCards = (cards, btnState) => {
        //debugger
        if (btnState === 'active') {
            if (this.state.chosenCards == '') {
                this.setState({chosenCards: cards}, () =>
                console.log(this.state.chosenCards));
            } else {
                let newState = {...this.state};
                console.log(cards);
                newState.chosenCards = newState.chosenCards.concat(cards);
                console.log(newState);
                this.setState(newState, () =>
                console.log(this.state));
            }
        } else {
            let newState = {...this.state};
            cards.forEach(card => {
                newState.chosenCards = newState.chosenCards.filter(object => {
                    return object !== card;
                });
            });
            this.setState(newState, () =>
            console.log(this.state));
        }
    }

    setCategory = (btnName) => {
        
        switch (btnName) {
        case 'LOGO':
            this.setState({category: 'logos'});
            console.log('category logos set');
            break;
        case 'BILDER':
            this.setState({category: 'images'});
            console.log('category images set');
            break;
        case 'FÄRGER':
            this.setState({category: 'colors'});
            console.log('category colors set');
            break;
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
                        <Card url = {card} tags = {this.state[this.state.category].filter((i) => i.name === card)[0].tags}/>
                    ))
                    }
                    
                </div>
                <div id="menu" class="colOne">
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