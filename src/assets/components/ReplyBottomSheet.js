// components/CustomBottomSheet.js
import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const ReplyBottomSheet = ({ isVisible, onClose }) => {
  const refRBSheet = useRef();

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
      onClose={onClose}
      visible={isVisible}
    >
      <View style={{ padding: 20 }}>
        <Text>This is your custom bottom sheet content.</Text>
      </View>
    </RBSheet>
  );
};

export default ReplyBottomSheet;
