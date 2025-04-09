import CenterCard from "../components/CenterCard";
import Link from "../components/Link";

const Hobbies = () => {
  return (
    <div className="h-full">
      <CenterCard pageTitle="ls hobbies/">
        <ul className="list-[square] list-inside ml-2">
          <li>Tabletop RPGs, as a player or GM</li>
          <li>Improv comedy</li>
          <li>Cross stitch</li>
          <li>Video games (but not the fun kind)</li>
          <li>
            <Link
              label="Furby"
              href="https://mashable.com/article/oddbody-furbies-long-instagram-tumblr-cursed"
            />{" "}
            watching
          </li>
        </ul>
      </CenterCard>
    </div>
  );
};

export default Hobbies;
