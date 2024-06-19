import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {rangeCodeString} from "../../../data/codeStrings";
import RangeSlider from "@repo/ui/RangeSlider";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Range</Typography>
      <Typography component='h2' variant='h4'>
        The RangeSlider is a component that represents a slider input, allowing the user to select a value within a
        specific range. It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          name: An optional string that represents the name of the RangeSlider. This is used to identify the slider in
          form submissions.
        </p>
        <p>label: An optional string that represents the label for the RangeSlider. This is
          typically displayed above the slider to inform users what it represents.
        </p>
        <p>value: An optional number that
          represents the current value of the RangeSlider.
        </p>
        <p>
          min: An optional number that represents the minimum value
          that can be selected on the RangeSlider.
        </p>
        <p>max: An optional number that represents the maximum value that
          can be selected on the RangeSlider.
        </p>
        <p>step: An optional number that represents the step value for the
          RangeSlider. This determines the increments in which the slider’s value changes.
        </p>
        <p>
          marks: An optional number that represents the number of marks to display on the RangeSlider. These marks can
          provide a visual indication of certain values within the range.
        </p>
        <p>
          onSelected: An optional function that
          serves as a callback triggered when a value is selected. This can be used to handle changes in the
          RangeSlider’s
          state. The function takes a string parameter, which is the selected value.
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <RangeSlider label='Range input' name='range' min={-150} max={100} marks={25} step={25}/>
      </section>
      <section>
        <Code code={rangeCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
