import { serif } from "@/lib/fonts";

type Props = {
  image: string;
};

export default function HeroWordmark({ image }: Props) {
  return (
    <span
      className={`${serif.className} block w-fit select-none`}
      style={{
        fontSize: "min(50vw, 56svh)",
        lineHeight: 1,
        fontWeight: 800,
        fontVariationSettings: '"opsz" 144',
        letterSpacing: "-0.03em",
        marginTop: "-0.08em",
        marginBottom: "-0.1em",
        paddingRight: "0.05em",

        // Text transparent, photo letters ke andar clip hoti hai.
        // fixed attachment => section background wali photo ke saath exactly align.
        color: "transparent",
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "1px rgba(255,255,255,0.35)",
        backgroundColor: "#a8c0d8", // photo load na ho to bhi letters dikhein
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
    >
      SIR
    </span>
  );
}