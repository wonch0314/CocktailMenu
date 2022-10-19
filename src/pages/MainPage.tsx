import CategorySlide from "@/components/MainPage/CategorySlide"
import CocktailCard from "@/components/MainPage/CocktailCard"
import NavigationIcon from "@mui/icons-material/Navigation"
import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"

const toTopBtn = {
  position: "fixed",
  bottom: "5%",
  right: "5%",
  backgroundColor: "black",
  fontSize: "7vw",
}

export default function MainPage() {
  const [sy, setSy] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSy(window.scrollY)
    })
  }, [window.scrollY])

  return (
    <div>
      <CategorySlide />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CocktailCard />
        </Grid>
      </Grid>
      {sy > 444 && (
        <Box>
          <NavigationIcon onClick={() => scrollTo(0, 0)} sx={toTopBtn} />
        </Box>
      )}
    </div>
  )
}
