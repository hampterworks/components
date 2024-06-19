import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {buttonCodeString} from "../../../data/codeStrings";
import Button from "@repo/ui/Button";

const Flower: React.FC = () => {
  return <svg height='18px' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7759.000000)" fill="#fff">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M141.960093,7609.4471 C141.959089,7609.45659 141.95708,7609.46607 141.953062,7609.48926 C141.950048,7609.50401 141.951053,7609.50085 141.953062,7609.49031 C141.611529,7611.35662 139.443802,7612.23971 137.995302,7611.10581 C138.448335,7610.15105 138.594993,7609.06246 138.384046,7608.01603 C139.094233,7607.66616 139.702965,7607.13504 140.153989,7606.47113 C141.393551,7606.83154 142.19113,7608.16672 141.953062,7609.48926 C141.955071,7609.47767 141.958084,7609.4608 141.960093,7609.4471 L141.960093,7609.4471 Z M136.475482,7616.90389 C134.915482,7616.90389 133.704045,7615.33266 134.015443,7613.73718 C134.978766,7613.72559 135.968206,7613.34832 136.726609,7612.72868 C137.351413,7613.23873 138.132919,7613.58122 138.919449,7613.68976 C139.270022,7615.30842 138.05959,7616.90389 136.475482,7616.90389 L136.475482,7616.90389 Z M133.460955,7611.5737 C130.319859,7610.87186 131.315326,7605.70396 134.465462,7606.42687 C137.606557,7607.14663 136.612095,7612.28292 133.460955,7611.5737 L133.460955,7611.5737 Z M130.366067,7611.88563 C130.794992,7612.46734 131.416782,7612.97211 132.05364,7613.2851 C131.823607,7614.42532 132.016473,7615.6077 132.568952,7616.6162 C129.530316,7618.21589 127.383684,7613.342 130.366067,7611.88563 L130.366067,7611.88563 Z M127.774437,7611.52944 C126.327946,7611.10897 125.543426,7609.39547 126.143117,7607.95912 C126.780979,7606.43214 128.657399,7605.89575 129.933124,7606.89477 C129.479087,7607.84847 129.333433,7608.93811 129.54438,7609.98455 C128.834193,7610.33336 128.224457,7610.86448 127.774437,7611.52944 L127.774437,7611.52944 Z M128.92058,7604.30871 C128.92058,7604.30871 128.917567,7604.30871 128.917567,7604.30976 C128.914553,7604.30871 128.915558,7604.30871 128.912544,7604.30765 C128.915558,7604.30871 128.918571,7604.30871 128.92058,7604.30871 L128.92058,7604.30871 Z M131.316331,7601.10406 C132.923543,7601.01765 134.236434,7602.60469 133.911979,7604.26234 C132.94966,7604.27499 131.96022,7604.65225 131.201817,7605.27084 C130.773897,7604.92203 130.264612,7604.64277 129.743272,7604.48469 C129.631772,7604.45097 129.111437,7604.31925 128.957747,7604.3066 C128.622242,7602.74169 129.823633,7601.18415 131.316331,7601.10406 L131.316331,7601.10406 Z M137.562359,7606.11494 C137.133434,7605.53324 136.511644,7605.02741 135.874786,7604.71548 C136.104819,7603.57525 135.910949,7602.39287 135.358469,7601.38332 C138.398109,7599.78468 140.543738,7604.65752 137.562359,7606.11494 L137.562359,7606.11494 Z M140.919423,7604.52369 C141.565322,7600.51919 137.217813,7597.50318 133.964213,7599.78995 C130.709608,7597.50318 126.363104,7600.51814 127.009002,7604.52369 C122.996999,7605.9358 122.996999,7612.06478 127.009002,7613.47689 C126.363104,7617.48138 130.709608,7620.49634 133.964213,7618.21062 C137.217813,7620.49634 141.565322,7617.48138 140.919423,7613.47689 C145.034891,7612.0279 145.018819,7605.96636 140.919423,7604.52369 L140.919423,7604.52369 Z"
            id="flower-[#105]">
          </path>
        </g>
      </g>
    </g>
  </svg>
}


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Button</Typography>
      <Typography component='h2' variant='h4'>
        The Button is a component that represents a clickable button, which can be used in forms,
        or anywhere in the application that needs simple, standard button functionality. It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          label: An optional property that represents the label to be displayed on the button. It can be any renderable
          React node.
        </p>
        <p>
          size: An optional property that determines the size of the button. It can be ‘small’, ‘medium’, or ‘large’.
        </p>
        <p>
          icon: An optional property that represents the icon to be displayed on the button. It should be a React
          element.
        </p>
        <p>
          iconDirection: An optional property that determines the direction of the icon on the button. It can be ‘left’
          or ‘right’.
        </p>
        <p>
          iconButton: An optional boolean property that indicates whether the button should be rendered as an icon
          button. If true, the button will be styled and behave as an icon button.
        </p>
        <p>
          sx: An optional property for providing CSS styling to the component. It should be a return type of the css
          function.
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Button size='medium' label='Normal Button'/>
        <Button icon={<Flower/>} size='medium' label='Icon Left Button'/>
        <Button icon={<Flower/>} size='medium' iconDirection='right' label='Icon Right Button'/>
        <Button size='large' label='Large Button'/>
        <Button size='medium' label='Meduim Button'/>
        <Button size='small' label='Small Button'/>
        <Button icon={<Flower/>} iconButton={true}/>
      </section>
      <section>
        <Code code={buttonCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
