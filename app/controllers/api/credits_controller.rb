class Api::CreditsController < ApplicationController
  def index
    credits = Credit.all
    render json: credits
  end
end
