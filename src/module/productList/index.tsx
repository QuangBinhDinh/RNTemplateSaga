import React, { forwardRef, memo, useCallback, useRef, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SAMPLE_1 = {
    id: '54',
    category_id: '54',
    maxPrice: 36,
    minPrice: 27,
    order: 'low_price',
    dt: Date.now(),
};
const SAMPLE_2 = {
    id: '7',
    category_id: '7',
    maxPrice: 27,
    minPrice: 18,
    order: 'sold',
    dt: Date.now(),
};
const ProductListScreen = () => {
    const listRef = useRef<FlatList>(null);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <View style={styles.headerList}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Filter 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Filter 2</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductListScreen;
const styles = StyleSheet.create({
    headerList: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 110,
        marginTop: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
    },
    filterButton: {
        backgroundColor: '#2792ce',
        height: 70,
        width: 150,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productButton: {
        width: '47%',
        height: 230,
        // borderWidth: 1,
    },

    footer: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
