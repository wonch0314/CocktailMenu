import { Box } from "@mui/material"
import React, { useState } from "react"
import ReactCardFip from "react-card-flip"
import CardBack from "./CocktailCard/CardBack"
import CardFront from "./CocktailCard/CardFront"
import ginData from "@/data/ginData"

// const sample = "https://cocktailhigh.com/web/upload/maypop/reci_03.png"
// const cocktail = {
//   imageUrl: sample,
//   name: "네그로니",
//   content:
//     "캄파리 특유의 쌉쌀한 맛이 스위트 베르무트의 달짝지근한 맛과 어울리면서 진의 향과 맛과 조화를 이루는 맛이 난다.",
//   receipe: ["술", "레몬", "얼음", "유리잔"],
// }

const cocktail = ginData[0]

export default function CocktailCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  const onFlip = () => {
    setIsFlipped((prev) => !prev)
  }
  return (
    <ReactCardFip isFlipped={isFlipped} flipDirection="horizontal">
      {/* FRONT */}
      <CardFront onFlip={onFlip} cocktail={cocktail} />

      {/* BACK */}
      <CardBack onFlip={onFlip} cocktail={cocktail} />
    </ReactCardFip>
  )
}
