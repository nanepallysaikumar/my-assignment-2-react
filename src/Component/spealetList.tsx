import * as React from 'react';

interface Iprops {
    onClick: any;
    speaker: string,
    selected: boolean
}

const SpeakerList: React.StatelessComponent<Iprops> = ({onClick,speaker,selected}) => {
    const content = selected ? <b>{speaker}</b> : speaker
    const selectlist = () => {
        onClick(speaker);
    }
    return  <li onClick={selectlist}>{content}</li>;
       
    
}














export default SpeakerList;