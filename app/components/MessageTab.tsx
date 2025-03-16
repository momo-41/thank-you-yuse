"use client";
import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import GridCard from "./GridCard";
import YearGridCard from "./YearGridCard";
import { useMessageData } from "../data/fetchData";

const MessageTab = () => {
  const [value, setValue] = React.useState("1");
  const messageData = useMessageData();
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

  const tabs = [
    { value: "1", label: "全員" },
    { value: "2", label: "25卒" },
    { value: "3", label: "26卒" },
    { value: "4", label: "27卒" },
    { value: "5", label: "28卒" },
  ];

  return (
    <TabContext value={value}>
      <Box borderBottom={1} borderColor="divider">
        <TabList
          onChange={handleChange}
          centered
          aria-label="Message Tabs"
          sx={{
            "& .Mui-selected": { color: tabColors[value] },
            "& .MuiTabs-indicator": { backgroundColor: tabColors[value] },
          }}
        >
          {/* 全員タブ */}
          <Tab
            // component="button"
            label="全員"
            value="1"
            sx={{
              fontSize: { xs: 13, md: 20 },
              color: tabColors["1"],
              minWidth: { xs: 70, md: 180 },
              minHeight: 60,
              "&.Mui-selected": { color: "#E45C92" },
            }}
          />
          {/*学年ごとのタブ */}
          {tabs
            .filter((tab) => tab.value !== "1")
            .map((tab) => (
              <Tab
                // component="button"
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{
                  color: tabColors[tab.value],
                  fontSize: { xs: 13, md: 20 },
                  minWidth: { xs: 70, md: 180 },
                  minHeight: 60,
                }}
              />
            ))}
        </TabList>
      </Box>
      {/* 全員のタブパネル */}
      <TabPanel value="1">
        <GridCard nameColor={tabColors[value]} lineColor={lineColors[value]} messageData={messageData}/>
      </TabPanel>
      {/*学年ごとのタブパネル */}
      {tabs
        .filter((tab) => tab.value !== "1")
        .map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            <YearGridCard
              yearProps={tab.label}
              nameColor={tabColors[value]}
              lineColor={lineColors[value]}
              messageData={messageData}
            />
          </TabPanel>
        ))}
    </TabContext>
  );
};

export default MessageTab;
