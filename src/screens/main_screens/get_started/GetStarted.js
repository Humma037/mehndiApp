import { ScrollView, Text, View, email, Image } from 'react-native'
import React from 'react'
import ProceedButton from '../../../assets/components/reusable_buttons/ProceedButton'
import MainStyles from '../../../assets/styles/MainStyles'
import styles from './Styles'
import colors from '../../../assets/theme/Color'
// import { ScrollView } from 'react-native-gesture-handler'

const GetStarted = ({ navigation }) => {

    const handleContinuePress = () => {
        navigation.navigate('CreateAccount');
    };

    return (
        <ScrollView style={styles.Container}>
            {/* <ScrollView> */}
            <Text style={{textAlign:'center', color:'blue', marginTop:25, fontWeight:'bold', fontSize:17, color:'#455A64'}}>Welcome to Cliquey!</Text>
            <View style={{ alignItems: 'center', marginVertical: '7%' }}>
                <View style={MainStyles.Direction_Horizental}>
                    <View style={styles.image_style}>
                        <Image
                            source={require('../../../assets/Images/image_one.png')}
                            resizeMode="cover"
                        />
                    </View>
                    <View>
                        <View style={styles.image_style}>
                            <Image
                                source={require('../../../assets/Images/image_two.png')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.image_style}>
                            <Image
                                source={require('../../../assets/Images/image_three.png')}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.image_style}>
                    <Image
                        source={require('../../../assets/Images/image_six.png')}
                        resizeMode="cover"
                    />
                </View>
                <View style={MainStyles.Direction_Horizental}>
                    <View style={styles.image_style}>
                        <Image
                            source={require('../../../assets/Images/image_five.png')}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.image_style}>
                        <Image
                            source={require('../../../assets/Images/image_four.png')}
                            resizeMode="cover"
                        />
                    </View>
                </View>
             
            </View>
            <View style={{ alignItems: 'center', marginBottom:30 }}>
                <ProceedButton title="Get Started" onPress={handleContinuePress} />
            </View>
            {/* </ScrollView> */}
        </ScrollView>
    )
}

export default GetStarted
