import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles'

{/*  */}

const Profile = (props) =>
{
    return (
        
        <View style={styles.profileContainer}>
            
            {/* Profile Picture */}
            <ImageBackground 
                source={require('../../assets/pfps/man3.jpg')}
                style={styles.image}
            />

            {/* Description Box */}
            <View style={styles.descBox}>



            </View>

            {/* Text / Information */}
            <View style={styles.titles}>
                
            </View>

        </View>

    );
}

export default Profile;