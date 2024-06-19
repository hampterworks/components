import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Input from "@repo/ui/Input";
import Code from "@repo/ui/Code";
import {inputCodeString} from "../../../data/codeStrings";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Inputs</Typography>
      <Typography component='h2' variant='h5'>
        The Input is a component that represents an input field,
        commonly used in forms to collect user data. It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          label: An optional string that represents the label for the input. This is typically displayed above the
          input to inform users what information should be entered in the input field.
        </p>
        <p>
          iconLeft: An optional property that represents an icon to be displayed on the left side of the input. It can
          be any renderable React
          node.
        </p>
        <p>
          iconRight: An optional property that represents an icon to be displayed on the right side of the
          input. It can be any renderable React node.
        </p>
        <p>
          requiredTitle: An optional property that represents the
          required title to be displayed for the input. It can be any renderable React node. This is typically used to
          indicate that the input field is required.
        </p>
        <p>
          isInvalid: An optional boolean property that specifies if the input is in an invalid state. If true, the input
          field will typically be styled to indicate an error state to the user.
        </p>
        <p>
          onInput: An optional function that serves as a callback triggered when the user changes the input value.
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Input name='input' label='Text Input'/>
        <Input name='input' label='Number Input' type='number'/>
        <Input name='input' label='Required Input' required/>
        <Input name='input' label='Invalid Input' required isInvalid={true}/>
      </section>
      <section>
        <Code code={inputCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
