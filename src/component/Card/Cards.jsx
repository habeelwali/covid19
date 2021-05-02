import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
function Cards({title,cases,total}) {
  return (
    <Card className="card">
      {/*Title*/ }
      <Typography className="title" color="textSecondary">
        {title}
      </Typography>
       {/*Number of cases*/ }
  <h2 className="cases">{cases}</h2>
        {/*Total*/ }
  <Typography className="total" color="textSecondary">{total}</Typography>
    </Card>
  )
}

export default Cards

