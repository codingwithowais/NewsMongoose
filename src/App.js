
// import './App.css';

import React , {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>  {
 const apiKey=process.env.REACT_APP_API_KEY
  const nPages = 6;
  // state={
  //   progress:0
  // }
  const[progress,setProgress]=useState(0);
 const topLoading=(progress)=>{
  
    setProgress(progress);
  }


    return (
      <BrowserRouter>

        <div>
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
    
      />
          <Navbar />
          <Routes>
            <Route exact path='/' element={
              <News apiKey={apiKey} onProgress={topLoading} key="general" pageSize={nPages} category="general" colour="primary" />} />
            <Route exact path='/home' element={
              <News apiKey={apiKey} onProgress={topLoading} key="noCategory" pageSize={nPages} colour="secondary" />} />

            <Route exact path='/business' element={
              <News apiKey={apiKey} onProgress={topLoading} key="business" pageSize={nPages} category="business" colour="danger" />} />
            <Route exact path='/entertainment' element={
              <News apiKey={apiKey} onProgress={topLoading} key="entertainment" pageSize={nPages} category="entertainment" colour="info" />} />
            <Route exact path='/health' element={
              <News apiKey={apiKey} onProgress={topLoading} key="health" pageSize={nPages} category="health" colour="success" />} />
            <Route exact path='/science' element={
              <News apiKey={apiKey} onProgress={topLoading} key="science" pageSize={nPages} category="science" colour="warning" />} />
            <Route exact path='/sports' element={
              <News apiKey={apiKey} onProgress={topLoading} key="sports" pageSize={nPages} category="sports" colour="success" />} />

            <Route exact path='/technology' element={
              <News apiKey={apiKey} onProgress={topLoading} key="technology" pageSize={nPages} category="technology" colour="dark" />} />


          </Routes>
        </div>
      </BrowserRouter>
    )
  }



export default App ;
