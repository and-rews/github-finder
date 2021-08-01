// Init Github
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search Input eventlistener
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make Http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear ptofile
        ui.clearProfile();
    }
});