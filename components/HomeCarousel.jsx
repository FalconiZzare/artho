import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Family from "@/assets/images/1.jpg";
import FamilyCopy from "@/assets/images/2.jpg";
import Retirement from "@/assets/images/3.jpg";

const data = [
  {
    id: 1,
    image: Family
  },
  {
    id: 2,
    image: FamilyCopy
  },
  {
    id: 3,
    image: Retirement
  }
];

const HomeCarousel = () => {
  return (
    <View className={"mt-4 flex items-center justify-center"}>
      <Carousel
        autoPlay={true}
        autoPlayInterval={2000}
        loop={true}
        mode={"parallax"}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 44
        }}
        snapEnabled
        data={data}
        width={350}
        height={170}
        vertical={false}
        renderItem={({ item }) => (
          <View
            className={"overflow-hidden rounded-xl border border-foreground/20"}
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode={"cover"}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeCarousel;
