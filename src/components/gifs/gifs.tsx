import Image from 'next/image'
import { FC } from 'react'

import { gifs } from '@/utils/const'

type Props = {
  value: number
}

const imageMinW = 50
const imageMaxW = 80
const imageMinH = 100
const imageMaxH = 120
const offsetX = 90
const offsetY = 60

export const Gifs: FC<Props> = ({ value }) => {
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

const getRandomPosition = () => {
  const randomX = getRandomNumber(offsetX)
  const randomY = getRandomNumber(offsetY)
  return { x: randomX, y: randomY }
}
const getRandomNumber = (max: number, min = 0) =>
  Math.floor(Math.random() * (max + min) + min)
