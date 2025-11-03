class ApplicationController < ActionController::API
  before_action :authorize_request

  private

  def authorize_request
    # Login endpoint'ini tamamen atla
    return if request.path == "/api/v1/login"

    # User create endpoint'ini tamamen atla (public endpoint)
    return if request.path == "/api/v1/users" && request.post?

    # Surveys endpoint'ini tamamen atla (public endpoint)
    return if request.path == "/api/v1/surveys" && request.get?

    # Diğer API endpoint'lerinde JWT kontrolü yap
    if request.path.start_with?("/api/v1")
      header = request.headers["Authorization"]
      token = header.split(" ").last if header

      begin
        decoded = JsonWebToken.decode(token)
        @current_user = User.find(decoded[:user_id]) if decoded
      rescue ActiveRecord::RecordNotFound, JWT::DecodeError
        render json: { error: "Unauthorized" }, status: :unauthorized
      end
    end
  end
end
