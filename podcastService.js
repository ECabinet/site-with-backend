angular
  .module('ecabinet')
  .factory('podcastFactory', podcastFactory);

function podcastFactory() {
  var episodes = [
    {
      id: 1,
      pTitle: 'James Ellsmoor EP4 - Forbes 30 under 30', 
      pDate: 'October 14, 2017', 
      pTime: '00:24:53', 
      pDescription: 'James is a driven entrepreneur passionate about solar energy and developing rural and island economies, with experience in the private, non-profit and government sectors.', 
      url: null, 
      image: 'https://i1.sndcdn.com/artworks-000245748234-6b02on-t500x500.jpg'
    },
    {
      id: 2,
      pTitle: 'Aneri Pradhan EP3', 
      pDate: 'October 03, 2017', 
      pTime: '00:31:23', 
      pDescription: 'Hi, I\'m Aneri. I\'m a first generation American currently living in San Francisco with my husband and dog. I am frequently traveling the world, spending most of my travel time in Uganda and India. I grew up in Raleigh, NC and received my Bachelors at the University Of North Carolina - Chapel Hill in International Studies and received my Masters from the London School of Economics in Environment and Development.', 
      url: null, 
      image: 'https://i1.sndcdn.com/artworks-000243903215-lrmsh1-t500x500.jpg'
    },
    {
      id: 3,
      pTitle: 'Frank Torti EP1', 
      pDate: 'September 28, 2017', 
      pTime: '00:22:32', 
      pDescription: 'Frank Torti joined NEA in 2007 and focuses on investments in biopharmaceuticals, medical devices, and healthcare services. He has been actively involved in the firm’s private and public investments in healthcare, including Annexon Biosciences, Alimera Sciences, Cadence Pharmaceuticals (acquired by Mallinckrodt plc), CITIC Pharmaceuticals (acquired by Shanghai Pharmaceuticals), Dermira, Eargo, GST Clinics, Galera Therapeutics, Neotract, Novast Pharmaceuticals, OphoMed, Peplin (acquired by LEO Pharma), Rigel, Solta Medical (acquired by Valeant), and Tarveda Therapeutics.', 
      url: null, 
      image: 'https://i1.sndcdn.com/artworks-000242786252-qn6qtj-t500x500.jpg'
    },
    {
      id: 4,
      pTitle: 'Buck Goldstein EP2', 
      pDate: 'September 16, 2017', 
      pTime: '00:36:31', 
      pDescription: 'Buck Goldstein, Professor of the Practice, professor of Econ 125, intro to entrepreneurship. Information America, an online information company which was publicly traded and then acquired by the Thomson Corporation. He was a partner at Mellon Ventures, a venture capital firm, and graduated Phi Beta Kappa at the University of North Carolina, and an honors graduate at UNC Law School.', 
      url: null, 
      image: 'https://i1.sndcdn.com/artworks-000242785999-az3omg-t500x500.jpg'
    }
  ];

  return {
    getAll:  getAll,
    getById: getById,
  };

  function getAll() {
    return episodes;
  }

  function getById(id) {
    id = parseInt(id);
    for (var i = 0; i < episodes.length; i++) {
      if (episodes[i].id === id) {
        return episodes[i];
      }
    }
  }
}
