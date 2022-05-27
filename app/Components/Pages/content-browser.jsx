import React from 'react';
import './content-browser.css';
import  BlinkingEyeBtn  from '../BlinkingEye/blinking-eye-btn';
import Card from '../card';
import urls from '../../Model/fetch-url';
import GetMyModelData from '../../Model/get-my-model-data';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class ContentBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenCards: '',
            category: '',
            err: '',
            loading: true
        }
    }

    componentDidMount = async () => {
        const [data, err] = await GetMyModelData(urls.graphicComponents);
        
        this.setState({
            data,
            err: err,
            loading: false
        });

        if (err) {
            NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Kunde inte hämta innehåll!', 10000);
            console.log(err);
        }
    }

    handleClick = (btnName, btnStatus) => {
        this.browseChosenCards(this.state.data[btnName], btnStatus);
    }

    browseChosenCards = (cards, btnStatus) => {

        if (btnStatus === true) {
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
                <NotificationContainer/>
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
                    {this.state.loading === true ? <p className='text-red'>Vänta, innehåll laddas...</p> : null}
                    <ul>
                        <BlinkingEyeBtn type = 'local' handleEvent = {true} id="mediumBtn" name="logos" text = 'LOGO' onClick = {this.handleClick} />
                        <BlinkingEyeBtn type = 'local' handleEvent = {true} id="mediumBtn" name="images" text = 'BILDER' onClick = {this.handleClick} />
                        <BlinkingEyeBtn type = 'local' handleEvent = {true} id="mediumBtn" name="colors" text = 'FÄRGER' onClick = {this.handleClick} />               
                    </ul>
                </div>
            </div>
        );
    }
}