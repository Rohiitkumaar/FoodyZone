import React from 'react'
import styled from 'styled-components'
import { BASE_URL, Button } from '../../App'

const SearchResult = ({data}) => {
  return (
    <div>
      <FoodCardContainer>
        <FoodCards>
          {data?.map(({name,image,text,price}) => (
            <FoodCard key={name}>
              <div className="food_image">
              <img src={image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h1>{name}</h1>
                  <p>{text}</p>
                </div>
              <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))

          }
        </FoodCards>
      </FoodCardContainer>
    </div>
  )
}

export default SearchResult


const FoodCardContainer = styled.section`
min-height: calc(100vh - 200px);
background-image: url("/bg.png");
background-size: cover;
`;
const FoodCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  row-gap: 32px;
  column-gap: 20px;
  padding-top: 50px; 
`;


const FoodCard = styled.section`
  border: 0.66px solid;
  width: 340px;
  height: 167px;


  border-image-source: radial-gradient(
    80.69% 208.78% 112.58%,
    #eabfff 0%,
    rgba(135, 38, 183, 0) 100%
  )

  radial-gradient(
    80.38% 222.5% at -13.75% -12.36%,
    #98f9ff 0%,
    rgba(255, 255, 255, 0) 100%
  );

  background: url(.png),
  radial-gradient(
    98.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(118, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );

  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;


  display: flex;
  padding: 10px;

  .food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3{
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p{
      margin-top: 4px;
      font-size: 12px;
    }
    Button{
      font-size: 12px;
    }
  }
`;