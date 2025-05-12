import React from "react";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "@/lib/icons/ArrowLeft";
import { EllipsisVertical } from "@/lib/icons/EllipsisVertical";
import { PieChart } from "react-native-chart-kit";
import { CHART_CONFIG } from "@/constants/ChartConfig";
import { PEI_CHART_DATA } from "@/constants/PieChartData";
import { MoveUp } from "@/lib/icons/MoveUp";
import { cn } from "@/lib/utils";

const Expenses = () => {
  return (
    <SafeAreaView className="h-full">
      <View className={"flex flex-row items-center justify-between p-4"}>
        <ArrowLeft className={"text-foreground/80"} size={24} onPress={() => router.back()} />
        <Text className={"font-medium"}>Expenses</Text>
        <EllipsisVertical className={"text-foreground/80"} size={24} />
      </View>
      <View className={"px-4"}>
        <Text className={"mt-4 text-center text-xs text-foreground/80"}>August 12, 2024</Text>
        <View className={"mt-4 flex flex-row items-center justify-center gap-5"}>
          <Text className={"mt-1.5 text-3xl"} style={{ transform: [{ scale: 1.5 }] }}>
            ৳
          </Text>
          <Text className={"text-center text-5xl"}>41,500</Text>
        </View>

        <View className={"flex flex-row items-center justify-center"}>
          <View className={"relative"}>
            <PieChart
              data={PEI_CHART_DATA}
              width={250}
              height={250}
              chartConfig={CHART_CONFIG}
              accessor={"population"}
              backgroundColor={"transparent"}
              center={[0, 0]}
              hasLegend={false}
              paddingLeft={"62"}
            />
            <View
              className={"rounded-full bg-background"}
              style={{
                height: 130,
                width: 130,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: [{ translateX: "-50%" }, { translateY: "-50%" }]
              }}
            />
          </View>
        </View>
        <View className={"flex flex-row items-center justify-center gap-6"}>
          <Legend color={"#7e67fd"} legend={"Rent"} />
          <Legend color={"#00bf63"} legend={"Grocery"} />
          <Legend color={"#8636f6"} legend={"EMI"} />
          <Legend color={"#ebe8ff"} legend={"Bill"} />
        </View>
        <View className={"mt-8"}>
          <View className={"flex flex-row items-center justify-between"}>
            <Text className={"text-lg"}>Recent Expenses</Text>
            <Text className={"text-sm"}>Show All</Text>
          </View>

          <ExpenseItem name={"EMI"} date={"4/12/2024"} amount={"-7,000 BDT"} className={"mt-6"} />
          <ExpenseItem name={"Rent"} date={"4/10/2024"} amount={"-25,000 BDT"} className={"mt-8"} />
          <ExpenseItem
            name={"Grocery"}
            date={"4/8/2024"}
            amount={"-8,000 BDT"}
            className={"mt-8"}
          />
          <ExpenseItem name={"Bill"} date={"4/5/2024"} amount={"-1,500 BDT"} className={"mt-8"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Legend = ({ color, legend }) => {
  return (
    <View className={"flex flex-row items-center gap-2"}>
      <View
        className={"rounded-full"}
        style={{
          height: 12,
          width: 12,
          borderWidth: 3,
          borderColor: color,
          marginTop: 2
        }}
      />
      <Text className={"text-foreground/60"}>{legend}</Text>
    </View>
  );
};

const ExpenseItem = ({ name, date, amount, className }) => {
  return (
    <View className={cn("flex flex-row items-center justify-between px-4", className)}>
      <View className={"flex flex-row items-center"}>
        <View className={"flex h-10 w-10 items-center justify-center rounded-full bg-[#ed7373]"}>
          <MoveUp className={"text-[#ff0000]"} size={24} />
        </View>
        <View className={"ml-4"}>
          <Text className={"tracking-wider text-foreground/90"}>{name}</Text>
          <Text className={"mt-1.5 text-xs tracking-wide text-foreground/60"}>{date}</Text>
        </View>
      </View>
      <Text className={"text-lg tracking-wider text-foreground/90"}>{amount}</Text>
    </View>
  );
};

export default Expenses;
