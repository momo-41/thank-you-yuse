"use client";
import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
const LabTabs = () => {
  const [value, setValue] = React.useState("1");

  const tabColors: Record<string, string> = {
    "1": "#E91E63", // ピンク（全員）
    "2": "#1089DA", // 青（25卒）
    "3": "#EE953C", // オレンジ（26卒）
    "4": "#52C9A2", // 緑（27卒）
    "5": "#B558C9", // 紫（28卒）
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box borderBottom={1} borderColor={"divider"}>
        <TabList
          onChange={handleChange}
          centered
          sx={{
            "& .Mui-selected": {
              color: tabColors[value], // 選択中のタブの色変更
            },
            "& .MuiTabs-indicator": {
              backgroundColor: tabColors[value], // 下線の色変更
            },
          }}
        >
          <Tab label="全員" value="1" sx={{ color: "#E91E63" }} />
          <Tab label="25卒" value="2" sx={{ color: "#1089DA" }} />
          <Tab label="26卒" value="3" sx={{ color: "#EE953C" }} />
          <Tab label="27卒" value="4" sx={{ color: "#52C9A2" }} />
          <Tab label="28卒" value="5" sx={{ color: "#B558C9" }} />
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
      <TabPanel value="4">Item Four</TabPanel>
      <TabPanel value="5">Item Five</TabPanel>
    </TabContext>
  );
};
export default LabTabs;
