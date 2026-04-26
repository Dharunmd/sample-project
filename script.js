document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('action-btn');
      const msg = document.getElementById('msg');

                              let clicks = 0;

                              btn.addEventListener('click', () => {
                                        clicks++;
                                        if (clicks === 1) {
                                                      msg.textContent = "Repo initialized. Files staged.";
                                                      btn.textContent = "Commit Changes";
                                        } else if (clicks === 2) {
                                                      msg.textContent = "Changes committed to local history!";
                                                      btn.textContent = "Push to GitHub";
                                                      btn.style.background = "#4caf50";
                                        } else {
                                                      msg.textContent = "Ready for remote collaboration!";
                                                      confetti();
                                        }
                              });
});

function confetti() {
              console.log("Git Success!");
}
}
