import { View, Text, StyleSheet, Image,TouchableOpacity  } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useContext,useState } from 'react';



const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likesCount);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = () => {
      if (!isLiked) {
        setLikes(likes + 1);
      } else {
        setLikes(likes - 1);
      }
  
      setIsLiked(!isLiked);
    };
  
    return (
      <View style={styles.postContainer}>
        <View style={styles.postInfo}>
          <View style={styles.postHeader}>
            <Text style={styles.username}>{post.title}</Text>
          </View>
        </View>
        <Image source={{ uri: post.pathPhoto }} style={styles.postImage} />
        <View style={styles.postFooter}>
          <TouchableOpacity onPress={handleLike}>
            <Icon name={isLiked ? 'heart' : 'heart-outline'} color={isLiked ? 'red' : 'black'} type="font-awesome" size={30} />
          </TouchableOpacity>
          <Icon name="chatbubble-outline" color='black' type="font-awesome" size={30} />
        </View>
        <Text style={styles.likes}>{likes} Me gusta</Text>
        <Text style={styles.description}>{post.description}</Text>
        <Text style={styles.likes}>Ver los {post.comments} comentarios</Text>
      </View>
    );
  };

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