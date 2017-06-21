import React from 'react';
import style from '../components/Style.js'
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
           return <Image source={require("./icons/user.png")} />
        }
    }

    search () {
        this.props.navigation.navigate('Search');
    }

    render() {
        return(
            <View style={style.container}>
                <Text style={style.title}>A propos de valouMeteo</Text>
                <Text style={style.text}>Ma météo ment tout le temps alors mon gentil copain m'a créé ma propre appli météo qui dit la vérité comme je l'aimeeee mon mec !!</Text>
                <Image source={require('./images/moi.jpg')}
                style={style.image} />
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville."/>
            </View>

        )
    }

}

