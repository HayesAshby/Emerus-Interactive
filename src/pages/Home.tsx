import { Card, CardContent, CardHeader, Link, Typography } from "@mui/material";

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
      <Card>
        <CardHeader title="How to Contribute" />
        <CardContent>
          <Typography>
            <Link href="https://github.com/HayesAshby/Emerus-Interactive">
              Github
            </Link>
            Open a pull request to the project
          </Typography>
          <Typography>
            Modify the appropriate data file you want to contribute to Example:
            ./src/pages/Material/data.tsx
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
};
export default Home;
