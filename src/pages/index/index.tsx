import React from "react";
import { View, Swiper, SwiperItem, Text, Image } from "@tarojs/components";
import SubTitle from "@/components/SubTitle";
import Advertisement from "@/components/Advertisement";
import ItemCard from "@/components/ItemCard";
import SearchWrapper from "@/components/SearchWrapper";
import useNavigate from '@/common/hooks/useNavigate'
import zsbIcon from "@/images/icon_zsb.png";
import gqzIcon from "@/images/icon_gqz.png";
import kyIcon from "@/images/icon_ky.png";
import zgzIcon from "@/images/icon_zgz.png";

import "./index.scss";

const Index: React.FC<{}> = () => {

  const goSchoolList=()=>{
    useNavigate('/pages/school/index')
  }

  return (
    <View className="index">
      <SearchWrapper />

      <Swiper
        className="banner"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image
            src={
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2509851568,1831207138&fm=26&gp=0.jpg"
            }
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            src={
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2509851568,1831207138&fm=26&gp=0.jpg"
            }
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            src={
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2509851568,1831207138&fm=26&gp=0.jpg"
            }
          />
        </SwiperItem>
      </Swiper>

      <View className="cate">
        <View className="item">
          <Image className="icon" src={zsbIcon} />
          <View className="text">专升本</View>
        </View>
        <View className="item">
          <Image className="icon" src={gqzIcon} />
          <View className="text">高起专</View>
        </View>
        <View className="item">
          <Image className="icon" src={kyIcon} />
          <View className="text">考研</View>
        </View>
        <View className="item">
          <Image className="icon" src={zgzIcon} />
          <View className="text">资格证</View>
        </View>
      </View>

      <Advertisement className="ad-space"/>

      <SubTitle
        title={"热门学校"}
        rightCon={<Text onClick={goSchoolList} className={"more"}>查看更多 ></Text>}
      />

      <Swiper
        className="school-wrapper"
        circular
        indicatorDots={false}
        autoplay
      >
        <SwiperItem>
          <View className="school-card">
            <View className="school-item">
              <Image className="school-logo" />
              <View className="school-con">
                <View className="name">武汉大学</View>
                <View className="desc">
                  武汉大学成立“弘扬 疫精神 坚定爱国武汉大学成立“弘扬 疫精神
                  坚定爱国
                </View>
              </View>
            </View>

            <View className="school-item">
              <Image className="school-logo" />
              <View className="school-con">
                <View className="name">武汉大学</View>
                <View className="desc">
                  武汉大学成立“弘扬 疫精神 坚定爱国武汉大学成立“弘扬 疫精神
                  坚定爱国
                </View>
              </View>
            </View>
            <View className="school-item">
              <Image className="school-logo" />
              <View className="school-con">
                <View className="name">武汉大学</View>
                <View className="desc">
                  武汉大学成立“弘扬 疫精神 坚定爱国武汉大学成立“弘扬 疫精神
                  坚定爱国
                </View>
              </View>
            </View>
            <View className="school-item">
              <Image className="school-logo" />
              <View className="school-con">
                <View className="name">武汉大学</View>
                <View className="desc">
                  武汉大学成立“弘扬 疫精神 坚定爱国武汉大学成立“弘扬 疫精神
                  坚定爱国
                </View>
              </View>
            </View>
          </View>
        </SwiperItem>
      </Swiper>

      <SubTitle
        title={"热门专业"}
        rightCon={<Text className={"more"}>查看更多 ></Text>}
      />

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
