import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import SecondHeader from '../../assets/components/custom_hearder/SecondHeader';
import styles from './Style';
import CommentsComp from '../../assets/components/CommentsComp';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReplyInput from '../../assets/components/ReplyInput';

const CommentSheet = () => {
  const navigation = useNavigation({ navigation });
  const inputRef = useRef(null);
  const [comment, setComment] = useState('Write a comment...'); 
  const [highlightedName, setHighlightedName] = useState('');
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
    setComment('Write a comment...'); 
    toggleCommentVisibility();
  };

  const toggleCommentVisibility = () => {
    setCommentVisible(!isCommentVisible);
  };

  return (
    <View style={styles.Container}>
      <SecondHeader navigation={navigation} name="Comments" icon="angle-left" />
      <ScrollView style={styles.sub_container}>
        <ScrollView style={styles.notification_container}>
          <View style={styles.notification_details}>
            <CommentsComp onReplyPress={() => handleReplyPress('Lady Gaga')} />
          </View>
          <View style={styles.notification_details}>
            <ReplyInput onReplyPress={() => handleReplyPress('Lady Gaga')} />
          </View>
          <View style={styles.notification_details}>
            <CommentsComp onReplyPress={() => handleReplyPress('Lady Gaga')} />
          </View>
          <View style={styles.notification_details}>
            <CommentsComp onReplyPress={() => handleReplyPress('Lady Gaga')} />
          </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.commentContainer}>
        <View style={styles.comment_sub_Container}>
        <TouchableOpacity onPress={postComment} style={styles.postButton}>
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
      </View>
    </View>
  );
};

export default CommentSheet;
