import Image from "next/image";
import Link from "next/link";

interface NavProps {}

export default function Nav({}: NavProps) {
  return (
    <nav className="container flex items-center justify-between pb-[30px] pt-[57px] font-spaceGrotesk max-sm:py-[16px]">
      <Link
        href="https://www.thirdinternet.xyz/base-test"
        className="flex items-center text-[16px] font-medium lowercase leading-[120%] tracking-[-0.04em] text-black"
      >
        Visit e-library
        <Image src="arrow.svg" alt="arrow" width={17} height={17} />
      </Link>
      <Image
        src="logo.svg"
        alt="logo"
        width={49}
        height={49}
        className="max-sm:-order-1"
      />
      <a
        href="mailto:build@thirdinternet.xyz"
        className="text-[16px] font-medium lowercase leading-[120%] tracking-[-0.04em] text-black underline max-sm:hidden"
      >
        build@thirdinternet.xyz
      </a>
    </nav>
  );
}
