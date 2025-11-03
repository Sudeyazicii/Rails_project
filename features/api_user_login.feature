Feature: Kullanıcı API Girişi
  Backend JWT kimlik doğrulaması doğru çalışmalıdır.

  Background:
    Given sistemde bir kullanıcı mevcut:
      | name | email            | password |
      | Sude | sude@example.com | 123456   |

  Scenario: Kullanıcı doğru bilgilerle giriş yapar
    When "/api/v1/login" adresine şu verilerle POST isteği gönderirim:
      | email    | sude@example.com |
      | password | 123456           |
    Then yanıt durumu 200 olmalı
    And JSON içinde "token" anahtarı bulunmalı

  Scenario: Kullanıcı hatalı şifre ile giriş yapamaz
    When "/api/v1/login" adresine şu verilerle POST isteği gönderirim:
      | email    | sude@example.com |
      | password | yanlis           |
    Then yanıt durumu 401 olmalı
    And JSON içinde "error" anahtarı bulunmalı