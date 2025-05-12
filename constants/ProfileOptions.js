import { IdCard } from "@/lib/icons/IdCard";
import { QrCode } from "@/lib/icons/QrCode";
import { CircleUserRound } from "@/lib/icons/CircleUserRound";
import { CreditCard } from "@/lib/icons/CreditCard";
import { FileUser } from "@/lib/icons/FileUser";
import { Fingerprint } from "@/lib/icons/Fingerprint";
import { LogOut } from "@/lib/icons/LogOut";

const SIZE = 36;
const className = "text-primary";

export const PROFILE_OPTIONS = [
  {
    title: "Change Name",
    icon: <IdCard className={className} size={SIZE} />
  },
  {
    title: "My QR",
    icon: <QrCode className={className} size={SIZE} />
  },
  {
    title: "Update Number",
    icon: <CircleUserRound className={className} size={SIZE} />
  },
  {
    title: "Saved Cards",
    icon: <CreditCard className={className} size={SIZE} />
  },
  {
    title: "Information Update",
    icon: <FileUser className={className} size={SIZE} />
  },
  {
    title: "Touch/Face ID",
    icon: <Fingerprint className={className} size={SIZE} />
  },
  {
    title: "Logout",
    icon: <LogOut className={className} size={SIZE} />,
    isLogout: true
  }
];
