import React from 'react';
import './App.css';
import TabsContainer from "./components/TabsContainer/TabsContainer";

const App  = props => {
  const tabsArray = [
    {title:'Tab-1', content:'[Tab-1__CONTENT] Lorem ipsum dolor sit amet concestetur'},
    {title:'Tab-2', content:'[Tab-2__CONTENT] Lorem ipsum dolor sit amet concestetur'},
    {title:'Tab-3', content:'[Tab-3__CONTENT] Lorem ipsum dolor sit amet concestetur'},
    {title:'Tab-4', content:'[Tab-4__CONTENT] Lorem ipsum dolor sit amet concestetur'}
  ];
    return (
      <>
        <TabsContainer tabs={tabsArray}/>
      </>
    );
};

export default App;
