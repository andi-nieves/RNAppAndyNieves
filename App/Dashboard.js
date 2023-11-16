import React from "react";
import { TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux";
import { View, Text, Button, Heading, ScrollView } from "native-base";
import { getNotesState } from "../Redux/notesSlice";

function Dashboard({ navigation }) {
    const notes = useSelector((state) => getNotesState(state))
    
    return <View w="100%" style={{ height: "100%" }} bgColor={"gray.900"} padding="5">
        <Heading size="lg" fontWeight="600" mb="3" color="coolGray.800" _dark={{
            color: "warmGray.50"
        }}>
            Added Notes
        </Heading>
        <ScrollView>
            {notes.map((item) => <View key={item.id} bgColor={"white"} style={{ borderRadius: 10, backgroundColor: 'rgba(200, 200, 200, 0.1)' }} mb="3" p="4">
                <TouchableOpacity onPress={() => navigation.navigate('AddNote', { item })}>
                    <Heading size="md" fontWeight="600" _dark={{
                        color: "warmGray.50"
                    }}>
                        {item.title}
                    </Heading>
                    <Text opacity={0.5}>{item.note}</Text>
                </TouchableOpacity>
            </View>)}
        </ScrollView>

        <Button
            onPress={() => navigation.navigate('AddNote')}
            style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                position: "absolute",
                bottom: 30,
                right: 30
            }} >+</Button>
    </View>
}

export default Dashboard