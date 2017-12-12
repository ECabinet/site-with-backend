angular
  .module('ecabinet')
  .factory('podcastFactory', podcastFactory);

function podcastFactory($http, GLOBAL_VARIABLES, $state, localStorageService) {
  var episodes = [
    {
      id: 1,
      title: 'James Ellsmoor EP4 - Forbes 30 under 30', 
      date: 'October 14, 2017', 
      timeLength: '00:24:53', 
      description: 'James is a driven entrepreneur passionate about solar energy and developing rural and island economies, with experience in the private, non-profit and government sectors.', 
      url: null, 
      pic: 'https://i1.sndcdn.com/artworks-000245748234-6b02on-t500x500.jpg'
    },
    {
      id: 2,
      title: 'Aneri Pradhan EP3', 
      date: 'October 03, 2017', 
      timeLength: '00:31:23', 
      description: 'Hi, I\'m Aneri. I\'m a first generation American currently living in San Francisco with my husband and dog. I am frequently traveling the world, spending most of my travel timeLength in Uganda and India. I grew up in Raleigh, NC and received my Bachelors at the University Of North Carolina - Chapel Hill in International Studies and received my Masters from the London School of Economics in Environment and Development.', 
      url: null, 
      pic: 'https://i1.sndcdn.com/artworks-000243903215-lrmsh1-t500x500.jpg'
    },
    {
      id: 3,
      title: 'Frank Torti EP1', 
      date: 'September 28, 2017', 
      timeLength: '00:22:32', 
      description: 'Frank Torti joined NEA in 2007 and focuses on investments in biopharmaceuticals, medical devices, and healthcare services. He has been actively involved in the firm’s private and public investments in healthcare, including Annexon Biosciences, Alimera Sciences, Cadence Pharmaceuticals (acquired by Mallinckrodt plc), CITIC Pharmaceuticals (acquired by Shanghai Pharmaceuticals), Dermira, Eargo, GST Clinics, Galera Therapeutics, Neotract, Novast Pharmaceuticals, OphoMed, Peplin (acquired by LEO Pharma), Rigel, Solta Medical (acquired by Valeant), and Tarveda Therapeutics.', 
      url: null, 
      pic: 'https://i1.sndcdn.com/artworks-000242786252-qn6qtj-t500x500.jpg'
    },
    {
      id: 4,
      title: 'Buck Goldstein EP2', 
      date: 'September 16, 2017', 
      timeLength: '00:36:31', 
      description: 'Buck Goldstein, Professor of the Practice, professor of Econ 125, intro to entrepreneurship. Information America, an online information company which was publicly traded and then acquired by the Thomson Corporation. He was a partner at Mellon Ventures, a venture capital firm, and graduated Phi Beta Kappa at the University of North Carolina, and an honors graduate at UNC Law School.', 
      url: null, 
      pic: 'https://i1.sndcdn.com/artworks-000242785999-az3omg-t500x500.jpg'
    }
  ];

  return {
    getAll:  getAll,
    getById: getById,
    getProfile: getProfile,
    authenticated: checkAuthentication,
    isAdmin: isAdmin,
    logout: logout
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

  function getProfile() {
    return $http({
      method: 'GET',
      url: GLOBAL_VARIABLES.API_URL + '/me'
    }).then(function successCallback(response) {
      if (response.data.me) {
        localStorageService.set("authenticated", true);

        if (response.data.me.roles.length) {
          localStorageService.set("admin", true);
        } else {
          localStorageService.set("admin", false);
        }

        return response.data.me;
      } else {
        localStorageService.set("authenticated", false);
        $state.go('login');
        return false;
      }

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  function logout() {
    $http.get(GLOBAL_VARIABLES.API_URL + '/logout')
      .then(function successCallback(response) {
        localStorageService.set("authenticated", false);
        $state.go('login');
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  function checkAuthentication() {
    return localStorageService.get("authenticated");
  }

  function isAdmin() {
    return localStorageService.get("admin");
  }
}
