import React from "react";
import {View} from "@tarojs/components";
import "./index.scss";

interface Iprops {
  title: string
  rightCon?: React.ReactNode
  customerStyle?: string
}

const Index: React.FC<Iprops> = (props: Iprops) => {
  return (
    <View className="sub-title" style={props.customerStyle}>
      <View className="l">
        {props.title}
      </View>
      <View className="r">
        {props.rightCon}
      </View>
    </View>
  );
};

export default Index;
