import type { ReactNode } from "react";

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
      <div className="h-full flex items-center justify-center text-white">
        <div className="border-inset border-8 border-purple max-w-[1200px] min-w-[650px] mx-12 p-10">
          <div className="border-0 border-b-2 border-purple border-solid p-3 mb-3">
            <h1 className="text-5xl text-red font-mono font-semibold mb-3">
              Cameron Ball
            </h1>
            <h2 className="text-2xl italic text-right">
              Senior <span className="text-red">Ruby</span> Engineer
            </h2>
          </div>
          <section className="text-lg">
            <h3 className="font-semibold text-2xl font-mono my-6">
              {formattedTitle}
            </h3>
            {children}
          </section>
        </div>
      </div>
    </>
  );
};

export default CenterCard;
