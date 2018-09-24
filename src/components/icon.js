import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconSource } from "../constants";

export default Icon = ({name, source, style, ...otherProperties}) => {
    switch (source) {
        case IconSource.FONT_AWESOME_5:
            return (<FontAwesome5 name={name} {...otherProperties} />);
        case IconSource.ION_ICONS:
            return (<Ionicons name={name} {...otherProperties} />);
        case IconSource.COMMUNITY_ICONS:
            return (<CommunityIcons name={name} {...otherProperties} />);
    }
}