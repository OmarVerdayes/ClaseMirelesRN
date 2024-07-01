import { View, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Image, Input, Button } from 'react-native-elements';
import {Icon} from "@rneui/base";

export default function FormLogin() {

    const [hidePassword, setHidePassword] = useState(true)
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://placehold.co/150x150.png' }}
                style={{ width: 150, height: 150 }}
            />
            <Input
                placeholder='Email'
                containerStyle={{ marginVertical: 16 }}
                keyboardType='email-address'
                label='Correo electrónico'
                labelStyle={{ color: 'green' }}
            />
            <Input
                placeholder='*******'
                containerStyle={{ marginVertical: 16 }}
                label='Contraseña'
                labelStyle={{ color: 'green' }}
                secureTextEntry={hidePassword}
                rightIcon={
                <Icon
                    name={hidePassword ? "eye": "eye-off"}
                    type='material-community'
                    onPress={() => setHidePassword(!hidePassword)}
                />
                }
            />
            <Button
                title='Iniciar sesión'
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={{ color: 'green' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 64,
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 16,
    },
    buttonContainer: {
        width: '80%',
        marginTop: 16,
    },
});
