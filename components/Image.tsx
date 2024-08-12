import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div>
      {" "}
      <Image
        src="https://th.bing.com/th/id/R.fea0c7d0de54586b9085e260f7eeb771?rik=xbR5Y7sNjDljBg&pid=ImgRaw&r=0"
        alt=""
        width={500}
        height={500}
        layout="fixed"
      />
    </div>
  );
}
