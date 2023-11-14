import { useRef } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const PersonnelCard = ({ marine }) => {
    const ref = useRef()

    return (
      <>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={ref}
          style={{ width: "400px", height: "300px" }}
        >
          <FrontSide
            style={{ backgroundColor: "#41669d" }}
            onClick={() => {
              ref.current.toggle();
            }}
          >
            <img src={marine.picture} alt="Colonial marine" className='card-picture' />
            <br />
            <h5>{marine.name}</h5>
            <br />
            {/* <button
              onClick={() => {
                ref.current.toggle();
              }}
            >
              Toggle via button
            </button> */}
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>
            <h4>Information</h4>
            <ul className="personnel-details-list">
              <li>Name: {marine.name}</li>
              <li>Date of birth: {marine.dob}</li>
              <li>Birthplace: {marine.birthplace}</li>
              <li>Nationality: {marine.nationality}</li>
              <li>Rank: {marine.rank}</li>
              <li>Gender: {marine.gender}</li>
              <li>Height: {marine.height}</li>
              <li>Status: {marine.status}</li>
            </ul>
          </BackSide>
        </Flippy>
      </>
    );
}

export default PersonnelCard