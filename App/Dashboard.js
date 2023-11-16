import React from "react";
import { useSelector } from "react-redux";
import { Center, View, Text } from "native-base";

function Dashboard() {
    const state = useSelector(state => state)
    return <View w="100%" style={{ height: "100%" }} bgColor={"gray.900"}>
    <Text>Home</Text>
    <Text style={{ marginTop: 20 }}>Go to Tabs</Text>
</View>
}

export default Dashboard