class Api::V1::UsersController < ApplicationController
  # GET /api/v1/users
  def index
    users = User.all
    render json: users
  end

  # POST /api/v1/users
  def create
    user = User.new(user_params)

    if user.save
      token = JsonWebToken.encode(user_id: user.id)
      render json: {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token
      }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
