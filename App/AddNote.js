import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { View, Center, VStack, FormControl, Input, Button, AlertDialog, Text, TextArea } from 'native-base'
import { Formik } from 'formik';
import { add, remove } from "../Redux/notesSlice";

function AddNote({ navigation, route: { params } }) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState()
    const [showDialog, setShowDialog] = useState()

    useEffect(() => {
        if (!params?.item) {
            setEdit(true)
        } 
    }, [params?.item])

    const handleDelete = useCallback(() => {
        dispatch(remove(params.item))
        navigation.replace('Dashboard')
    }, [params?.item])

    return <View w="100%" style={{ height: "100%" }} bgColor={"gray.900"} padding="10">
        <Formik
            initialValues={params?.item || { title: '', note: '' }}
            onSubmit={values => {
                console.log('v', values)
                dispatch(add(values))
                navigation.replace('Dashboard')
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Title</FormControl.Label>
                        <Input
                            isDisabled={!edit}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Note</FormControl.Label>
                        <TextArea isDisabled={!edit} onChangeText={handleChange('note')}
                            onBlur={handleBlur('note')}
                            value={values.note} h={300} w="100%" placeholder="Note" />
                    </FormControl>

                    {edit ? <Button
                        mt="5"
                        w="100%"
                        onPress={handleSubmit}
                        disabled={!values.title || !values.note}
                        bgColor={!values.title || !values.note ? "gray.500" : "blue.400"}>
                        Save
                    </Button> : <View>
                        <Button
                            mt="5"
                            w="100%"
                            onPress={() => setEdit(true)}
                            disabled={!values.title || !values.note}
                            bgColor={"green.300"}>
                            Edit
                        </Button>
                        <Button
                            mt="5"
                            w="100%"
                            onPress={() => setShowDialog(true)}
                            disabled={!values.title || !values.note}
                            bgColor={"red.500"}>
                            Delete
                        </Button>
                    </View>}

                </VStack>
            )}
        </Formik>

        <AlertDialog isOpen={showDialog} padding="5">
            <AlertDialog.Content>
                <AlertDialog.Body margin={5}>
                    <Center ><Text>Are you sure you want to delete this note?</Text></Center>
                    <Center mt="5">
                        <Button colorScheme={"red"} width={"100%"} mb="4" onPress={handleDelete}>
                            Delete
                        </Button>
                        <Button colorScheme={"blue"} onPress={() => setShowDialog(false)} width={"100%"}>
                            Close
                        </Button>
                    </Center>
                </AlertDialog.Body>
            </AlertDialog.Content>
        </AlertDialog>
    </View>
}

export default AddNote