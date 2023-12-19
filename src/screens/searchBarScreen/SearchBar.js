import { ScrollView, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import HomeSearchBar from '../../assets/components/search_bar/HomeSearchBar'
import styles from './Style';
import SearchBarHeader from '../../assets/components/search_bar/SearchBarHeader';
import UndefineUser from '../../assets/components/UndefineUser';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <SearchBarHeader />
            <ScrollView style={styles.notification}>
                <View style={styles.data_container}>
                    <Text style={styles.text_heading}>Recent Searches</Text>
                    <TouchableOpacity style={styles.remove_button}>
                    <Text style={styles.text}>Remove All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.this_week_notification}>
                    <View style={styles.notification_details}>
                        <HomeSearchBar />
                    </View>
                    <View style={styles.notification_details}>
                        <UndefineUser />
                    </View>
                    <View style={styles.notification_details}>
                        <UndefineUser />
                    </View>
                    <View style={styles.notification_details}>
                        <UndefineUser />
                    </View>
                    <View style={styles.notification_details}>
                        <HomeSearchBar />
                    </View>
                    <View style={styles.notification_details}>
                        <HomeSearchBar />
                    </View>
                    <View style={styles.notification_details}>
                        <HomeSearchBar />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SearchBar
