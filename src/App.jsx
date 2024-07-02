import React from 'react'
import { ColorModeContext,useMode } from './theme' ;
import { CssBaseline,ThemeProvider } from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import TopBar from './scenes/global/TopBar';
import { Dashboard } from '@mui/icons-material';



const App = () => {

  const [theme,colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
   
    <div className='app'>
    <main className='content'>
      <TopBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App