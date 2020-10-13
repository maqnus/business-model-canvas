import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bmc">
        <div className="block key-partners">
          <h2 className="title">Key Partners</h2>
          <ul className="ingress">
            <li>
              <p>Who are our Key Partners?</p>
            </li>
            <li>
              <p>Who are our key suppliers?</p>
            </li>
            <li>
              <p>Which Key Resources are we acquairing from partners?</p>
            </li>
            <li>
              <p>Which Key Activities do partners perform?</p>
            </li>
          </ul>
          <h3 className="subtitle">Motivations for partnerships</h3>
          <ul>
            <li>
              <p>Optimization and economy</p>
            </li>
            <li>
              <p>Reduction of risk and uncertainty</p>
            </li>
            <li>
              <p>Acquisition of particular resources and activities</p>
            </li>
          </ul>
        </div>

        <div className="block key-activities">
          <h2 className="title">Key Activities</h2>
          <ul className="ingress">
            <li>
              <p>What Key Activities do our Value Propositions require?</p>
            </li>
            <li>
              <p>Our Distribution Channels?</p>
            </li>
            <li>
              <p>Customer Relationships?</p>
            </li>
            <li>
              <p>Revenue streams?</p>
            </li>
          </ul>
          <h3 className="subtitle">Categories</h3>
          <ul>
            <li>
              <p>Production</p>
            </li>
            <li>
              <p>Problem Solving</p>
            </li>
            <li>
              <p>Platform/Network</p>
            </li>
          </ul>
        </div>

        <div className="block key-resources">
          <h2 className="title">Key Resources</h2>
          <ul className="ingress">
            <li>
              <p>What Key Resources do our Value Propositions require?</p>
            </li>
            <li>
              <p>Our Distribution Channels? Cusomer Relationships?</p>
            </li>
            <li>
              <p>Revenue Streams?</p>
            </li>
          </ul>
          <h3 className="subtitle">Type of resources</h3>
          <ul>
            <li>
              <p>Physical</p>
            </li>
            <li>
              <p>Intellectual (brand parants, copyrights, data)</p>
            </li>
            <li>
              <p>Human</p>
            </li>
            <li>
              <p>Financial</p>
            </li>
          </ul>
        </div>

        <div className="block value-propositions">
          <h2 className="title">Value Propositions</h2>
          <ul className="ingress">
            <li>
              <p>What value do we deliver to the customer?</p>
            </li>
            <li>
              <p>Which one of our customer's problems are we helping to solve?</p>
            </li>
            <li>
              <p>What bundles of products and services are we offering to each Customer Segment?</p>
            </li>
            <li>
              <p>Which customer needs are we satisfying?</p>
            </li>
          </ul>
          <h3 className="subtitle">Caracteristics</h3>
          <ul>
            <li>
              <p>Newness</p>
            </li>
            <li>
              <p>Performance</p>
            </li>
            <li>
              <p>Customization</p>
            </li>
            <li>
              <p>"Getting the Job Done"</p>
            </li>
            <li>
              <p>Design</p>
            </li>
            <li>
              <p>Brand/Status</p>
            </li>
            <li>
              <p>Price</p>
            </li>
            <li>
              <p>Cost Reduction</p>
            </li>
            <li>
              <p>Risk Reduction</p>
            </li>
            <li>
              <p>Accessibility</p>
            </li>
            <li>
              <p>Convenience/Usability</p>
            </li>
          </ul>
        </div>

        <div className="block customer-relationships">
          <h2 className="title">Customer Relationships</h2>
          <ul className="ingress">
            <li>
              <p>What type of relationship does each of our Customer Segments expect us to establish and maintain with them?</p>
            </li>
            <li>
              <p>Which ones have we established?</p>
            </li>
            <li>
              <p>How are they integrated with the rest of our business model?</p>
            </li>
            <li>
              <p>How costly are they?</p>
            </li>
          </ul>
          <h3 className="subtitle">Examples</h3>
          <ul>
            <li>
              <p>Personal assistance</p>
            </li>
            <li>
              <p>Dedicated Personal Assistance</p>
            </li>
            <li>
              <p>Self-Service</p>
            </li>
            <li>
              <p>Automated Services</p>
            </li>
            <li>
              <p>Communities</p>
            </li>
            <li>
              <p>Co-creation</p>
            </li>
          </ul>
        </div>

        <div className="block channels">
          <h2 className="title">Channels</h2>
          <ul className="ingress">
            <li>
              <p>Through which Channels do our Customer Segments want to be reached?</p>
            </li>
            <li>
              <p>How are we reaching them now?</p>
            </li>
            <li>
              <p>How are our Channels integrated?</p>
            </li>
            <li>
              <p>Which ones work best?</p>
            </li>
            <li>
              <p>Which ones are most cost-efficient?</p>
            </li>
            <li>
              <p>How are we integrating them with customer routines?</p>
            </li>
          </ul>
          <h3 className="subtitle">Channel phases</h3>
          <ol className="numbered">
            <li>
              <strong>Awarness</strong>
              <p>How do we raise awareness about our company`s products and services?</p>
            </li>
            <li>
              <strong>Evaluation</strong>
              <p>How do we help customers evaluate our organization`s Value Proposition?</p>
            </li>
            <li>
              <strong>Purchase</strong>
              <p>How do we allow customers to purchase spesific products and services?</p>
            </li>
            <li>
              <strong>Delivery</strong>
              <p>How do we deliver a Value Proposition to customers?</p>
            </li>
            <li>
              <strong>After sales</strong>
              <p>How do we provide post-purchase customer support?</p>
            </li>
          </ol>
        </div>

        <div className="block customer-segments">
          <h2 className="title">Customer Segments</h2>
          <ul className="ingress">
            <li>
              <p>For whom are we creating value?</p>
            </li>
            <li>
              <p>Who are our most important customers?</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Mass Market</p>
            </li>
            <li>
              <p>Niche Market</p>
            </li>
            <li>
              <p>Segmented</p>
            </li>
            <li>
              <p>Diversifies</p>
            </li>
            <li>
              <p>Multi-sided Platform</p>
            </li>
          </ul>
        </div>

        <div className="block cost-structure">
          <h2 className="title">Cost Structure</h2>
          <ul className="ingress">
            <li>
              <p>What are the most important cost inherent in our business model?</p>
            </li>
            <li>
              <p>Which Key Resources are most expensive?</p>
            </li>
            <li>
              <p>Which Key Activities are most expensive?</p>
            </li>
          </ul>
          <h3 className="subtitle">Is your business more</h3>
          <ul>
            <li>
              <p>Cost Driven (leanest cost structure, low price value proposition, maximum automation, extensive outsourcing)</p>
            </li>
            <li>
              <p>Value Driven (focused on value creation, premium value proposition)</p>
            </li>
          </ul>
          <h3 className="subtitle">Simple characteristics</h3>
          <ul>
            <li>
              <p>Fixed Costs (salaries, rents, utilities)</p>
            </li>
            <li>
              <p>Variable costs</p>
            </li>
            <li>
              <p>Economies of scale</p>
            </li>
            <li>
              <p>Economies of scope</p>
            </li>
          </ul>
        </div>

        <div className="block revenue-streams">
          <h2 className="title">Revenue Streams</h2>
          <ul className="ingress">
            <li>
              <p>For what value are our customers really willing to pay?</p>
            </li>
            <li>
              <p>For what do they currently pay?</p>
            </li>
            <li>
              <p>How are they currently paying?</p>
            </li>
            <li>
              <p>How would they prefer to pay?</p>
            </li>
            <li>
              <p>How much does each Revenue Stream contribute to overall revenues?</p>
            </li>
          </ul>
          <h3 className="subtitle">Types</h3>
          <ul>
            <li>
              <p>Asset sale</p>
            </li>
            <li>
              <p>Usage fee</p>
            </li>
            <li>
              <p>Subscription Fees</p>
            </li>
            <li>
              <p>Lending/Renting/Leasing</p>
            </li>
            <li>
              <p>Licensing</p>
            </li>
            <li>
              <p>Brokerage fees</p>
            </li>
            <li>
              <p>Advertising</p>
            </li>
          </ul>
          <h3 className="subtitle">Fixed pricing</h3>
          <ul>
            <li>
              <p>List Price</p>
            </li>
            <li>
              <p>Product feature dependent</p>
            </li>
            <li>
              <p>Customer segment dependent</p>
            </li>
            <li>
              <p>Volume dependent</p>
            </li>
          </ul>
          <h3 className="subtitle">Dynamic pricing</h3>
          <ul>
            <li>
              <p>Negotiation (bargaining)</p>
            </li>
            <li>
              <p>Yield Management</p>
            </li>
            <li>
              <p>Real-time-Market</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
