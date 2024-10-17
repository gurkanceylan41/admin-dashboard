import Image, { StaticImageData } from "next/image";

type Props = {
  label: string;
  icons: StaticImageData;
  value: number | string;
};
const InfoCard = ({ label, icons, value }: Props) => {
  return (
    <div className="flex justify-between border rounded-lg p-5 xl:p-10 gap-1  bg-white">
      <div className="flex flex-col xl:gap-5">
        <h4 className="text-[#606060] whitespace-nowrap font-semibold">
          {label}
        </h4>

        <p className="font-bold text-[28px] md:text-2xl">
          {value.toLocaleString()}
        </p>
      </div>

      <Image src={icons} alt="icon" className="size-14" />
    </div>
  );
};

export default InfoCard;
