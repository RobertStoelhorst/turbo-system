class SessionsController < ApplicationController
<<<<<<< HEAD
  def create
    @user = User.find_by(email: session_params[:email])
  
=======
def create
    @user = User.find_by(email: session_params[:email])

>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
<<<<<<< HEAD
      render json: { 
=======
      render json: {
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end
<<<<<<< HEAD
  
  def is_logged_in?
=======
def is_logged_in?
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end
<<<<<<< HEAD

  def destroy
=======
def destroy
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end
<<<<<<< HEAD
  
  private
    def session_params
        params.require(:user).permit(:username, :email, :password)
    end
end
=======
private
def session_params
    params.require(:user).permit(:username, :email, :password)
  end
end
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
