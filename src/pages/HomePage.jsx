import Hero from '../components/Hero';
import Homecards from '../components/Homecards';
import JobListings from '../components/jobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>  
      <Hero />
      <Homecards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
      
    </>
  )
}

export default HomePage