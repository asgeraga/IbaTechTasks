import React, {Component} from 'react';
import TabContent from "./TabContent/TabContent";
import TabHeader from "./TabHeader/TabHeader";

import './TabsContainer.scss'

class TabsContainer extends Component {
  state = {
    activeTab: 0
  };

  render() {
    let tabsHeaders = [],
      activeTabContent = <TabContent
        text={this.props.tabs[this.state.activeTab].content}/>;

    this.props.tabs.forEach((t, ind) => {
      const clickHandle = () => this.setState({activeTab: ind});

      tabsHeaders.push(<TabHeader
        key={ind}
        text={t.title}
        click={clickHandle}/>);
    });

    return (
      <div className={'tabs-container'}>
        <div className="tabs-headers">{tabsHeaders}</div>
        <div className="tabs-content">{activeTabContent}</div>
      </div>
    );
  }
}

export default TabsContainer;