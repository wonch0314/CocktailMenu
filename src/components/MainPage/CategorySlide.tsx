import { Avatar, Box, Grid } from "@mui/material"
import { drinksImgs as DI } from "@/assets/drinks"
import { useState } from "react"

const drinksImgs = [...DI]

const RowContent = {
  display: "flex",
  overflowX: "scroll",
  scrollBehavior: "smooth",
  my: "24px",
  py: "12px",
  borderTop: "solid 2px rgba(255, 255, 255, 0.6)",
  borderBottom: "solid 2px rgba(255, 255, 255, 0.6)",
}

const Content = {
  mx: "8px",
  border: "4px solid #b49b5a",
  width: "32vw",
  height: "32vw",
}

const titleStyle = {
  textAlign: "center",
  fontSize: "10vw",
  my: "24px",
  fontWeight: "bold",
}

const dl = ["GIN", "RUM", "TEQUILA", "VODKA", "WHISKEY", "LIQUOR"]

export default function CategorySlide() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <Box className="kill-scroll" sx={RowContent}>
        {drinksImgs.map((a: any, index: number) => {
          return (
            <Box
              key={index}
              onClick={() => {
                setSelected(index)
              }}
            >
              <Box sx={{ textAlign: "center", mb: "4px", fontSize: "6vw" }}>
                {dl[index]}
              </Box>
              <Avatar src={a} variant="rounded" sx={Content} />
            </Box>
          )
        })}
      </Box>
      <Box sx={titleStyle}>{dl[selected]} Cocktail</Box>
    </>
  )
}
