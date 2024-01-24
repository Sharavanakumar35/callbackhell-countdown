function beginCountdown(count, callback) {
    setTimeout(function () {
      document.getElementById('countdown').innerText = count;
      setTimeout(function () {
        document.getElementById('countdown').innerText = count - 1;
        setTimeout(function () {
          document.getElementById('countdown').innerText = count - 2;
          setTimeout(function () {
            document.getElementById('countdown').innerText = count - 3;
            setTimeout(function () {
              document.getElementById('countdown').innerText = count - 4;
              setTimeout(function () {
                document.getElementById('countdown').innerText = count - 5;
                setTimeout(function () {
                  document.getElementById('countdown').innerText = count - 6;
                  setTimeout(function () {
                    document.getElementById('countdown').innerText = count - 7;
                    setTimeout(function () {
                      document.getElementById('countdown').innerText = count - 8;
                      setTimeout(function () {
                        document.getElementById('countdown').innerText = count - 9;
                        setTimeout(function () {
                            document.getElementById('countdown').innerText = count - 10;
                            setTimeout(function () {
                                document.getElementById('countdown').innerText = '';
                                document.getElementById('countdown-container').classList.remove('countdown-class');
                                // Pause the tricolor-bg video
                                document.getElementById('tricolor-bg').pause();

                                // Hide the tricolor-bg video
                                document.getElementById('tricolor-bg').style.display = 'none';

                                // Show the independence-video
                                var independenceVideo = document.getElementById('independence-video');
                                independenceVideo.style.display = 'block';

                                // Delay before unmuting to allow audio to play
                                setTimeout(function () {
                                    independenceVideo.muted = false;
                                    independenceVideo.play();
                                }, 100);
                                    
                                callback();
                            }, 500)
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  beginCountdown(10, function () {
  });
  