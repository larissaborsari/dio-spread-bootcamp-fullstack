import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import styled from 'styled-components';


export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
    
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display:flex;
    margin: 0;
    
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #CED2D6;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: #CED2D6;

    &:focus {
        outline: none;
    }

    &.is-selected{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom: #CED2D6;
        

    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    border: 1px solid #CED2D6;
    padding: 8px;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.3);
    display: none;
    margin-top : -5px;
    margin-left: 4px;
    

    &.is-selected{
        display: block;
        background-color: #CED2D6;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
