import logoAsset from "@/assets/cre8hive-logo.png.asset.json";

type Props = { className?: string; showWordmark?: boolean };

export function Logo({ className = "", showWordmark = true }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="Cre8Hive"
        className={showWordmark ? "h-10 w-auto object-contain" : "h-8 w-8 object-contain"}
        style={showWordmark ? { objectPosition: "center" } : undefined}
      />
    </div>
  );
}
