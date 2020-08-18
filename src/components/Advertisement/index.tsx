import React from "react";
import { Image, Swiper, SwiperItem } from "@tarojs/components";
import classNames from "classnames";
import "./index.scss";

interface Iprops {
  className?: string;
}

const Index: React.FC<Iprops> = (props: Iprops) => {
  return (
    <Swiper
      className={classNames("ad", props.className && props.className)}
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots={false}
      autoplay
    >
      <SwiperItem>
        <Image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2509851568,1831207138&fm=26&gp=0.jpg" />
      </SwiperItem>
      <SwiperItem>
        <Image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2509851568,1831207138&fm=26&gp=0.jpg" />
      </SwiperItem>
    </Swiper>
  );
};

export default Index;
