import React from "react";
import {Image, View} from "@tarojs/components";
import './index.scss'

interface Iprops {

}

const Index: React.FC<Iprops> = (props: Iprops) => {
  return (
    <View className="item-card">
      <Image className="logo"/>
      <View className="item-con">
        <View className="name">临床医学
        </View>
        <View
          className="desc">培养较扎实的基础医学理论培养较扎实的基础医学理论和临床医学知识以培养较扎实的基础医学理论和临床医学知识以和临床医学知识以培养较扎实的基础医学理论和临床医学知识以</View>
      </View>
    </View>
  );
};

export default Index;
