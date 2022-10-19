import { Grid, Box } from "@mui/material"
import PaperBack from "@/components/Common/PaperBack"
import { recFrame, recImage } from "@/Styles/Rectangular"

interface cocktailType {
  name: string
  content: string
  receipe: string[]
  imageUrl: string
}

interface propsType {
  onFlip: () => void
  cocktail: cocktailType
  x?: string
}

const rightStyle = {
  pl: "3vw",
}

const nameStyle = {
  fontSize: "6vw",
  textAlign: "center",
  fontWeight: "bold",
  py: "2vw",
}

const descStyle = {
  color: "white",
  fontSize: "2.5vw",
  lineHeight: "5vw",
  wordBreak: "keep-all",
}

export default function CardFront({ onFlip, cocktail, x }: propsType) {
  return (
    <div onClick={() => onFlip()}>
      <PaperBack>
        <Grid container justifyContent={"center"}>
          <Grid item sx={recFrame("36vw", "36vw")} xs={4.5}>
            <img src={cocktail.imageUrl} style={recImage} />
          </Grid>
          <Grid item sx={rightStyle} xs={7.5}>
            <Box sx={nameStyle}>{cocktail.name}</Box>
            <Box sx={descStyle}>{cocktail.content}</Box>
            {x}
          </Grid>
        </Grid>
      </PaperBack>
    </div>
  )
}
