class UserProfileInfo extends React.Component {
  render() {
    return (
      <div class="row profile">
		<div class="col-md-3">
			<div class="profile-sidebar shadow p-3 mb-5 bg-white rounded">
				<!-- SIDEBAR USERPIC -->
				<div class="profile-userpic">
					<img src="https://media.licdn.com/dms/image/C4E03AQGRioB5HjatQQ/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=K7AtChgqDtu13STp835zkCW0zzWhCCOg7eowmTNzVA4" class="img-responsive rounded-circle center" alt="User Profile">
				</div>
				<!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE -->
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						Robert Skoniecnzy
					</div>
					<div class="profile-usertitle-job">
						Student Software Developer
					</div>
				</div>
				<!-- END SIDEBAR USER TITLE -->
				<!-- SIDEBAR BUTTONS -->
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
					<button type="button" class="btn btn-danger btn-sm">Message</button>
				</div>
                <hr>
				<!-- END SIDEBAR BUTTONS -->
				<!-- SIDEBAR MENU -->
				<div class="profile-usermenu">
                    <center>
					<ul class="nav">
                        <li>
                            <span class="badge badge-dark rounded centered mx-auto">Username: robbieskonieczny</span>
                        </li>
                        <li>
                            <span class="badge badge-dark rounded centered mx-auto">Major: Computer Science</span>
                        </li>
                        <li>
                            <span class="badge badge-dark rounded centered mx-auto">College: College of Staten Island</span>
                        </li>
                        <li>
                            <span class="badge badge-dark rounded centered mx-auto">Resume Link</span>
                        </li>
					</ul>
                    </center>
				</div>

			</div>
		</div>
      </div>
    );
  }
}
