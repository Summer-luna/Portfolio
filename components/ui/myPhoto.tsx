import Photo from "../../public/images/XinyueChen.png";
import Image from 'next/image'

export const MyPhoto = ():JSX.Element => {
  return <Image src={Photo} alt="picture of me" placeholder="blur" className="max-w-full z-10" />
}