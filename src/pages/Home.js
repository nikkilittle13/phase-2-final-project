import React from 'react';
import "../index.css";

function Home() {
  return (
    <div> 
      <h1 className="header">WELCOME!</h1>
      <h3 className='intro'>If you love music, you've made it to the right place. We want to know who your current favorite artists and albums are, whether old or new!</h3>
      <p className='description'>Navigate to the Artists and Albums pages where you will find all that have been submitted. Vote for one already on the page or, if you don't see your favorite, go to the Submission Form page to add your own artist or album to their respective page.</p>
    </div>
  );
}

export default Home;