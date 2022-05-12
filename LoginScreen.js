import React, { Component, TouchableOpacity, View, TextInput } from "react";
import { render } from "react-dom";

export default class App extends React.Component {
constructer(){
    super();
    this.state={

        text:'',
    
    }
}

render() {
    return (
       <View style={styles.Container}>
            <Image source={appIcon} style={styles.appIcon} />
            <Text style={styles.title}>e-ride</Text>
            <Text style={styles.subtitle}>A Eco-Friendly Ride</Text>
            
           
                



    <TextInput
        style={styles.textinput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="email address"
        keyboardType="numeric"
    />

    <TextInput
        style={styles.textinput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
        keyboardType="numeric"
    />

            </View>

    );
 }
}




const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "#D0E6F0"
      },
    title: {
        fontSize: 40,
        fontFamily: "Rajdhani_600SemiBold",
        paddingTop: 20,
        color: "#4C5D70"
      },
      subtitle: {
        fontSize: 20,
        fontFamily: "Rajdhani_600SemiBold",
        color: "#4C5D70"
      },
      textinput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#4C5D70",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#F88379",
        fontFamily: "Rajdhani_600SemiBold",
        color: "#FFFFFF"
      },

});