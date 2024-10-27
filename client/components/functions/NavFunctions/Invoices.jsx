import Image from 'next/image'
const Invoices = () => {
  return (
    <div className="relative cursor-pointer">
    <Image src="/icons/receipt.png" width={35} height={35} alt="cart" />
    <div className="absolute top-0 right-0 bg-red-500 select-none text-white rounded-full w-[16px] h-[16px] flex items-center justify-center text-xs">
      3
    </div>
  </div>
  )
}

export default Invoices