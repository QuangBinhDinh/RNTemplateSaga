import { TextNormal } from '@components/text';
import React from 'react';
import { View } from 'react-native';

const EmptyScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <TextNormal>This is a test screen</TextNormal>
        </View>
    );
};

export default EmptyScreen;
