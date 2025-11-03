require 'rspec/expectations'
World(RSpec::Matchers)
include Rack::Test::Methods

def app
  Rails.application
end

############################################
# USER EXIST
############################################
Given('sistemde bir kullanıcı mevcut:') do |table|
  data = table.hashes.first
  
  # Önce var mı kontrol et, yoksa oluştur
  user = User.find_by(email: data["email"])
  
  if user.nil?
    User.create!(
      name: data["name"],
      email: data["email"],
      password: data["password"],
      password_confirmation: data["password"]
    )
  end
end

############################################
# LOGIN REQUEST
############################################
When(/^"([^"]+)" adresine şu verilerle POST isteği gönderirim:$/) do |path, table|
  # Table'ı hash'e çevir
  data = table.rows_hash
  payload = data.to_json

  header "Content-Type", "application/json"
  header "Accept", "application/json"

  post path, payload, { "CONTENT_TYPE" => "application/json" }

  @last_response = last_response
  @last_json = JSON.parse(@last_response.body) rescue {}
end

Then('yanıt durumu {int} olmalı') do |code|
  expect(@last_response.status).to eq(code)
end

Then(/^JSON içinde "([^"]+)" anahtarı bulunmalı$/) do |key|
  expect(@last_json).to have_key(key)
end

############################################
# SURVEY STEPS
############################################
Given('a registered user exists with email {string}') do |email|
  # Önce var mı kontrol et, yoksa oluştur
  user = User.find_by(email: email)
  
  if user.nil?
    User.create!(
      name: "Test User",
      email: email,
      password: "123456",
      password_confirmation: "123456"
    )
  end
end

When('I request the list of surveys') do
  get "/api/v1/surveys"
  @last_response = last_response
  @last_json = JSON.parse(@last_response.body) rescue []
end

Then('I should see at least one survey') do
  expect(@last_json.length).to be >= 1
end

############################################
# USER CREATE API
############################################
When('I send a POST request to {string} with:') do |path, table|
  # Test ortamında user create ise, önce mevcut kullanıcıyı sil
  if path == "/api/v1/users"
    email = table.rows_hash['email']
    User.find_by(email: email)&.destroy
  end
  
  payload = { user: table.rows_hash }.to_json

  header "Content-Type", "application/json"
  header "Accept", "application/json"

  post path, payload, { "CONTENT_TYPE" => "application/json" }

  @last_response = last_response
  @last_json = JSON.parse(@last_response.body) rescue {}
end

Then('the response status should be {int}') do |code|
  expect(@last_response.status).to eq(code)
end

Then('the JSON should contain {string}') do |key|
  expect(@last_json).to have_key(key)
end