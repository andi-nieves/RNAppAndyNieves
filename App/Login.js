import React, { useCallback, useEffect, useState, useContext } from "react";
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, AlertDialog, Text } from 'native-base'
import { Formik } from 'formik';
import ReactNativeBiometrics from 'react-native-biometrics'
 const rnBiometrics = new ReactNativeBiometrics()

function Login({ navigation }) {
    const [showAlert, setShowAlert] = useState(false)

    useEffect(async () => {
        rnBiometrics.simplePrompt({
            promptMessage: 'Login with your Biometrics', 
            cancelButtonText: 'Use Username & Password'})
        .then((resultObject) => {
          const { success } = resultObject
      
          if (success) {
            navigation.replace('Dashboard')
          } 
        })
        .catch(() => {
          console.log('biometrics failed')
        })
    }, [])

    const onClose = useCallback(() => {
        setShowAlert(false)
    }, [])

    return <Center w="100%" style={{ height: "100%" }} bgColor={"gray.900"}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Welcome
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Sign in to continue!
            </Heading>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={values => {
                    if (values.username.toLowerCase() === "test" && values.password === "123456789") {
                        navigation.replace('Dashboard')
                    } else {
                        setShowAlert(true)
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Username</FormControl.Label>
                            <Input
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input
                                type="password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <Link _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "indigo.500"
                            }} alignSelf="flex-end" mt="1">
                                Forget Password?
                            </Link>
                        </FormControl>
                        <Button
                            mt="5"
                            onPress={handleSubmit}
                            disabled={!values.username || !values.password}

                            bgColor={!values.username || !values.password ? "gray.500" : "blue.400"}>
                            Sign in
                        </Button>
                    </VStack>
                )}
            </Formik>
        </Box>
        <AlertDialog isOpen={showAlert} onClose={onClose} padding="5">
            <AlertDialog.Content>
                <AlertDialog.Body margin={5}>
                    <Center ><Text>Incorrect username and password</Text></Center>
                    <Center mt="5">
                        <Button colorScheme={"blue"} onPress={onClose} width={"100%"}>
                            Close
                        </Button>
                    </Center>
                </AlertDialog.Body>
            </AlertDialog.Content>
        </AlertDialog>
    </Center>
}

export default Login