"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CardBox from "./CardBox";

type Props = {
  style: string;
};

export default function StylePickBox({ style }: Props) {
  const router = useRouter();

  const handleStylePick = (e: React.MouseEvent, style: string) => {
    e.preventDefault();

    document.documentElement.classList.forEach((token) => {
      if (token.indexOf("style") === 0) {
        document.documentElement.classList.replace(token, `style-${style}`);
      }
    });

    router.push("/dashboard");
  };

  return (
    <CardBox
      className="cursor-pointer bg-gray-50"
      isHoverable
      onClick={(e) => handleStylePick(e, style)}
    >
      <div className="mb-3 md:mb-6">
        <Image
          src={`https://static.justboil.me/templates/one/small/${style}-v3.png`}
          width={1280}
          height={720}
          alt={style}
        />
      </div>
      <h1 className="text-xl md:text-2xl font-black capitalize">{style}</h1>
      <h2 className="text-lg md:text-xl">& Dark mode</h2>
    </CardBox>
  );
}
