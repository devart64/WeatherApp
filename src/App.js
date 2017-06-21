import React, { Component } from 'react';
import About from './components/About';
import Search from './components/Search';
import { TabNavigator} from 'react-navigation';
import {View,StatusBar} from 'react-native';

const Tabs = TabNavigator({
    Search: { screen: Search},
    About: {screen: About}
},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: '#fff'
        },
        style: {
            backgroundColor: "#790da8",
            borderTopWidth: 1,
            borderColor: "#5c0c7f"
        }
    },
})

export default class App extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
               <StatusBar hidden={true} />
                <Tabs />
            </View>

        );
    }
}

