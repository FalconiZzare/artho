import { Wallet } from "@/lib/icons/Wallet";
import { ChartColumn } from "@/lib/icons/ChartColumn";
import { Calculator } from "@/lib/icons/Calculator";
import { Target } from "@/lib/icons/Target";
import { FileText } from "@/lib/icons/FileText";
import { Heart } from "@/lib/icons/Heart";
import { Coins } from "@/lib/icons/Coins";
import { ArrowBigRightDash } from "@/lib/icons/ArrowBigRightDash";

const SIZE = 24;

export const HOME_FEATURES = [
  [
    {
      title: "Expenses",
      href: "/expenses",
      color: "#4892be",
      icon: <Wallet className={"text-background"} size={SIZE} />
    },
    {
      title: "Budget Planner",
      href: "/under-construction",
      color: "#7e67fd",
      icon: <ChartColumn className={"text-background"} size={SIZE} />
    },
    {
      title: "AI Consultancy",
      href: "/under-construction",
      color: "#004aad",
      icon: <Calculator className={"text-background"} size={SIZE} />
    },
    {
      title: "Saving Goals",
      href: "/under-construction",
      color: "#393184",
      icon: <Target className={"text-background"} size={SIZE} />
    }
  ],
  [
    {
      title: "Tax Report",
      href: "/under-construction",
      color: "#4892be",
      icon: <FileText className={"text-background"} size={SIZE} />
    },
    {
      title: "Insurance",
      href: "/under-construction",
      color: "#7e67fd",
      icon: <Heart className={"text-background"} size={SIZE} />
    },
    {
      title: "Mirco Savings",
      href: "/under-construction",
      color: "#004aad",
      icon: <Coins className={"text-background"} size={SIZE} />
    },
    {
      title: "View All",
      href: "/under-construction",
      color: "#393184",
      icon: <ArrowBigRightDash className={"text-background"} size={SIZE} />
    }
  ]
];
