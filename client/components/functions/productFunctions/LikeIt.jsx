import {cheeseDairy} from '../data'
import Product from './Product'
const LikeIt = () => {
  return (
    <section className=" mt-36 mb-10 w-full">
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="sm:text-4xl text-2xl font-semibold text-slate-800">
        قد يعجبك ايضا
      </p>
      <p className="text-slate-700 mb-2 text-center sm:text-[16px] text-sm">
      اكتشف المزيد من المحتوى المختار خصيصاً لك
      </p>
      <hr className="w-full border-t-2 border-gray-300 mb-8" />
    </div>
    <Product data={cheeseDairy} />
  </section>
  )
}

export default LikeIt