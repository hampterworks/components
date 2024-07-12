import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {notificationsCodeString, selectCodeString} from "../../../data/codeStrings";
import Notifications from "@repo/ui/Notifications";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Notifications</Typography>
      <Typography component='h2' variant='h4'>
        Notifications is a component that represents a toaster notification, allowing the user to receive feedback about an operation in a small popup. It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          message: An optional string that represents the message to be displayed in the Notification component. This is
          typically used to inform users about the result of an operation.
        </p>
        <p>
          alertType: An optional Alert type that represents the severity of the Notification component. This can be
          'success', 'warning', 'error', or 'info'. The color and icon of the Notification typically change based on
          this property.
        </p>
        <p>
          delay: An optional number that represents the duration (in milliseconds) for which the Notification component
          is displayed. After this duration, the Notification automatically disappears.
        </p>
        <p>
          onClose: An optional function that is executed when the notification component is closed.
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Notifications
          message='This is a notification'
          alertType='info'
          delay={10}
        />
      </section>
      <section>
      <Code code={notificationsCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
