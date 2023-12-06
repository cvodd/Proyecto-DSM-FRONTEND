import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Post = ({ post }) => {
    return (
        <View style={styles.postContainer}>
            <View style={styles.postInfo}>
                <View style={styles.postHeader}>
                    <Text style={styles.username}>{post.title}</Text>
                </View>
            </View>
            <Image source={{ uri: post.pathPhoto }} style={styles.postImage} />
            <View style={styles.postFooter}>
                <Icon name="heart-outline" color='black' type="font-awesome" size={30} />
                <Icon name="chatbubble-outline" color='black' type="font-awesome" size={30} />
            </View>
            <Text style={styles.likes}>{post.likesCount} Me gusta</Text>
            <Text style={styles.description}>{post.description}</Text>
            <Text style={styles.likes}>Ver los {post.comments} comentarios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 16,
    },
    postImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    postInfo: {
        padding: 12,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 16,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 12,
    },
    likes: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 4,
        marginLeft: 12,
    },
    description: {
        color: 'black',
        marginBottom: 4,
        marginLeft: 12,
    },
    comments: {
        color: '#888',
    },
});

export default Post