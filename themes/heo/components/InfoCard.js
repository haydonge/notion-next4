import BLOG from '@/blog.config'
import { ArrowRightCircle, GlobeAlt } from '@/components/HeroIcons'
import Link from 'next/link'
import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { siteInfo, notice } = props
  return (
        <Card className='bg-[#4f65f0] text-white flex flex-col w-72'>
            <div className='flex justify-between'>

                <div className='py-1 px-2 bg-indigo-500 text-sm rounded-lg hover:bg-indigo-50 hover:text-indigo-950 duration-200 transition-colors'>你好！我是</div>

                <div className='justify-center items-center flex dark:text-gray-100 transform duration-200 cursor-pointer'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={siteInfo?.icon} className='rounded-full' width={28} alt={BLOG.AUTHOR} />
                </div>
            </div>

            <h2 className='text-3xl font-extrabold mt-3'>
                {BLOG.AUTHOR}
            </h2>

            <div>
                <Announcement post={notice} style={{ color: 'white !important' }} />
            </div>

            <div className='flex justify-between'>
                <div className='flex space-x-3 '>
                    <div className='bg-indigo-400 p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200'><Link href='/about'><GlobeAlt className={'w-6 h-6'} /></Link></div>
                    <div className='bg-indigo-400 p-2 rounded-full w-10 items-center flex justify-center hover:bg-white hover:text-black transition-colors duration-200'><Link href='https://github.com/tangly1024/NotionNext'><i className='fab fa-github text-xl'></i></Link></div>
                </div>
                <Link href='/about'>
                    <div className='flex items-center hover:bg-white hover:text-black transition-colors duration-200 bg-indigo-400 py-2 px-3 rounded-full space-x-1'>
                        <ArrowRightCircle className={'w-6 h-6 stroke-indigo-400 fill-white'} />
                        <div className='font-bold'>了解更多</div>
                    </div>
                </Link>
            </div>
        </Card>
  )
}