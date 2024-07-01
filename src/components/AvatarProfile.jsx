import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

export default function AvatarProfile(){
    return(
        <View style = { styles.container }>
            <View style={{ flexDirection: 'row' }}>
                <Avatar
                    source={ 'https://cdn-icons-png.flaticon.com/512/11107/11107554.png' }
                    size={ 64 }
                    rounded
                />
                <View style={{ marginRight: 16, flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight:'bold', fontSize: 16 }}>5</Text>
                        <Text>Post</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight:'bold', fontSize: 16 }}>5</Text>
                        <Text>Post</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight:'bold', fontSize: 16 }}>5</Text>
                        <Text>Post</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 16
    }
})