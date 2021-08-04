import styled from "styled-components";
import Card from "./styledElements/Card";
import Pledge from "./Pledge";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import pledgeData from "../data";

const Container = styled.div`
  .about-title {
    ${headingStyles}
    font-size: var(--sm);
  }

  .about-desc {
    ${textStyles}
    font-size: var(--xxs);
    padding: 2rem 0;
    color: var(--darkGray);
  }

  .pledges {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const ProjectCard = () => {
  return (
    <Card data-aos="fade-up" data-aos-delay="200">
      <Container>
        <div className="about">
          <h2 className="about-title">About this project</h2>
          <p className="about-desc">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="about-desc">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="pledges">
          {pledgeData.map((pledge) => {
            return (
              <Pledge
                key={pledge.id}
                product={pledge.product}
                pledgeAmount={pledge.pledgeAmount}
                description={pledge.description}
                productAmount={pledge.productAmount}
                inStock={pledge.inStock}
              />
            );
          })}
        </div>
      </Container>
    </Card>
  );
};

export default ProjectCard;
