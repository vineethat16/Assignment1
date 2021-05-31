$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features.feature");
formatter.feature({
  "line": 2,
  "name": "Signup feature",
  "description": "I want to signup to the application",
  "id": "signup-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Signup and compose",
  "description": "",
  "id": "signup-feature;signup-and-compose",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003curl\u003e\" in step",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "signup page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user all mandatory values \"\u003cFirstname\u003e\",\"\u003cLastname\u003e\",\"\u003cemail\u003e\",\"\u003cusername\u003e\",\"\u003cpass\u003e\",\"\u003cconfirmpass\u003e\" in step",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Signup button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "home page will appear and it should display dear \"\u003cFirstname\u003e\",\"\u003cLastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# And Click on user and clik on inbox"
    }
  ],
  "line": 14,
  "name": "click on compose",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter \"\u003csendto\u003e\",\"\u003cSubject\u003e\",\"\u003cMessage\u003e\" in step",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on send message button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "message will be displayed as The message has been sent to \"\u003csendto\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "signup-feature;signup-and-compose;",
  "rows": [
    {
      "cells": [
        "url",
        "Firstname",
        "Lastname",
        "email",
        "username",
        "pass",
        "confirmpass",
        "sendto",
        "Subject",
        "Message"
      ],
      "line": 20,
      "id": "signup-feature;signup-and-compose;;1"
    },
    {
      "cells": [
        "http://elearningm1.upskills.in/index.php",
        "abc1",
        "efd",
        "abcsad1@gmail.com",
        "abc12",
        "a12@",
        "a12@",
        "vir",
        "welcome",
        "welcome to testing"
      ],
      "line": 21,
      "id": "signup-feature;signup-and-compose;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3034243900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Signup and compose",
  "description": "",
  "id": "signup-feature;signup-and-compose;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"http://elearningm1.upskills.in/index.php\" in step",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "signup page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user all mandatory values \"abc1\",\"efd\",\"abcsad1@gmail.com\",\"abc12\",\"a12@\",\"a12@\" in step",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Signup button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "home page will appear and it should display dear \"abc1\",\"efd\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# And Click on user and clik on inbox"
    }
  ],
  "line": 14,
  "name": "click on compose",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter \"vir\",\"welcome\",\"welcome to testing\" in step",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on send message button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "message will be displayed as The message has been sent to \"vir\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/index.php",
      "offset": 13
    }
  ],
  "location": "Stepdefination.user_enters_in_step(String)"
});
formatter.result({
  "duration": 10702068200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.clicks_on_signup_button()"
});
formatter.result({
  "duration": 2538459000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.signup_page_should_display()"
});
formatter.result({
  "duration": 106682800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1",
      "offset": 27
    },
    {
      "val": "efd",
      "offset": 34
    },
    {
      "val": "abcsad1@gmail.com",
      "offset": 40
    },
    {
      "val": "abc12",
      "offset": 60
    },
    {
      "val": "a12@",
      "offset": 68
    },
    {
      "val": "a12@",
      "offset": 75
    }
  ],
  "location": "Stepdefination.user_all_mandatory_values_in_step(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 910272800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.click_on_Signup_button()"
});
formatter.result({
  "duration": 931415900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1",
      "offset": 50
    },
    {
      "val": "efd",
      "offset": 57
    }
  ],
  "location": "Stepdefination.home_page_will_appear_and_it_should_display_dear(String,String)"
});
formatter.result({
  "duration": 55798300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.click_on_compose()"
});
formatter.result({
  "duration": 4992848300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//a[text()\u003d\u0027Compose\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-0PSUIKT\u0027, ip: \u0027192.168.0.129\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefination.Stepdefination.click_on_compose(Stepdefination.java:104)\r\n\tat ✽.And click on compose(Features.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "vir",
      "offset": 12
    },
    {
      "val": "welcome",
      "offset": 18
    },
    {
      "val": "welcome to testing",
      "offset": 28
    }
  ],
  "location": "Stepdefination.user_enter_in_step(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefination.click_on_send_message_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vir",
      "offset": 59
    }
  ],
  "location": "Stepdefination.message_will_be_displayed_as_The_message_has_been_sent_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 235500,
  "status": "passed"
});
});