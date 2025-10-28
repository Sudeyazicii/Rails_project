class Api::V1::CreditsController < ApplicationController
  def index
    credits = Credit.all
    render json: credits
  end
end
