function startCountdown(count, callback) {
    document.getElementById('independence-video').pause();
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
                          document.getElementById('countdown').style.display = 'none';
                          document.getElementById('countdown-container').classList.remove('countdown-class');
                          document.getElementById('tricolor-bg').pause();
                          document.getElementById('tricolor-bg').style.display = 'none';
                        //   document.getElementById('independence-video').style.display = 'block';
                        //   document.getElementById('independence-video').play();
                          callback();
                        }, 2000);
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
  
  startCountdown(10, function () {
    document.getElementById('independence-video').style.display = 'block';
    document.getElementById('independence-video').play();
  });
  