Feature: I am going to validate RCO website functionalities

@regression
Scenario Outline: Calculator add functionality testing

Given I will navigate to Calcs site
When I add two numbers "<key1>" and "<key2>"
Then the output displyed should be "<result>"

Examples:
| key1| key2 | result |
| 5  |  7    |    12  |
| 10 |  8   |    18 |
| 15 |  2   |   17  |

@functional
@regression
Scenario Outline: Jag går och kontrollera att kalkulator fungerar

Given Jag vill navigera till kalkulator och kolla läget
When Jag läger två nummer först "<No1>" och andra "<No2>"
Then output måste vara "<result1>"

Examples:
| No1 | No2 | result1 |
| 40   | 60   | 100     |




