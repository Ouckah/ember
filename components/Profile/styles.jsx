import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    profileContainer: 
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

    descBox:
    {
        marginTop: '150%',

        width: '100%',
        height: '30%',

        backgroundColor: '#fff',
        
        
    },

    // text styles
    titles:
    {
        marginTop: '30%',

        width: '100%',
        alignItems: 'center',
    },
    title:
    {
        fontSize: 40,
        fontWeight: '500',
    },
    subtitle:
    {
        fontSize: 16,
        color: '#5c5e62',
    }    

});

export default styles;