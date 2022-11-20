import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaBlockSkeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={477}
    viewBox="0 0 280 477"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="134" r="134" /> 
    <rect x="0" y="285" rx="8" ry="8" width="280" height="28" /> 
    <rect x="0" y="333" rx="8" ry="8" width="274" height="70" /> 
    <rect x="0" y="425" rx="8" ry="8" width="88" height="33" /> 
    <rect x="139" y="421" rx="8" ry="8" width="132" height="39" />
  </ContentLoader>
)

