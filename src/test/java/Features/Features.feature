@featuretag
Feature: Signup feature
  I want to signup to the application

  @smoke
  Scenario Outline: Signup and compose
    When user enters "<url>" in step
    And clicks on signup button
    Then signup page should display
    When user all mandatory values "<Firstname>","<Lastname>","<email>","<username>","<pass>","<confirmpass>" in step
    And Click on Signup button
    Then home page will appear and it should display dear "<Firstname>","<Lastname>"
    # And Click on user and clik on inbox
    And click on compose
    When user enter "<sendto>","<Subject>","<Message>" in step
    And Click on send message button
    Then message will be displayed as The message has been sent to "<sendto>"

    Examples: 
      | url                                      | Firstname | Lastname | email             | username | pass | confirmpass | sendto | Subject | Message            |
      | http://elearningm1.upskills.in/index.php | abc1      | efd      | abcsad1@gmail.com | abc98    | a12@ | a12@        | vir    | welcome | welcome to testing |
      | http://elearningm1.upskills.in/index.php | abc2      | efd      | abcsad2@gmail.com | abc92    | a12@ | a12@        | vir    | welcome | welcome to testing |
      | http://elearningm1.upskills.in/index.php | abc3      | efd      | abcsad3@gmail.com | abc93    | a12@ | a12@        | vir    | welcome | welcome to testing |
      | http://elearningm1.upskills.in/index.php | abc4      | efd      | abcsad4@gmail.com | abc94    | a12@ | a12@        | vir    | welcome | welcome to testing |
      | http://elearningm1.upskills.in/index.php | abc5      | efd      | abcsad5@gmail.com | abc95    | a12@ | a12@        | vir    | welcome | welcome to testing |
