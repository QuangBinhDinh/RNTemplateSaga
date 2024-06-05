import { TextSemiBold } from '@components/text';
import { useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { useAppDispatch, useAppSelector } from '@store/hook';
import React, { useEffect, useLayoutEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { clearCurrentPost, fetchPostDetail } from './saga/slice';
import { goBack } from '@navigation/service';

const PostDetailScreen = () => {
    const {
        params: { post_id },
    } = useRoute<any>();
    const { detail_post } = useAppSelector(state => state.home);
    const insets = useSafeAreaInsets();
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(fetchPostDetail(post_id));
        return () => {
            dispatch(clearCurrentPost());
        };
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 + insets.top / 2 }}>
            <View style={styles.headerRow}>
                <Pressable style={styles.backButton} onPress={goBack}>
                    <Icon type="ant-design" name="arrowleft" size={24} color={'#ff7300'} />
                </Pressable>

                <TextSemiBold style={styles.title} numberOfLines={1}>
                    {detail_post?.name ?? 'Post loading...'}
                </TextSemiBold>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextSemiBold>{detail_post?.description}</TextSemiBold>
            </View>
        </View>
    );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        height: 64,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        alignItems: 'center',
    },
    backButton: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginLeft: 12,
        width: '85%',
    },
});
