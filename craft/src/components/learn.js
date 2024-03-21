
import Toturial from "./toturial"; // Typo? Should it be "Tutorial"?
import learn from '../assets/learn.json';
import logan from '../assets/logan.mp4';

import NavBar from "./navbar";
import Footer from "./footer";
import Dids from "./dids";


function Learn() {
  

    return (
        <>
            <NavBar />
            <div className="videos">
                {learn ? (
                    learn.map((learnx, index) => (
                        <Toturial key={index} proff={learnx.name} course={learnx.description} video={logan} youtube={learnx.youtube} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
<Dids/>
           
            <Footer />
        </>
    );
}

export default Learn;

