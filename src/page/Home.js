import HeroImage from '../component/HeroImage.js';
import Grid from '../component/Grid.js';

function Home() {
  const { innerWidth: width } = window;
  var size = 1024;
  if(width > 1024)
    if(width > 2048){
      size = 3840;
    }else{
      size = 1920;
    }
  const banner = require('../image/hero/collar_hero_'+size+'.png');
  return (
    <>
      <section className="hero">
        { banner && <HeroImage image={banner}></HeroImage> }
      </section>
      <section className="grid">
        <Grid />
      </section>
    </>
  );
}

export default Home;
