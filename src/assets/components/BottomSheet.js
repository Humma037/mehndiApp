import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../theme/Color";
import CommentsComp from '../components/CommentsComp'
import { useNavigation } from '@react-navigation/native';

export default function LikeScreen() {
  const refRBSheet = useRef();  
  const navigation = useNavigation({ navigation });
  const [highlightedName, setHighlightedName] = useState('');
  const inputRef = useRef(null);
  const [comment, setComment] = useState('');
  const [isCommentVisible, setCommentVisible] = useState(false);

  useEffect(() => {
    if (isCommentVisible) {
      inputRef.current.focus();
      setComment(`@${highlightedName} `);
    }
  }, [isCommentVisible, highlightedName]);

  const handleTextInputFocus = () => {
    setComment(`@${highlightedName} `);
  };

  const handleReplyPress = (name) => {
    setCommentVisible(true);
    setHighlightedName(name);
  };
  

  const postComment = () => {
    console.log('Posted Comment:', comment);
    setComment('');
    toggleCommentVisibility();
  };

  const toggleCommentVisibility = () => {
    setCommentVisible(!isCommentVisible);
  };

  const handleCommentPress = () => {
    navigation.navigate('Comments');
  };

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };


  return (
    <View style={styles.container}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={550}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: colors.DividingLine,
            marginTop: 15
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        }}
      >
        <View contentContainerStyle={{ flexGrow: 1 }}>
          <Text
            style={{
              color: 'black', textAlign: 'center',
              fontSize: 13, paddingVertical: 15
            }}
          >
            1.1K Peoples Like this post
          </Text>

          <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '100%' }} />
          <ScrollView>
            <View style={{ flexGrow: 1 }}>
              <TouchableOpacity onPress={handleCommentPress} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 12, paddingBottom: 25 }}>All Comments</Text>
              </TouchableOpacity>
              <View style={{ marginBottom: 15 }}>
                <CommentsComp onReplyPress={handleReplyPress}/>
              </View>
              <View style={{ marginBottom: 15 }}>
                <CommentsComp onReplyPress={handleReplyPress}/>
              </View>
              <View style={{ marginBottom: 15 }}>
                <CommentsComp onReplyPress={handleReplyPress}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
      <View style={styles.commentContainer}>
        {isCommentVisible && (
          <>
            <View style={styles.comment_sub_Container}>
              <TouchableOpacity onPress={postComment} style={styles.image_container}>
                <Image
                  source={require('../../assets/Images/Hijab-Dp.jpg')}
                  style={styles.user_Icon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <View style={styles.input_Container}>
              <TextInput
                ref={inputRef}
                placeholder={`@${highlightedName} `}
                multiline
                value={comment}
                onChangeText={setComment}
                placeholderTextColor="#A6A6A6"
                style={styles.commentInput}
                onFocus={handleTextInputFocus}
              />
              </View>
              <TouchableOpacity onPress={postComment} style={styles.postButton}>
                <MaterialCommunityIcons name="send" size={22} color="#fff" style={styles.commentIcon} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
