import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {breadcrumbsCodeString} from "../../../data/codeStrings";
import Breadcrumbs from "@repo/ui/Breadcrumbs";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Breadcrumbs</Typography>
      <Typography component='h2' variant='h4'>
        The Breadcrumbs component provides a navigational aid in user interfaces. It allows users to keep track of their locations within programs, documents, or websites. The component is highly customizable and accepts several properties
      </Typography>
      <div className={styles.textBody}>
        <p>excludedPaths: An optional array of strings. These are the paths that you want to exclude from the
          breadcrumbs. If a path is listed here, it will not appear in the breadcrumbs.</p>

        <p>displayPaths: An optional array of strings. These are the paths that you want to display in the
          breadcrumbs but not link to. If this property is not provided, all paths will be links.</p>

        <p>overwritePaths: An optional object where the keys are paths and the values are custom React nodes. This
          allows you to overwrite the display of specific paths in the breadcrumbs with your own custom React nodes.</p>

        <p>overwriteSeparator: An optional string that specifies a custom separator to be used between each path in
          the breadcrumbs. By default, ‘/’ is used.</p>

        <p>sx: An optional property for providing CSS styling to the component. It should be a return type of the css
          function.</p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Typography component='h2' variant='h5'>Standard</Typography>
        <Breadcrumbs/>

        <Typography component='h2' variant='h5'>Excluded path</Typography>
        <Breadcrumbs excludedPaths={['components']}/>

        <Typography component='h2' variant='h5'>Display only path</Typography>
        <Breadcrumbs displayPaths={['components']}/>

        <Typography component='h2' variant='h5'>Overwritten path</Typography>
        <Breadcrumbs overwritePaths={{components: <div>Overwritten path</div>}}/>

        <Typography component='h2' variant='h5'>Overwritten separator</Typography>
        <Breadcrumbs overwriteSeparator={'*'}/>
      </section>
      <section>
        <Code code={breadcrumbsCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
