import React from "react";
import {Image, Input, View} from "@tarojs/components";
import locationIcon from "@/images/icon_location.png";
import searchIcon from "@/images/icon_search.png";
import scanIcon from "@/images/icon_scan.png";
import './index.scss'


interface Iprops {

}

const Index: React.FC<Iprops> = (props: Iprops) => {
  return (
    <View className="search">
      <View className="search-wrapper">
        <View className="search-area">
          <View className="location">
            <View className="city">湖北</View>
            <Image className="icon" src={locationIcon}/>
          </View>
          <View className="line"></View>
          <View className="input-wrapper">
            <Input/>
            <Image className="icon" src={searchIcon}/>
          </View>
        </View>
        <Image className="scan" src={scanIcon}/>
      </View>
      <View className="blank"></View>
    </View>
  );
};

export default Index;
