import React from 'react'

import { DashedButton,DefalultButton,LinkButton,PrimaryButton,TextButton } from 'strmn'
import 'strmn/dist/index.css'

const App = () => {
  return (
    <div className='container'> 
  {/*   <ExampleComponent text="Hello World" /> */}
    <br/>
    <PrimaryButton text="Primary Button" />
    <DefalultButton text="Default Button" />
    <DashedButton text="Dashed Button" />

    <br/>
    <br/>
    <LinkButton text="Link Button" />
    <TextButton text="Text Button" />

    </div>
  )

}


export default App


//"start": "react-scripts --openssl-legacy-provider start",
//"build": "react-scripts --openssl-legacy-provider build",solvel error in packge.json