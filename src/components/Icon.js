import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Source } from "../sport/SportIcon";

export default Icon = ({name, source, style, ...otherProperties}) => {
    switch (source) {
        case Source.FONT_AWESOME_5:
            return (<FontAwesome5 name={name} {...otherProperties} />);
        case Source.ION_ICONS:
            return (<Ionicons name={name} {...otherProperties} />);
        case Source.COMMUNITY_ICONS:
            return (<CommunityIcons name={name} {...otherProperties} />);
    }
}