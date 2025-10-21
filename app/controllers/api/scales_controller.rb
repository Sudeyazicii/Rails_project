class Api::ScalesController < ApplicationController
  def index
    scales = Scale.all
    render json: scales
  end
end
