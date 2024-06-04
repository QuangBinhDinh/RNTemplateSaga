import { TextNormal, TextSemiBold } from '@components/text';
import React, { memo } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Post } from '../reducer';

const PostItem = ({ item, index }: { item: Post; index: number }) => {
    return (
        <Pressable style={[styles.container, { marginLeft: index % 2 == 1 ? '4%' : 0 }]}>
            <Image style={styles.image} source={{ uri: item.image_url }} resizeMode="cover" />
            <TextNormal style={styles.imageTitle}>{item.name}</TextNormal>
        </Pressable>
    );
};

export default memo(PostItem);

const styles = StyleSheet.create({
    container: {
        width: '48%',
        overflow: 'hidden',
        marginBottom: 14,
        borderWidth: 1,
        borderRadius: 6,
    },
    image: {
        width: '100%',
        height: 130,
    },
    imageTitle: {
        marginLeft: 4,
        marginTop: 8,
    },
});
