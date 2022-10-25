const Home = () => {
  return(
    <div id='home'>
      <h1 style={{margin: '0 auto', textAlign: 'center'}}>Eric M. Todd's Reactified Submission for Ksense</h1>
      <p style={{fontSize: '24px'}}>This is the React version of the challenge! Click around on the names at the top and watch the magic happen. It took a little longer than I had expected because I was trying to do everything by filtering everything from the top level component in order to only make one API call. Unfortunately I couldn't make that work, so I just stuck with the good ol' make it work first philosophy.</p>
    </div>
  )
}

export default Home