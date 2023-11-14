import { Link } from 'react-router-dom'
import PersonnelCard from '../components/personnel-card';

const CardPage = () => {
    const colonialMarines = [
      {
        name: "Ellen Ripley",
        dob: "January 7, 2092",
        birthplace: "Olympia, Luna, United Americas",
        nationality: "American",
        rank: "Warrant Officer",
        gender: "Female",
        height: "5ft 11in",
        status: "deceased",
        picture:
          "https://deadline.com/wp-content/uploads/2023/04/sigourney-weaver-alien.jpg?w=681&h=383&crop=1",
      },
      {
        name: "Dwayne Hicks",
        dob: "2151",
        birthplace: "",
        nationality: "American",
        rank: "Senior Corporal",
        gender: "Male",
        height: "5ft 11-3/4in",
        status: "deceased",
        picture:
          "https://upload.wikimedia.org/wikipedia/en/e/e5/Corporal_Hicks.jpeg",
      },
      {
        name: "William Hudson",
        dob: "May 17, 2149",
        birthplace: "",
        nationality: "American",
        rank: "Private First Class",
        gender: "Male",
        height: "5ft 11-1/2in",
        status: "deceased",
        picture:
          "https://upload.wikimedia.org/wikipedia/en/e/ef/Hudson_Aliens.jpeg",
      },
      {
        name: 'Alexander "Al" Apone',
        dob: "2137",
        birthplace: "Detroit, Michigan",
        nationality: "American",
        rank: "Master Sargent",
        gender: "Male",
        height: "6ft 0in",
        status: "deceased",
        picture:
          "https://imgs.search.brave.com/efkwmYiV2907Jqy2ir7VmklF8MRYKhjBU7Xu82s3Lp8/rs:fit:560:320:1/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1tSmlObUk1/T1RVdFlUWmhaQzAw/WXpZMkxXSTNaalF0/WkRZMU1UTm1Oekl4/T1dKbEwybHRZV2Rs/TDJsdFlXZGxYa0V5/WGtGcWNHZGVRWFZ5/TWprM05UVXlPVGNA/Ll9WMV8uanBn",
      },
    ];

    return (
      <>
        <div className="top-banner">
          <h1 className="hero-message">
            This is my React Flow sandbox! Great job!
          </h1>
        </div>
        <div className="banner-buffer" />
        <Link to="/">Back</Link>
        <br />
        <div className='personnel-cards-container'>
            {colonialMarines.map((marine, indx) => {
                return (
                    <div key={indx}>
                        <PersonnelCard marine={marine}/>
                    </div>
                )
            })}
        </div>
      </>
    );
}

export default CardPage