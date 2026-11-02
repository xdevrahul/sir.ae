import { Fraunces, Hanken_Grotesk } from "next/font/google";

// Variable font: weight 300 se 900 tak sab milta hai.
// opsz axis se bade sizes pe letters apne aap sharp ho jaate hain.
export const serif = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});