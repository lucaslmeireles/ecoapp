import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <Text style={styles.ecobankHeader}>ECOBANK</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '360px',
        height: '67.87px',
        left: '0px',
        top: '0px',
    },
    ecobankHeader: {
        color: '#03440C',
    }
});
