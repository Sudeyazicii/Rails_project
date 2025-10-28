class ApplicationController < ActionController::API
  before_action :authorize_request

  private

  def authorize_request
    # Sadece API endpoint'lerinde kontrol yap
    if request.path.start_with?('/api/v1')
      # /login endpoint'inde JWT kontrolü yapma
      return if request.path == '/api/v1/login'

      header = request.headers['Authorization']
      token = header.split(' ').last if header

      begin
        decoded = JsonWebToken.decode(token)
        @current_user = User.find(decoded[:user_id]) if decoded
      rescue ActiveRecord::RecordNotFound, JWT::DecodeError
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
  end
end
