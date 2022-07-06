import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import Button from '../components/Button'

export default function Welcome() {
  return (
    <View style={styles.container}>
        
        <ImageBackground 
            source={require('../assets/pfps/man2.jpg')}
            style={styles.image}
            blurRadius={15}
        />

        <View style={styles.titles}>

            <Text style={styles.title}>Ember</Text>
            <Text style={styles.subtitle}>The #1 Dating App Nowhere</Text>

        </View>

        <View style={styles.buttons}>

            <Button 
                type='primary'
                content='Log In'
            />
            <Button 
                type='secondary'
                content='Sign Up'
            />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:
    {
        width: '100%',
        height: '100%',
    },
    
    background: 
    {
        width: '100%',
        height: '100%',
    },
    image: 
    {
        width: '100%',
        height: '100%',

        resizeMode: 'cover',
        position: 'absolute',
    },

    titles:
    {
        width: '100%',
        alignItems: 'center',

        marginTop: '20%',
    },
    title:
    {
        color: '#fff',
        fontSize: 40,
        fontWeight: '900',
    },
    subtitle:
    {
        color:'#eeeeee',
        fontSize: 16,
        fontWeight: '500'
    },

    buttons:
    {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,

        marginTop: '125%',
    }

  });