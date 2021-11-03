import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';

function App() {
  return (
 
  <div>

    <div id="preloader">
        <img className="logo" src="images/Academy_Blanco.png" alt="" width="119" height="58" />
        <div id="status">
        <span></span>
        <span></span>
        </div>
    </div> 

    <div className="login-wrapper" id="login-content"> 
      <div className="login-content">
        <a href="#" className="close">x</a>
        <h3>Login</h3>
        <form method="post" action="#">
        	<div className="row">
        		 <label for="username">
                    Username:
                    <input type="text" name="username" id="username" placeholder="Percy Lara" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                </label>
        	</div>
            <div className="row">
            	<label for="password">
                    Password:
                    <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
            <div className="row">
            	<div className="remember">
					<div>
						<input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
					</div>
            		<a href="#">Forget password ?</a>
            	</div>
            </div>
           <div className="row">
           	 <button type="submit">Login</button>
           </div>
        </form>
        <div className="row">
        	<p>Or via social</p>
            <div className="social-btn-2">
            	<a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
            	<a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
            </div>
        </div>
      </div>
    </div>

    <div className="login-wrapper"  id="signup-content">
      <div className="login-content">
        <a href="#" className="close">x</a>
        <h3>sign up</h3>
          <form method="post" action="#">
            <div className="row">
                 <label for="username-2">
                    Username:
                    <input type="text" name="username" id="username-2" placeholder="Percy Lara" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                </label>
            </div>
           
            <div className="row">
                <label for="email-2">
                    your email:
                    <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
            <div className="row">
                <label for="password-2">
                    Password:
                    <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
            <div className="row">
                <label for="repassword-2">
                    re-type Password:
                    <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
            </div>
            <div className="row">
             <button type="submit">sign up</button>
            </div>
          </form>
      </div>
    </div>

    <header className="ht-header">
	    <div className="container">
		    <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
              <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
              </div>
              <a href="index-2.html"><img className="logo" src="images/Academy_Blanco.png" alt="" width="119" height="58" /></a>
          </div>
          <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>						
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="loginLink"><a href="#">LOG IN</a></li>
              <li className="btn signupLink"><a href="#">sign up</a></li>
            </ul>
          </div>
	      </nav>
	    </div>
    </header>

    <div className="hero common-hero">
    </div>

    
	    <div className="container">
		    <div className="row ipad-width2">		
			    <div className="col-md-4 col-sm-12 col-xs-12">
				    <div className="sidebar">
						  <h1 className="sb-title">Problems Lake</h1>
              <h2 className="sb-title-2">Load your problem</h2>
						  <form className="form-style-1" action="#">
							  <div className="row">

								  <div className="col-md-12 form-it">
									  <label>Title</label>
								  	<input type="text" placeholder="Enter title" />
								  </div>

                <div className="group-topics">

								  <div className="col-md-12 form-it">
									  <label>Area</label>
									  <div className="group-ip">
                      <select
                        name="skills" multiple="" className="ui fluid dropdown">
                        <option value="">Select the Area</option>
                        <option value="Action1">Action 1</option>
					                        <option value="Action2">Action 2</option>
					                        <option value="Action3">Action 3</option>
					                        <option value="Action4">Action 4</option>
					                        <option value="Action5">Action 5</option>
										  </select>
									  </div>
								  </div>
                  <div className="col-md-12 form-it">
                    <label>Course</label>
                    <div className="group-ip">
                      <select
                        name="skills" multiple="" className="ui fluid dropdown">
                        <option value="">Select the Course</option>
                        <option value="Action1">Action 1</option>
                                    <option value="Action2">Action 2</option>
                                    <option value="Action3">Action 3</option>
                                    <option value="Action4">Action 4</option>
                                    <option value="Action5">Action 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 form-it">
                    <label>Theme</label>
                    <div className="group-ip">
                      <select
                        name="skills" multiple="" className="ui fluid dropdown">
                        <option value="">Select the Theme</option>
                        <option value="Action1">Action 1</option>
                                    <option value="Action2">Action 2</option>
                                    <option value="Action3">Action 3</option>
                                    <option value="Action4">Action 4</option>
                                    <option value="Action5">Action 5</option>
                      </select>
                    </div>
                  </div>

                </div>

                <div className="col-md-12 form-it">
									<label>Problem:</label>
									<input type="text" placeholder="Enter the problem" />
								</div>
                <div className="col-md-12 form-it">
									<label>Developing:</label>
									<input type="text" placeholder="Enter the developing" />
								</div>
                <div className="col-md-12 form-it">
									<label>Difficulty</label>
									<div className="group-ip">
										<select
											name="skills" multiple="" className="ui fluid dropdown">
											<option value="">Select the Difficulty</option>
											<option value="Action1">Action 1</option>
					                        <option value="Action2">Action 2</option>
					                        <option value="Action3">Action 3</option>
					                        <option value="Action4">Action 4</option>
					                        <option value="Action5">Action 5</option>
										</select>
									</div>
								</div>
								<div className="col-md-12 ">
									<input className="submit" type="submit" value="Send problem" />
								</div>
							  </div>
						  </form>
				    </div>
		  	  </div>
		    </div>
	    </div>
    

    <footer className="ht-footer">
	  <div className="ft-copyright">
		  <div className="backtotop">
		  	<p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
		  </div>
	    </div>
    </footer>
  </div>
  );
}

export default App;
