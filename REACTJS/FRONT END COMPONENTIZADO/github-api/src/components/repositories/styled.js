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

WrapperTabList.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
`;

WrapperTabList.tabsRole = 'TabPanel';