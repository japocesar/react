import { Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

      <Grid item
        className="box-shadow"
        xs={ 3 }
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ marginBottom: 5 }}>Login</Typography>

        <form>
          <Grid container display="flex" direction="column" gap="30px">
            <Grid item>
              <TextField 
                label="Email" 
                type="email" 
                placeholder="email@domain.com" 
                fullWidth 
              />
            </Grid>

            <Grid item>
              <TextField 
                label="Password" 
                type="password" 
                placeholder="Password" 
                fullWidth 
              />
            </Grid>
          </Grid>
        </form>
      </Grid>

    </Grid>
  )
}
