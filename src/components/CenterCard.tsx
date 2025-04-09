import type { ReactNode } from "react";
import Nav from "./Nav";

const CardHeader = () => (
  <div className="border-0 border-b-2 border-purple border-solid p-3 mb-3">
    <h1 className="text-5xl text-red font-mono font-semibold mb-3">
      Cameron Ball
    </h1>
    <h2 className="text-2xl italic text-right">
      Senior <span className="text-red">Ruby</span> Engineer
    </h2>
  </div>
);

const CenterCard = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: ReactNode;
}) => {
  const formattedTitle = `$ ${pageTitle}`;

  return (
    <>
      <title>{formattedTitle}</title>
      <div className="h-full flex flex-col items-center justify-center text-white">
        <div className="max-w-[1200px] mx-12">
          <div className="min-h-[450px] lg:min-h-[50vh] lg:w-[40vw] border-inset border-8 border-purple p-10">
            <CardHeader />
            <section className="text-lg">
              <h3 className="font-semibold text-2xl font-mono my-6">
                {formattedTitle}
              </h3>
              {children}
            </section>
          </div>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default CenterCard;
