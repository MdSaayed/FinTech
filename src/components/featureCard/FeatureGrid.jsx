import React from 'react';
import { Title, Description, Subtitle, FeatureCard } from '../../components';

const FeatureGrid = () => (
    <section>
      <div className="container">
        {/* Subtitle: Displays A Subtitle For The Feature Section */}
        <Subtitle text="Our Best Features" align="justify-center" className="bg-white" />
  
        {/* Title: Displays The Main Title For The Feature Section */}
        <Title className="max-w-[664px] text-center">
          Unlock the <span>full potential of</span> your organization's data!
        </Title>
  
        {/* Description: Provides A Short Description Of The Features */}
        <Description text="The tools and tricks that today’s teams need to help their companies thrive." align="justify-center" className="max-w-lg" />
  
        {/* Features Grid: Displays The Grid Of Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-16 mt-20">
          {/* Feature Card 1: Real-Time Expense Tracking */}
          <FeatureCard
            imgSrc="/assets/imgs/features/feature-1.png"
            title="Real-Time Expense Tracking"
            description="Monitor your spending in real-time with categorized insights for better money management."
          />
          
          {/* Feature Card 2: Smart Insights */}
          <FeatureCard
            imgSrc="/assets/imgs/features/feature-2.png"
            title="Smart Insights"
            description="Rely on robust security features to protect your financial data and transactions."
          />
          
          {/* Feature Card 3: User-Friendly Dashboard */}
          <FeatureCard
            imgSrc="/assets/imgs/features/feature-3.png"
            title="User-Friendly Dashboard"
            description="Enjoy a clean, intuitive interface that simplifies complex financial data for easy understanding."
          />
        </div>
      </div>
    </section>
);

export default FeatureGrid;
