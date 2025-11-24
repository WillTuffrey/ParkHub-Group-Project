# Requirements

## User Needs

### User stories

1. As a user, they would like to know where the nearest parking is to the location, so that they know before setting off where to go.
2. As a user, they would like to know what the best-priced parking is available around the location, so that they can plan and choose the best parking for their needs.
3. As a user, they would want to see available parking spots in real time so they can find a space quickly.
4. As a user, they would want to reserve a parking spot ahead of time to avoid wasting time searching.
5. As a user, they would want to pay for parking online to speed up their exit from the lot.
6. As a user, they would want to receive a digital receipt as proof of payment.
7. As a user, they would want to get notified before their parking expires, so they can extend their time or move their car.


### Actors

1. Regular day Drivers - Because they need to know how to get to the destination with the right conditions that the user is looking for, such as price, space, security cameras, etc. 
2. Administrator - Person responsible for managing the parking system and its data.
3. Sensor - Hardware that detects vehicle presence and sends data to the system.
4. Government Authority - An organisation that oversees the management, compliance, and regulation of public parking facilities.



### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| USE-CASE UC1 | USE-CASE Describtion | 
| -------------------------------------- | ------------------- |
| **Description** | For the user to find the parking space, find parking details, and pay for the parking space |
| **Actors** | • Drivers <br> • Administration <br> • Bristol Open Data |
| **Assumptions** | There are paid car parks in Bristol </td></tr>
| **Steps** | • The user looks for parking <br> • User views parking details <br> • After the user chooses the parking, they can check the pricing of it <br> • User also checks if there are different types of parking e.g. Blue Badge |
| **Variations** | Destination will vary  |
| **Non-functional** | Parking Details, because the user can’t change the details |
| **Issues** | N/A|

**UML-1**
![UML-1](https://github.com/user-attachments/assets/7cff83b9-a8f2-4f74-8140-5bfaf3cad7aa)

| USE-CASE UC2 | USE-CASE Description | 
| -------------------------------------- | ------------------- |
| **Description** | Driver uses the app to travel to a place with no nearby parking: the goal for this use-case is to show the process for the user trying to find some parking for somewhere they want to go, but there is no on-site parking. The app will have to find parking near the user's destination, then show the user a route from their location or desired starting point, and end at the car park of choice |
| **Actors** | • Drivers (the user) <br> • Sensors |
| **Assumptions** | That the driver is in Bristol and wants to travel to somewhere in Bristol |
| **Steps** | • The user searches a car park in the area of their destination <br> • The system sends a request to a server with readings from sensors in the car parks to find car parks with free spaces <br> • The system then receives this result and shows the user some valid options <br> • The user then filters these results to suit their requirements <br> • The user selects a car park <br> • The system sends a request to a map provider server to get the route from the user’s location to the car park <br> • The user sets off |
| **Variations** | Destination will vary |
| **Non-functional** | • Easy to use GUI <br> • Intuitive filtering options <br> • A well-integrated maps function |
| **Issues** | N/A |

**UML-**


| USE-CASE UC3 | USE-CASE Description |
| -------------------------------------- | ------------------- |
| **Description** | The user finds an issue with the webapp, and wishes to report it |
| **Actors** | • Drivers (the user) <br> • Administration |
| **Assumptions** | There will be server space to store remaining feedback |
| **Steps** | • The user submits feedback via a form on the webapp with the details of the problem they found/encountered <br> • Feedback is then stored so the administrator can deal with it <br> • The administrator then takes the feedback, and acts on it. For example, the user could have found a bug with how the map is displayed, and the administrator would then work to solve that issue |
| **Variations** | The feedback could be submitted via email or other contact rather than on the feedback form |
| **Non-functional** | There needs to be an easy process for the user to access and submit feedback and report problems to the administrator |
| **Issues** | There would either need to be a way to notify the administrator of new feedback, or the administrator would have to regularly check for new feedback manually |

**UML-2**
![UML-2](images/Use-case-disgram-2.png)





## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.

* FR1: Display filters for the user to select or deselect - from use-case 1
* FR2: Use the filters to find and show (a) car park(s) matching all requirements - from use-case 1
* FR3: Use an algorithm to calculate the closest car park to the location selected - from use-case 1
* FR4: Have a feedback ticket system to allow users to report issues with the program or data - from use-case 2
* FR5: Integrate a map system like Google Maps to display locations for the user to see


### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
