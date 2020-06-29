

import React from 'react';
import {Card} from "antd";

const Pokemon = ({name}) => {

    return (<Card size="small" title={name} style={{ width: 300 }}/>);

};

export default Pokemon;
