import React from 'react';
import style from '../components/Style.js';
import { TextInput, Image, Button, View, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import List from './List';

class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Entrez une ville'
        }
    }

    setCity (city) {
        this.setState({city})
    }

    submit () {
        Keyboard.dismiss()
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    static navigationOptions = {
        title: "Rechercher une ville",
        tabBarIcon: () => {
            return <Image source={require("./icons/house.png")} />
        }
    }

    render () {
        return (
           <View style={style.search}>
               <TextInput
                   underlineColorAndroid='transparent'
                   onChangeText={(text) => this.setCity(text)}
                   onSubmitEditing={() => this.submit()}
                   style={style.input}
                   value={this.state.city}
               />
               <Button color={style.color} onPress={() => this.submit()} title="Rechercher" />
           </View>
        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({

  Search: {
      screen: Search,
      navigationOptions
  },
    Result: {
        screen: List,
        navigationOptions
    },
})