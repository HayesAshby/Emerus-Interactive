import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const Home = () => {
  return (
    <Card sx={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Card>
        <CardHeader title="Title" />
        <CardContent>
          <Typography>
            A Place for the world of Emerus to grow and for others to interact
            with
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
};
export default Home;
