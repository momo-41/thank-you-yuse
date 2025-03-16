"use client";
import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import GridCard from "./GridCard";
import YearGridCard from "./YearGridCard";
const LabTabs = () => {
  const [value, setValue] = React.useState("1");

  const tabColors: Record<string, string> = {
    "1": "#E91E63", // ピンク
    "2": "#10537F", // 青
    "3": "#D46D05", // オレンジ
    "4": "#117642", // 緑
    "5": "#8D00AD", // 紫
  };

  const lineColors: Record<string, string> = {
    "1": "#F7B0DC", // 薄いピンク
    "2": "#98B7F0", // 薄い青
    "3": "#FFCE9D", // 薄いオレンジ
    "4": "#B5E6B5", // 薄い緑
    "5": "#F1B3FF", // 薄い紫
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
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
              color: tabColors[value],
            },
            "& .MuiTabs-indicator": {
              backgroundColor: tabColors[value],
            },
          }}
        >
          <Tab
            label="全員"
            value="1"
            sx={{
              fontSize: { xs: 13, md: 20 },
              color: tabColors["1"],
              minWidth: { xs: 70, md: 180 },
              minHeight: 60,
              "&.Mui-selected": {
                color: "#E45C92",
              },
            }}
          />
          <Tab
            label="25卒"
            value="2"
            sx={{
              fontSize: { xs: 13, md: 20 },
              color: tabColors["2"],
              minWidth: { xs: 70, md: 180 },
              minHeight: 60,
            }}
          />
          <Tab
            label="26卒"
            value="3"
            sx={{
              fontSize: { xs: 13, md: 20 },
              color: tabColors["3"],
              minWidth: { xs: 70, md: 180 },
              minHeight: 60,
            }}
          />
          <Tab
            label="27卒"
            value="4"
            sx={{
              fontSize: { xs: 13, md: 20 },
              color: tabColors["4"],
              minWidth: { xs: 70, md: 180 },
              minHeight: 60,
            }}
          />
          <Tab
            label="28卒"
            value="5"
            sx={{
              fontSize: { xs: 13, md: 20 },
              color: tabColors["5"],
              minWidth: { xs: 70, md: 180 },
              minHeight:60,
            }}
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <GridCard nameColor={tabColors[value]} lineColor={lineColors[value]} />
      </TabPanel>
      <TabPanel value="2">
        <YearGridCard
          yearProps="25卒"
          nameColor={tabColors[value]}
          lineColor={lineColors[value]}
        />
      </TabPanel>
      <TabPanel value="3">
        <YearGridCard
          yearProps="26卒"
          nameColor={tabColors[value]}
          lineColor={lineColors[value]}
        />
      </TabPanel>
      <TabPanel value="4">
        <YearGridCard
          yearProps="27卒"
          nameColor={tabColors[value]}
          lineColor={lineColors[value]}
        />
      </TabPanel>
      <TabPanel value="5">
        <YearGridCard
          yearProps="28卒"
          nameColor={tabColors[value]}
          lineColor={lineColors[value]}
        />
      </TabPanel>
    </TabContext>
  );
};
export default LabTabs;
