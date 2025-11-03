module Api
  module V1
    class AuthenticationController < ApplicationController
      skip_before_action :authorize_request, only: [ :login ]

      # POST /api/v1/login
      def login
        puts "=" * 50
        puts "LOGIN DEBUG"
        puts "Params: #{params.inspect}"
        puts "Email param: #{params[:email]}"
        puts "Password param: #{params[:password]}"
        puts "=" * 50

        email = params[:email]
        password = params[:password]

        user = User.find_by(email: email)
        puts "User found: #{user.present?}"

        if user
          auth_result = user.authenticate(password)
          puts "Authenticate result: #{auth_result.present?}"
          puts "Auth class: #{auth_result.class}"
        end

        if user&.authenticate(password)
          token = JsonWebToken.encode(user_id: user.id)
          puts "Token created: #{token.present?}"
          render json: { token: token, user: { id: user.id, name: user.name, email: user.email } }, status: :ok
        else
          puts "Authentication failed!"
          render json: { error: "Invalid credentials" }, status: :unauthorized
        end
      end
    end
  end
end
