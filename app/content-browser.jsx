import React from 'react';
import { BlinkingEyeBtn } from './blinking-eye-btn';
import { Card } from './card';
import urls from './Model/fetch-url';

export class ContentBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenCards: '',
            category: ''
        }
    }

    componentDidMount = async () => {
        try {
        const response = await fetch(`${urls.graphicComponents}`);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        this.setState(data);
        //console.log(data);
        } catch(error) {
            console.log(error);
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
                        <Card key={card.name} url = {card.name} tags = {card.tags}/>
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