class UI{

    constructor() {
        this.profile = document.querySelector('#profile');

    }
    showProfile(user) {
        this.clearAlert();

        this.profile.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3 ">
                        <img class="img-fluid rounded md-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos} </span>
                        <span class="badge badge-secondary">Public Gits: ${user.public_gists}</span>
                        <span class="badge badge-success">followers: ${user.followers}</span>
                        <span class="badge badge-info">following: ${user.following}</span>
                        

                        <ul class="list-group mt-3">
                            <li class="list-group-item"> <h3>${user.name}</h3></li>
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Since: ${user.created_at}</li>

                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();

        let div = document.createElement('div');
        div.className = className;

        div.appendChild(document.createTextNode(message));

        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);

        // setTimeout(function () { // dui jaygay je cleartAlert call korchi er instead e eta korleo hoto
        //     document.querySelector('.alert').remove(); //alert or error cls dhore o call korte parbo
        // },2000);
    }

    clearAlert() { //ei fun ta alert ta dublicate hote off korbe, alert replace korbe
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }


}