import React from "react";
import { Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Car } from "@/lib/icons/Car";
import { Progress } from "@/components/ui/progress";
import { Cow } from "@/lib/icons/SVG/Cow";
import { CHART_CONFIG } from "@/constants/ChartConfig";

const CAR_CHART_DATA = {
  labels: ["Car Savings"],
  data: [0.7]
};

const QURBANI_CHART_DATA = {
  labels: ["Qurbani"],
  data: [0.9]
};

const HomePlans = () => {
  return (
    <View className={"mt-2"}>
      <Text className={"font-semibold text-primary"}>My Plans</Text>
      <View className={"mt-2 flex flex-row items-center justify-center"}>
        <Plan
          data={CAR_CHART_DATA}
          title={"Car Savings"}
          expense={"7,00,000"}
          budget={"10,00,000"}
          icon={<Car className={"text-foreground"} size={30} />}
        />
      </View>
      <View className={"mt-6 flex flex-row items-center justify-center"}>
        <Plan
          data={QURBANI_CHART_DATA}
          title={"Qurbani"}
          expense={"1,80,000"}
          budget={"2,00,000"}
          icon={<Cow />}
        />
      </View>
    </View>
  );
};

const Plan = ({ data, title, expense, budget, icon }) => {
  return (
    <>
      <View className={"relative"}>
        <ProgressChart
          data={data}
          width={60}
          height={60}
          chartConfig={CHART_CONFIG}
          hideLegend
          strokeWidth={6}
          radius={25}
        />
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }]
          }}
        >
          {icon}
        </View>
      </View>
      <View className={"flex-1"} style={{ marginLeft: 6 }}>
        <View className={"mb-5 flex flex-1 flex-row items-center justify-between"}>
          <Text className={"font-bold text-primary"}>{title}</Text>
          <Text className={"text-lg font-bold text-primary"}>
            {`৳ ${expense} / `}
            <Text className={"text-sm font-normal"}>{`৳ ${budget}`}</Text>
          </Text>
        </View>
        <Progress
          value={data.data[0] * 100}
          className={"shadow-inner mb-2.5 h-3"}
          indicatorClassName={"bg-secondary-foreground rounded-full"}
        />
      </View>
    </>
  );
};

export default HomePlans;
