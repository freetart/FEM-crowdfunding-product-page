import styled from "styled-components";
import Card from "./styledElements/Card";
import { headingStyles, textStyles } from "../abstracts/Mixins";

const Container = styled.div`
  .stats {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3rem;
  }

  .stat-number {
    ${headingStyles}
    font-size: var(--lg);
  }

  .stat-desc {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGray);
  }

  .range-container {
    width: 100%;
    background-color: var(--lightGray);
    border-radius: var(--mainRadius);
    height: 1.5rem;
  }

  .range {
    width: 89%;
    background-color: var(--moderateCyan);
    height: 1.5rem;
    border-radius: var(--mainRadius);
  }
`;

const StatsCard = () => {
  return (
    <Card>
      <Container>
        <div className="stats">
          <div className="stat">
            <h3 className="stat-number">$89,914</h3>
            <p className="stat-desc">of $100,000 backed</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">5,007</h3>
            <p className="stat-desc">total backers</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">56</h3>
            <p className="stat-desc">days left</p>
          </div>
        </div>
        <div className="range-container">
          <div className="range"></div>
        </div>
      </Container>
    </Card>
  );
};

export default StatsCard;
