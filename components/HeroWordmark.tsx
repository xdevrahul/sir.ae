import { serif } from "@/lib/fonts";

export default function HeroWordmark({ image }: { image: string }) {
  return (
    <span
      className={`${serif.className} block w-fit select-none`}
      style={{
        fontSize: "clamp(4rem, 22vw, 18rem)", // 👈 bounded
        lineHeight: 0.9,
        fontWeight: 800,
        letterSpacing: "-0.04em",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "1px rgba(255,255,255,0.35)",
        backgroundColor: "#263d50",
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // ❌ NO backgroundAttachment: "fixed"
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
    >
      SIR
    </span>
  );
}