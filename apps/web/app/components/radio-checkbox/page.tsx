import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {checkboxCodeString, radioCodeString} from "../../../data/codeStrings";
import Checkbox from "@repo/ui/Checkbox";
import Radio from "@repo/ui/Radio";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Checkbox</Typography>
      <Typography component='h2' variant='h4'>
        The Checkbox is a component that represents a checkbox, which is a type of input that allows the user to
        select one or more options from a limited number of choices.
        It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          label: A string that represents the label for the checkbox. This is typically displayed next to the checkbox
          to inform users what the checkbox represents.
        </p>
        <p>
          name: A string that represents the name for the checkbox. This is used to identify the checkbox in form
          submissions.
        </p>
        <p>
          isChecked: An optional boolean property that indicates whether the checkbox is checked or not. By default,
          this is false, meaning the checkbox is unchecked when it first renders.
        </p>
        <p>
          onChecked: An optional function that serves as a callback triggered when the checkbox is checked or unchecked.
          This can be used to handle changes in the checkbox’s state.
        </p>
        <p>
          required: An optional boolean property that indicates whether the checkbox is required or not. If true, the
          checkbox must be checked before the form can be submitted.
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Checkbox
          label='Checkbox'
          name='Checkbox'
        />
        <Checkbox
          label='Checked Checkbox'
          name='Checked Checkbox'
          isChecked={true}
        />
        <Checkbox
          label='Required Checkbox'
          name='Required Checkbox'
          required={true}
        />
      </section>
      <section>
        <Code code={checkboxCodeString}/>
      </section>
    </div>
    <section>
      <Typography component='h2' variant='h1' className={styles.header}>Radio group</Typography>
      <Typography component='h3' variant='h4'>
        The RadioGroup is a component that represents a group of radio buttons, which allows the user to select one option from a set. It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          name: A string that represents the name of the radio group. This is used to identify the group of radio buttons in form submissions.
        </p>
        <p>
          label: An optional string that represents the label for the radio group. This is typically displayed above the radio buttons to inform users what the group represents.
        </p>
        <p>
          required: An optional boolean property that indicates whether the radio group is required or not. If true, one of the radio buttons must be selected before the form can be submitted.
        </p>
        <p>
          onSelected: An optional function that serves as a callback triggered when an item is selected. This can be used to handle changes in the radio group’s state.
        </p>
        <p>
          options: An array of SelectItem objects that represent the options available for the radio group. Each SelectItem has a value (the value of the item) and a title (the title or display text of the item).
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Radio
          label='Radio Group'
          name='Radio Group'
          options={
            [
              {title: 'First Option', value: 'first'},
              {title: 'Second Option', value: 'second'}
            ]
          }/>
        <Radio
          label='Required Radio Group'
          name='Required Radio Group'
          required
          options={
            [
              {title: 'Required First Option', value: 'Rfirst'},
              {title: 'RequiredSecond Option', value: 'Rsecond'}
            ]
          }/>
      </section>
      <section>
        <Code code={radioCodeString}/>
      </section>
    </div>
  </main>
}

export default Page
