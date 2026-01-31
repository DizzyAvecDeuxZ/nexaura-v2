import { motion } from "framer-motion";

interface CurrencyToggleProps {
  currency: "eur" | "dzd";
  onChange: (currency: "eur" | "dzd") => void;
  variant?: "digital" | "consulting";
}

export function CurrencyToggle({ currency, onChange, variant = "digital" }: CurrencyToggleProps) {
  const activeColor = variant === "digital" 
    ? "bg-violet-500" 
    : "bg-indigo-500";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/10"
    >
      <button
        onClick={() => onChange("eur")}
        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
          currency === "eur"
            ? `${activeColor} text-white shadow-lg`
            : "text-gray-400 hover:text-white"
        }`}
      >
        EUR €
      </button>
      <button
        onClick={() => onChange("dzd")}
        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
          currency === "dzd"
            ? `${activeColor} text-white shadow-lg`
            : "text-gray-400 hover:text-white"
        }`}
      >
        DZD
      </button>
    </motion.div>
  );
}
