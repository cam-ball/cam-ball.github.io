import CenterCard from "../components/CenterCard";

const About = () => {
  const startYear = 2015;
  const yearsExperience = new Date().getFullYear() - startYear;

  return (
    <div className="h-full">
      <CenterCard pageTitle="whoami">
        <ul className="list-[square] list-inside text-lg ml-2">
          <li>Boston, MA</li>
          <li>{yearsExperience} years of professional experience</li>
          <li>
            Brought to you by the letter "R":{" "}
            <ul className="list-[square] list-inside ml-12">
              <li>Ruby</li>
              <li>Rails</li>
              <li>React</li>
            </ul>
          </li>
          <li>Afraid of heights</li>
        </ul>
      </CenterCard>
    </div>
  );
};

export default About;
