import { Box } from "@mui/material"
import React from "react"

interface propsType {
  children: React.ReactNode
}

const paperStyle = {
  borderRadius: "4px",
  boxShadow: 9,
  backgroundColor: "#040507",
  p: "16px",
}

export default function PaperBack({ children }: propsType) {
  return <Box sx={paperStyle}>{children}</Box>
}
