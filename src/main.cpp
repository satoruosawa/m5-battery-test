#include <ArduinoJson.h>
#include <HTTPClient.h>
#include <M5Stack.h>
#include <WiFi.h>

#include "./config.hpp"

int COUNT = 0;

void ConnectWifi();
void Send();

void setup() {
  M5.begin();
  M5.Power.begin();
  M5.Power.setPowerBoostKeepOn(true);
  ConnectWifi();

  Send();
  delay(60000);
  ESP.restart();
}

void loop() {}

void ConnectWifi() {
  M5.Lcd.setCursor(0, 16);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  M5.Lcd.print("connecting");
  int cnt = 0;
  while (WiFi.status() != WL_CONNECTED) {
    M5.Lcd.print(".");
    delay(500);
    cnt++;
    if (cnt >= 30) {
      ESP.restart();
    }
  }
  M5.Lcd.setCursor(0, 16);
  M5.Lcd.print("IP address: ");
  M5.Lcd.println(WiFi.localIP());
  delay(500);
}

void Send() {
  StaticJsonDocument<255> json_request;
  char buffer[255];
  json_request["count"] = COUNT;
  serializeJson(json_request, buffer, sizeof(buffer));
  HTTPClient http;
  http.begin(WEB_APP_URL);
  http.addHeader("Content-Type", "application/json");
  http.POST((uint8_t *)buffer, strlen(buffer));
  http.end();
}
