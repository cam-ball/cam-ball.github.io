import CenterCard from "../components/CenterCard";
import Link from "../components/Link";

const Contact = () => {
  return (
    <div className="h-full">
      <CenterCard pageTitle="find . -name *cam*">
        <ul className="list-[square] list-inside ml-2">
          <li>
            Shoot me an <Link label="email" href="mailto:hi@camball.me" />
          </li>
          <li>
            Connect with me on{" "}
            <Link
              label="LinkedIn"
              href="https://www.linkedin.com/in/jcameronball/"
            />
          </li>
          <li>
            Follow me on{" "}
            <Link label="GitHub" href="https://github.com/cam-ball" />
          </li>
          <li>
            Send a carrier pigeon (I promise I'll take very good care of it)
          </li>
        </ul>
      </CenterCard>
    </div>
  );
};

export default Contact;
