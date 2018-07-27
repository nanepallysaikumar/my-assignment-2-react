import * as React from 'react';

import SpeakerList from './Component/spealetList';

const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

export interface Istate {
  speakers: string[],
  selectedspeaker: any
}
class App extends React.Component<{},Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedspeaker: '',
      speakers: allSpeakers
    }
  }

public sortList = () => {
  const sortedList = this.state.speakers.slice().sort();
  this.setState({speakers: sortedList});
}

public selectedSpeaker = (speaker: string) => {
  this.setState({selectedspeaker: speaker})
}

public resetList = () => {
  this.setState({speakers: allSpeakers, selectedspeaker: ''});
}
public render() {
  const {speakers, selectedspeaker} = this.state;
  const speakerListItems = speakers.map((speaker: string,index: number) => 
    (<SpeakerList key={index} onClick={this.selectedSpeaker} speaker={speaker}  selected={speaker === selectedspeaker}/>
  ));


  return(
    <div>
          <div>
            <button onClick={this.sortList}>Sort List</button>
            <button onClick={this.resetList}>Reset List</button>
          </div>
          <div>
          <h1>Parent to Child communication and Vise vers</h1>
          <h3>List items</h3>
          {speakerListItems}
          </div>
    </div>
  );
}
}

export default App;