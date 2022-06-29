import React from "react";
import {Text, TextStyle} from "react-native";

export default function Mtext({children, style = {} , ...other} : {children: React.ReactNode, style: TextStyle}){

    return (
        <Text style={{fontSize: 16, ...style}} {...other}>
            {children}
        </Text>
    )
}