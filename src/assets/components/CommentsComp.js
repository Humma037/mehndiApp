import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../theme/Color';
import MainStyles from '../styles/MainStyles';

const CommentsComp = ({ onReplyPress, onThreeDotsPress }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCommentPress = () => {
    toggleModal();
  };

  const handleReplyPress = () => {
    onReplyPress('Lady Gaga');
  };
  const handleThreeDotsPress = () => {
    onThreeDotsPress();
  };
  return (
    <View style={styles.Container}>
      <View style={styles.main_Container}>
        <View style={MainStyles.Direction_Horizental}>
          <FontAwesome name="user" size={25} style={styles.user_Icon} />
          <View style={styles.sub_container}>
            <View style={styles.massage_Container}>
              <Text style={styles.name_heading}>Lady Gaga</Text>
              <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={styles.timing_text}>18:09 AM 15/09/2023</Text>
                <TouchableOpacity onPress={handleThreeDotsPress}>
                  <Entypo name="dots-three-vertical" size={19} style={styles.ellipsis_Icon} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.para_text}>
              Lorem ipsum doler milra dilrof Lorem ipsum doler milra Lorem ipsum doler dilrof Lorem ipsum doler milra dilrof Lorem ipsum doler.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonContent}>
                  <FontAwesome name="thumbs-o-up" size={15} color='black' style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>345</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleReplyPress}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Reply</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentsComp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main_Container: {
    width: '85%',
  },
  sub_container: {
    backgroundColor: colors.seprator,
    padding: 10,
    width: '85%',
    borderRadius: 10,
  },
  massage_Container: {
    flexDirection: 'row',
    width: '105%',
    justifyContent: 'space-between',
  },
  user_Icon: {
    width: 45,
    height: 45,
    backgroundColor: colors.seprator,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 50,
    color: colors.DividingLine,
    marginHorizontal: 5,
  },
  name_heading: {
    fontSize: 12,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  timing_text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: colors.DividingLine,
  },
  para_text: {
    color: 'black',
    fontSize: 12,
  },
  ellipsis_Icon: {
    color: colors.DividingLine,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    width: '22%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 10,
    color: 'black',
    marginLeft:2
  },
});
