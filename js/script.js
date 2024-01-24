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
                                document.getElementById('countdown-container').classList.remove('countdown-class');
                                document.getElementById('countdown').style.display = 'none';
                                
                                // document.getElementById('tricolor-bg').pause();
                                // document.getElementById('tricolor-bg').style.display = 'none';
                                // independenceVideo = document.getElementById('independence-video');
                                // independenceVideo.style.display = 'block';
                                
                                // setTimeout(function () {
                                //     independenceVideo.muted = false;
                                //     independenceVideo.play();
                                // }, 500);
                                    
                                callback();
                            }, 500)
                        }, 1000)
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
  