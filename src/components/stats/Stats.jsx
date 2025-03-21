import PropTypes from 'prop-types';
import CountUp from 'react-countup';

export default function Stats() {
  const statsData = [
    { value: 10000, suffix: 'K+', label: 'Users Worldwide' },
    { value: 99, suffix: '%', label: 'Customer Satisfied' },
    { value: 50, suffix: '+', label: 'Seamless Integration' },
    { value: 1, prefix: '$', suffix: 'B+', label: 'Assets Managed' }
  ];

  return (
    <section>
      <div className="container section-padding">
        {/* Grid Wrapper - Outer Border Applied Here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-gray-300">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center py-8 px-6 border border-gray-300"
            >
              {/* Animated Number Count */}
              <h2 className="text-4xl font-geist font-semibold text-slate-900">
                <CountUp start={0} end={stat.value} duration={2.5} separator="," suffix={stat.suffix} prefix={stat.prefix} />
              </h2>
              
              {/* Label Text */}
              <p className="text-gray-700 font-geist text-base mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      suffix: PropTypes.string,
      prefix: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
};
