import React, { useEffect } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import TrendExplore from './component/TrendExplore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TextSemiBold } from '@components/text';
import { useAppSelector } from '@store/hook';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PostItem from './component/PostItem';
import { fetchAllPost } from './saga/slice';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const { post, banner } = useAppSelector(state => state.home);

    const toLogin = async () => {
        try {
            const res = await axios.get('https://glob.api.printerval.com/post');
            console.log('here come response');
            console.log(res);
        } catch (e) {
            console.log('Error occured: ', e);
        }
    };

    useEffect(() => {
        dispatch(fetchAllPost());
    }, []);

    // useEffect(() => {
    //     console.log('Post list ----');
    //     console.log(post);
    // }, [post]);

    return (
        <View style={styles.container}>
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
                contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 14 }}
            >
                <View style={{ height: 10 + insets.top / 1.5 }} />
                <TrendExplore />
                <Pressable style={styles.someButton} onPress={toLogin}>
                    <TextSemiBold style={{ color: 'black' }}>Login Screen</TextSemiBold>
                </Pressable>

                <View style={styles.postContainer}>
                    {post.map((item, index) => (
                        <PostItem item={item} index={index} key={item.id} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    someButton: {
        width: 160,
        height: 60,
        backgroundColor: '#ff7300',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 24,
    },

    postContainer: {
        width: '100%',
        marginTop: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
