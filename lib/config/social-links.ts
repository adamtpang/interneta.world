import { SiX, SiDiscord, SiTelegram, SiGithub } from "react-icons/si";
import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "x",
    url: "https://x.com/adamtpang",
    icon: SiX,
    label: "X",
  },
  {
    name: "github",
    url: "https://github.com/adamtpang/interneta.world",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    name: "discord",
    url: "https://discord.gg/pA27FrbXjU",
    icon: SiDiscord,
    label: "Discord",
  },
  {
    name: "telegram",
    url: "https://t.me/+P3r-8XdRfXoyYWVl",
    icon: SiTelegram,
    label: "Telegram",
  },
];
