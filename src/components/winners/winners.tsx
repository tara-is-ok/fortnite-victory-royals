import Image from 'next/image'
import { FC } from 'react'

import gif1 from '../../../public/images/1.gif'
import gif2 from '../../../public/images/2.gif'
import gif3 from '../../../public/images/3.gif'
import gif4 from '../../../public/images/4.gif'
import gif5 from '../../../public/images/5.gif'
import gif8 from '../../../public/images/8.gif'
import gif9 from '../../../public/images/9.gif'
import gif10 from '../../../public/images/10.gif'
import gif11 from '../../../public/images/11.gif'

const gifs = [gif1, gif2, gif3, gif4, gif5, gif8, gif9, gif10, gif11]
type Props = {
  value: number
}

export const Winners: FC<Props> = ({ value }) => {
  const winsArr = [...Array(value)].map(
    () => gifs[getRandomNumber(gifs.length - 1)],
  )

  return (
    <div className="relative h-full">
      {winsArr.map((src, i) => {
        const { x, y } = getRandomPosition()
        return (
          <div
            className="col-span-1 sm:col-span-1 md:col-span-1"
            style={{ position: 'absolute', top: `${y}%`, left: `${x}%` }}
            key={i}
          >
            <Image
              src={src}
              alt="my gif"
              height={getRandomNumber(imageMaxH, imageMinH)}
              width={getRandomNumber(imageMaxW, imageMinW)}
            />
          </div>
        )
      })}
    </div>
  )
}

const imageMinW = 50
const imageMaxW = 80
const imageMinH = 100
const imageMaxH = 120
const offsetX = 90
const offsetY = 60

const getRandomPosition = () => {
  const randomX = getRandomNumber(offsetX)
  const randomY = getRandomNumber(offsetY)
  return { x: randomX, y: randomY }
}
const getRandomNumber = (max: number, min = 0) =>
  Math.floor(Math.random() * (max + min) + min)
