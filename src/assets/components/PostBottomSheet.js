import React, { useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { ThreeDots } from '../../assets/svg/index'
import colors from "../theme/Color";
import PostSetting from '../components/PostSetting'

export default function Example() {
    const refRBSheet = useRef();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <ThreeDots width={23} height={23} />
            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={300}
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
                <View style={{ padding: 20 }}>
                    <PostSetting />
                </View>
            </RBSheet>
        </View>
    );
}
