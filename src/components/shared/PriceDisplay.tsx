import { formatPrice } from "@/lib/data/pricing";

interface PriceDisplayProps {
  priceEUR: number;
  priceDZD: number;
  currency: "eur" | "dzd";
  period?: string;
  className?: string;
}

export function PriceDisplay({ 
  priceEUR, 
  priceDZD, 
  currency, 
  period,
  className = ""
}: PriceDisplayProps) {
  const price = currency === "eur" ? priceEUR : priceDZD;
  const isCustom = price === 0;

  if (isCustom) {
    return (
      <span className={`text-3xl font-bold ${className}`}>
        Sur devis
      </span>
    );
  }

  return (
    <div className={`flex items-baseline gap-1 ${className}`}>
      <span className="text-3xl font-bold">
        {formatPrice(price, currency)}
      </span>
      {period && (
        <span className="text-gray-400 text-sm">/{period}</span>
      )}
      <span className="text-gray-500 text-xs ml-1">HT</span>
    </div>
  );
}
