import * as React from 'react';
import { View, Text, FlatList } from 'react-native';

const MESSAGES: Record<string, string[]> = {
    You: ['Stay strong!', 'Keep pushing!'],
    Home: ['Take out the trash', 'Clean your room'],
    Love: ['I miss you ❤️', 'Good night 😘'],
    Family: ['Call Grandma', 'Dinner at 7 PM'],
    Friends: ['Game night tomorrow?', 'See you soon!'],
    School: ['Assignment due Monday', 'Group project at 3 PM'],
};

export default function MessagesScreen({ route }) {
    const { category } = route.params;

    return (
        <FlatList
            data={MESSAGES[category]}
            keyExtractor={(msg, i) => `${category}-${i}`}
            renderItem={({ item }) => (
                <View style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ddd' }}>
                    <Text>{item}</Text>
                </View>
            )}
        />
    );
}
