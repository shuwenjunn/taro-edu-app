import React from "react";
import { View } from "@tarojs/components";
import Advertisement from "@/components/Advertisement";
import ItemCard from "@/components/ItemCard";
import SearchWrapper from "@/components/SearchWrapper";

import "./index.scss";

const Index: React.FC<{}> = () => {
  return (
    <View className="index">
      <SearchWrapper />
      <Advertisement />
      <View className="major-wrapper">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </View>
    </View>
  );
};

export default Index;
