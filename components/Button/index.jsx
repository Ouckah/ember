import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const Button = (props) => 
{
    const type = props.type;
    const content = props.content;

    const backgroundColor = type === 'primary' ? '#000' : '#fff';
    const textColor = type === 'primary' ? '#fff' : '#000';

    return (
        <TouchableOpacity style={[ styles.button, { backgroundColor: backgroundColor } ]}>

            <Text style={ [ styles.text, { color: textColor } ]}>{content}</Text>

        </TouchableOpacity>
    );
};

export default Button;