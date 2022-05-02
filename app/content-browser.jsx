import React from 'react';
import { BlinkingEyeBtn } from './Components/blinking-eye-btn';
import { Card } from './card';
import urls from './Model/fetch-url';

export class ContentBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenCards: '',
            category: '',
            statusLogoBtn: 'off',
            statusImageBtn: 'off',
            statusColorBtn: 'off',
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

    changeBtnStatus = (btnState, state) => {

        console.log(btnState, state);
        if(btnState === 'on'){
            this.setState({[state]: 'off'}, () => {
                console.log(this.state);
            })
        } else {
            this.setState({[state]: 'on'}, () => {
                console.log(this.state);
            })
        }
        
    }

    handleClick = (btnName, btnState) => {
        
        if (btnName === 'LOGO') {
            const wait = new Promise((resolve) => {
                resolve(this.changeBtnStatus(btnState, 'statusLogoBtn'))
            });
            wait.then(() => {
                let logos = this.state.logos;
                this.browseChosenCards(logos, btnState);
            });
        }
        if (btnName === 'BILDER') {
            const wait = new Promise((resolve) => {
                resolve(this.changeBtnStatus(btnState, 'statusImageBtn'))
            });
            wait.then(() => {
                let images = this.state.images;
                this.browseChosenCards(images, btnState);
            });

        }
        if (btnName === 'FÄRGER') {
            const wait = new Promise((resolve) => {
                resolve(this.changeBtnStatus(btnState, 'statusColorBtn'));
            });
            wait.then(() => {
                let colors = this.state.colors;
                this.browseChosenCards(colors, btnState);
            });

        }
    }

    browseChosenCards = (cards, btnState) => {

        if (btnState === 'off') {
            if (this.state.chosenCards == '') {
                this.setState({chosenCards: cards});
            } else {
                let newState = {...this.state};
                newState.chosenCards = newState.chosenCards.concat(cards);
                this.setState(newState);
            }
        } else {
            let newState = {...this.state};
            console.log(newState.chosenCards);
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
                        <BlinkingEyeBtn key={`Logo${this.state.statusLogoBtn}`} btnStatus = {this.state.statusLogoBtn} id="mediumBtn" text = 'LOGO' onClick = {this.handleClick} />
                        <BlinkingEyeBtn key={`Image${this.state.statusImageBtn}`} btnStatus = {this.state.statusImageBtn} id="mediumBtn" text = 'BILDER' onClick = {this.handleClick} />
                        <BlinkingEyeBtn key={`Color${this.state.statusColorBtn}`} btnStatus = {this.state.statusColorBtn} id="mediumBtn" text = 'FÄRGER' onClick = {this.handleClick} />
                    </ul>
                </div>
            </div>
        );
    }
}