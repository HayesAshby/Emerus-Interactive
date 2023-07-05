import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography
} from "@mui/material";

const materialData = [
  {
    name: "Southmark",
    HoverInfo: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquam enim nec est semper, in pellentesque erat ultrices. Pellentesque
        at est sagittis, viverra eros nec, ullamcorper erat. Vestibulum id sem
        ac nisl scelerisque gravida nec sed orci. Pellentesque congue libero et
        est auctor varius. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Nulla urna odio, bibendum in
        finibus eu, dignissim a erat. Mauris lacinia euismod mi, id viverra
        justo hendrerit sit amet. Morbi ut neque massa.
      </Typography>
    ),
    POIPage: (
      <div>
        <Card>
          <CardHeader title="Lorem Ipsum" />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              scelerisque sagittis tortor. Fusce venenatis urna ac ligula
              posuere, in ultrices arcu efficitur. Duis finibus aliquet felis,
              in semper eros cursus nec. Sed pretium sapien nec purus interdum,
              sed malesuada enim molestie. Cras at justo ac diam rhoncus
              sagittis at vel dui. Praesent semper augue eget quam interdum, id
              consequat velit varius. Quisque non purus semper, feugiat risus
              at, pellentesque nunc. Morbi tincidunt ullamcorper sapien, sed
              eleifend enim.
            </Typography>
            <img
              // onMouseOver={() => {}}
              src="/Emerus-Interactive/Lynel.png"
              width="auto"
              height="auto"
            />
            <Typography>
              Proin ac leo ac ligula posuere fermentum. Curabitur vitae
              sollicitudin tellus, eu eleifend ligula. Mauris fringilla velit eu
              ligula posuere facilisis. Ut auctor malesuada efficitur. Donec vel
              sagittis nunc, id luctus nunc. Donec in metus ligula. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Quisque efficitur placerat ipsum vitae auctor.
            </Typography>
          </CardContent>
        </Card>
      </div>
    ),
    coords: "459,457,7",
    shape: "circle"
  },
  {
    name: "Imir_Teras",
    HoverInfo: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquam enim nec est semper, in pellentesque erat ultrices. Pellentesque
        at est sagittis, viverra eros nec, ullamcorper erat. Vestibulum id sem
        ac nisl scelerisque gravida nec sed orci. Pellentesque congue libero et
        est auctor varius. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Nulla urna odio, bibendum in
        finibus eu, dignissim a erat. Mauris lacinia euismod mi, id viverra
        justo hendrerit sit amet. Morbi ut neque massa.
      </Typography>
    ),
    POIPage: (
      <div>
        <Stack spacing={10} direction={"row"}>
          <div></div>
          <Card color="secondary">
            <CardHeader title="Lorem Ipsum" />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus scelerisque sagittis tortor. Fusce venenatis urna ac
                ligula posuere, in ultrices arcu efficitur. Duis finibus aliquet
                felis, in semper eros cursus nec. Sed pretium sapien nec purus
                interdum, sed malesuada enim molestie. Cras at justo ac diam
                rhoncus sagittis at vel dui. Praesent semper augue eget quam
                interdum, id consequat velit varius. Quisque non purus semper,
                feugiat risus at, pellentesque nunc. Morbi tincidunt ullamcorper
                sapien, sed eleifend enim.
              </Typography>
              <Typography>
                Proin ac leo ac ligula posuere fermentum. Curabitur vitae
                sollicitudin tellus, eu eleifend ligula. Mauris fringilla velit
                eu ligula posuere facilisis. Ut auctor malesuada efficitur.
                Donec vel sagittis nunc, id luctus nunc. Donec in metus ligula.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Quisque efficitur placerat
                ipsum vitae auctor.
              </Typography>
            </CardContent>
          </Card>
          <div></div>
        </Stack>
      </div>
    ),
    coords: "535,280,7",
    shape: "circle"
  }
];

export default materialData;
