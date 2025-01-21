export default function FormetPrice({price}) {
  return (
    Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
        maxmumFractionDigits:2,
    }).format(price/100)
  )
}
