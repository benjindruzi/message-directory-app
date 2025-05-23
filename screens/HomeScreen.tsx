import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CATEGORIES = [
    { key: 'You',    icon: require('../assets/images/you.png') },
    { key: 'Home',   icon: require('../assets/images/home.png') },
    { key: 'Love',   icon: require('../assets/images/love.png') },
    { key: 'Family', icon: require('../assets/images/family.png') },
    { key: 'Friends',icon: require('../assets/images/friends.png') },
    { key: 'School', icon: require('../assets/images/school.png') },
];

export default function HomeScreen({ navigation }) {
    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                        navigation.navigate('Messages', { category: item.key })
                    }
                >
                    <Image source={item.icon} style={styles.icon} />
                    <Text style={styles.label}>{item.key}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 3,            // Android shadow
        shadowColor: '#000',     // iOS shadow
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    icon: {
        width: 48,
        height: 48,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 16,
    },
});