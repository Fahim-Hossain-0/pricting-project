import { useEffect, useState } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PriceOption = () => {
  const [pricingData, setPricingData] = useState([])

    useEffect(() => {
        fetch("/public/packet.json")
            .then(res => res.json())
            .then(data => setPricingData(data.pricingOptions))
    }, [])

  

  return (
    <div className="mt-15">
      <h1 className="text-6xl text-center">Get our Membership</h1>
      <div>
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
