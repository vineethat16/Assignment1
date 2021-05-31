package StepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import Util.hooks;

public class Stepdefination {
	
WebDriver driver = Util.hooks.driver;
/*	
@Given("^user should navigate to the application$")
public void user_should_navigate_to_the_application() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.xpath("//*[@id='navbar']/ul/li/a")).isDisplayed();
} */

@When("^user enters \"([^\"]*)\" in step$")
public void user_enters_in_step(String url) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    driver.get(url);
    driver.manage().window().maximize();
    Thread.sleep(3000);
}

@When("^clicks on signup button$")
public void clicks_on_signup_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//a[text()=' Sign up! ']")).click();
    
}

@Then("^signup page should display$")
public void signup_page_should_display() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//li[text()='Registration']")).isDisplayed();
    
}

@When("^user all mandatory values \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" in step$")
public void user_all_mandatory_values_in_step(String Firstname, String Lastname, String email, String username, String pass, String confirmpass) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    
	driver.findElement(By.id("registration_firstname")).sendKeys(Firstname);
	
	driver.findElement(By.id("registration_lastname")).sendKeys(Lastname);
	
	driver.findElement(By.id("registration_email")).sendKeys(email);
	
	driver.findElement(By.id("username")).sendKeys(username);
	
	driver.findElement(By.id("pass1")).sendKeys(pass);
	
	driver.findElement(By.id("pass2")).sendKeys(confirmpass);
	
	
	
}

@When("^Click on Signup button$")
public void click_on_Signup_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.id("registration_submit")).click();
    
}

@Then("^home page will appear and it should display dear \"([^\"]*)\",\"([^\"]*)\"$")
public void home_page_will_appear_and_it_should_display_dear(String Firstname, String Lastname) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//li[text()='Registration']")).isDisplayed();
	
	//*[@id="cm-content"]/div/div[2]/div/p[1]/text()[1]
    
}
/*
@Then("^Click on user and clik on inbox$")
public void click_on_user_and_clik_on_inbox() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//*[@id='navbar']/ul[2]/li[2]/a/img")).click();
	Actions a = new Actions(driver);	
	WebElement l= driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul[2]/li[2]/ul/li[3]/a"));
	//WebElement l = driver.findElement(By.linkText("http://elearningm1.upskills.in/main/messages/inbox.php"));
	a.moveToElement(l).click().build().perform();
	Thread.sleep(2000);
	
	
}*/

@Then("^click on compose$")
public void click_on_compose() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul[1]/li[1]/a")).click();
	
	Thread.sleep(1000);
	
	driver.findElement(By.xpath("//a[text()='Compose']")).click();
	//driver.findElement(By.xpath("//*[@id=\"toolbar\"]/div/div[1]/a[1]/img")).click();
	    
}

@When("^user enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" in step$")
public void user_enter_in_step(String sendto, String Subject, String Message) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//*[@id=\'compose_message\']/fieldset/div[1]/div[1]/span/span[1]/span/ul/li/input")).sendKeys(sendto);
	Thread.sleep(1000);
	WebElement i = driver.findElement(By.xpath("//*[@id=\"select2-compose_message_users-results\"]/li[1]"));
	Actions a1 = new Actions(driver);
	a1.moveToElement(i).click().build().perform();
	Thread.sleep(1000);
	driver.findElement(By.id("compose_message_title")).sendKeys(Subject);
	//driver.switchTo().frame(driver.findElement(By.xpath("//iframe[@title='Rich Text Editor, content']")));
	driver.switchTo().frame(0);
	driver.findElement(By.xpath("/html/body")).sendKeys(Message);
	driver.switchTo().defaultContent();
}

@When("^Click on send message button$")
public void click_on_send_message_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	
	driver.findElement(By.name("compose")).click();
	Thread.sleep(1000);
    
}

@Then("^message will be displayed as The message has been sent to \"([^\"]*)\"$")
public void message_will_be_displayed_as_The_message_has_been_sent_to(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	driver.findElement(By.xpath("//div[contains(text(),'The message has been sent ')]")).isDisplayed();
	//logout_button
	
	
	driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul[2]/li[2]/a/img")).click();
	Thread.sleep(1000);
	Actions a2 = new Actions(driver);	
	WebElement x= driver.findElement(By.id("logout_button"));
	a2.moveToElement(x).click().build().perform();
	Thread.sleep(2000);
    
}
	
	
	
}
