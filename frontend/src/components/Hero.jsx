import { Link } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";

// import ContentWrapper from "./components/ContentWrapper";
const Hero = () => {
  return (
    <div className="bg-[#0e1629]">
      <ContentWrapper>
        <div className="h-[520px] w-full flex justify-center py-8">
          <div className="w-[70%] pt-[4%] flex items-center md:text-center flex-col">
            <h4 className="text-[#c379ff] border border-[#c379ff] border-spacing-[1rem] text-sm md:text-xl border-dotted px-4 py-1 w-fit my-4">
              Luxehaven: Nơi mua sắm sành điệu nhất.{" "}
              <Link
                to={"/shop"}
                className="text-white hidden md:inline-block md:text-xl pl-2"
              >
                Mua ngay
              </Link>
            </h4>
            <h2 className="text-[#c892f3] text-base md:text-5xl font-semibold leading-10 border-dotted px-0 md:px-4 py-1 w-fit md:mt-6">
              Đơn giản mà sang trọng.
            </h2>
            <p className="text-[#97A1AF] md:mt-4 text-lg">
              Khám phá Luxehaven, nơi mua sắm trở nên thật dễ dàng. Duyệt qua bộ sưu tập được tuyển chọn kỹ lưỡng của chúng tôi một cách dễ dàng, tận hưởng giao dịch nhanh chóng và an toàn, và tận hưởng mức tăng 20% về sự hài lòng. Luxehaven: Nâng tầm trải nghiệm mua sắm trực tuyến của bạn một cách phong cách và dễ dàng!
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default Hero;
