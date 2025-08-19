import ContentWrapper from "./ContentWrapper";

const HeroBottom = () => {
  return (
    <div className="lg:min-h-[100vh] w-full bg-[#FF4800] text-[#000000] p-4">
      <ContentWrapper>
        <div className="">
          <h4 className="font-canope text-left uppercase mt-0 mb-0 font-canopee text-[3rem] lg:text-[10rem] leading-[60px] lg:leading-[170px] font-bold">
            SANG TRỌNG
          </h4>
          <h4 className="font-canope text-left uppercase mt-0 mb-0 font-canopee text-[3rem] lg:text-[10rem] leading-[60px] lg:leading-[170px] font-bold">
            ĐƠN GIẢN &
          </h4>
          <h4 className="font-canope text-left uppercase mt-0 mb-0 font-canopee text-[3rem] lg:text-[10rem] leading-[60px] lg:leading-[170px] font-bold">
            THỰC TẾ
          </h4>
          {/* <h4 className="font-canope text-left uppercase mt-0 mb-0 font-canopee text-[3rem] lg:text-[10rem] leading-[60px] lg:leading-[170px] font-bold">
            REALITIE
          </h4> */}
        </div>
      </ContentWrapper>
    </div>
  );
};
export default HeroBottom;
  