import React, { useState, useEffect } from 'react';

const Stats = () => {
  const statsData = [
    { value: 1200, suffix: 'M', description: 'LOVEST ATTITUDE' },
    { value: 2418, suffix: 'M', description: 'HIGHEST ATTITUDE' },
    { value: 50, suffix: 'KM', description: 'SLOPES' }
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.value / 100);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += increment;
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-transparent py-16 relative z-30"> {/* Changed from z-50 to z-30 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 id='count' className="text-3xl md:text-5xl font-normal text-white mb-2 drop-shadow-lg">
                {counts[index]}{stat.suffix}
              </h2>
              <span className="text-sm md:text-sm text-white uppercase drop-shadow-lg font-medium">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;