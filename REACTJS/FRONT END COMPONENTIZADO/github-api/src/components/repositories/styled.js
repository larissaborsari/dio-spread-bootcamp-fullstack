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
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: white;

    &:focus {
        outline: none;
    }

    &.is-selected{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom: transparent;

    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    border: 1px solid #ccc;
    padding: 8px;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.3);
    display: none;
    margin-top : -5px;
    margin-left: 4px;

    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';
