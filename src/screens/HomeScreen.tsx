import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import React from 'react';
import { View } from 'react-native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to Login"/>
        </View>
    );
}
