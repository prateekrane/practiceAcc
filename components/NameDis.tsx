import { View, Text } from 'react-native'
import React from 'react'
type NameProps = {
    name: string,
    sendData: (value: number) => void,
    sendName: (value: string) => void
    ,
}
export default function NameDis(props: NameProps) {
    const counter = 1;
    const bhai_name = "Parv Kanungo";
    props.sendData(counter);
    props.sendName(bhai_name);

    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}