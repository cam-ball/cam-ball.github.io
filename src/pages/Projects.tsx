import CenterCard from "../components/CenterCard";
import Link from "../components/Link";

const Projects = () => {
  return (
    <div className="h-full">
      <CenterCard pageTitle="ls projects/">
        <ul className="list-[square] list-inside ml-2">
          <li>
            Generated a bunch of{" "}
            <Link
              label="D&D characters"
              href="https://camball.me/5e-character-generator"
            />{" "}
            and{" "}
            <Link
              label="NPCs to help them on their way"
              href="https://camball.me/npc-generator"
            />
            .
          </li>
          <li>
            Gave some nice grandmas some{" "}
            <Link
              label="fresh air"
              href="https://github.com/cam-ball/Fresh-Air"
            />
            .
          </li>
          <li>
            Made the plot of internet real estate you're{" "}
            <Link
              label="currently viewing"
              href="https://github.com/cam-ball/cam-ball.github.io"
            />
            .
          </li>
          <li>
            WordPress'd an info site for a{" "}
            <Link
              label="cozy mystery series"
              href="https://jhicksmystery.com"
            />
            .
          </li>
          <li>
            Protested against the{" "}
            <Link
              label="hubris of man"
              href="https://fuck-no-touchless-sinks.neocities.org/"
            />
            .
          </li>
          <li className="list-['\1F480']">
            Unleashed a viciously bright{" "}
            <Link
              label="Atom theme"
              href="https://github.com/cam-ball/soft-diner"
            />{" "}
            on the world (RIP to Atom).
          </li>
        </ul>
      </CenterCard>
    </div>
  );
};

export default Projects;
