class Api::V1::AuthenticationController < ApplicationController
  # POST /api/v1/login
  def login
    user = User.find_by(email: params[:email])
    
    if user
      token = JsonWebToken.encode(user_id: user.id)
      render json: { token: token, user: user }, status: :ok
    else
      render json: { error: 'Kullanıcı bulunamadı' }, status: :unauthorized
    end
  end
end