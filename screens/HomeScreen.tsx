import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const CATEGORIES = ['You', 'Home', 'Love', 'Family', 'Friends', 'School'];

export default function HomeScreen({ navigation }) {
    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        margin: 10,
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: '#eee',
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        navigation.navigate('Messages', { category: item })
                    }
                >
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}
        />
    );
}
