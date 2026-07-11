import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="MyBeSix home">
      <Image
        src="/brand/mybesix-mark.svg"
        alt=""
        width={44}
        height={44}
        priority
        className="size-11 transition-transform group-hover:-translate-y-0.5"
      />
      <span className="text-xl font-black tracking-[-0.04em] text-[#0b1f33]">
        MyBe<span className="text-[#2f8fc5]">Six</span>
      </span>
    </Link>
  );
}
