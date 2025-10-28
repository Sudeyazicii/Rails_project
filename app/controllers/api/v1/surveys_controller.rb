class Api::V1::SurveysController < ApplicationController
  def index
    surveys = Survey.all
    render json: surveys
  end
end
