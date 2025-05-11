import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Text, View } from "react-native";
import DatePicker from "react-native-date-picker";

const DateField = () => {
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState(null);

  const convertDate = (date) => {
    return new Date(date)
      .toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
      .replace(/(\d+)(?=(,|$))/, (match) => {
        const num = parseInt(match);
        let suffix = "th";
        if (num % 10 === 1 && num % 100 !== 11) suffix = "st";
        else if (num % 10 === 2 && num % 100 !== 12) suffix = "nd";
        else if (num % 10 === 3 && num % 100 !== 13) suffix = "rd";
        return `${num}${suffix}`;
      });
  };

  return (
    <View className={"mb-6"}>
      <Button
        variant={"outline"}
        className={cn("items-start rounded-xl border-foreground/20 text-left")}
        onPress={() => setDateOpen(true)}
      >
        <Text
          className={cn("text-lg leading-none text-foreground", !date && "text-muted-foreground")}
        >
          {date ? convertDate(date) : "Pick a date"}
        </Text>
      </Button>

      <DatePicker
        modal
        mode="date"
        open={dateOpen}
        date={new Date()}
        onConfirm={(date) => {
          setDateOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setDateOpen(false);
        }}
      />
    </View>
  );
};

export default DateField;
