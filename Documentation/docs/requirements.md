# Requirements

## User Needs

### User stories
    Express these in the form from agile development:- As a (role) I want (goal) so that (benefit).

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
3. Payment Gateway - An External system for processing digital transactions.
4. Sensor - Hardware that detects vehicle presence and sends data to the system.
5. Government Authority - An organisation that oversees the management, compliance, and regulation of public parking facilities.



### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| USE-CASE UC1 | USE-CASE Describtion | 
| -------------------------------------- | ------------------- |
| **Description** | For the user to find the parking space, find parking details, and pay for the parking space |
| **Actors** | Drivers, Administration, Payment Gateway |
| **Assumptions** | There are paid car parks in Bristol </td></tr>
| **Steps** | The user looks for parking |
| |User views parking details 
| |After the user chooses the parking, they need to pay for it |
| |The payment is processed by the Payment Gateway |
| |Administrator updates the parking Space|
| **Variations** | Destination will vary  |
| **Non-functional** | Parking Details, because the user can’t change the details |
| **Issues** | N/A|


| UC2 | Driver uses the app to travel to a place with no near-by parking | 
| -------------------------------------- | ------------------- |
| **Description** | The goal for this use-case is to show the process for the user trying to find some parking for somewhere they want to go, but there is no on-site parking. The app will have to find parking near to the user's destination, then show the user a route from their location or desired starting point, and end at the car park of choice |
| **Actors** | • Drivers (the user) <br> • Sensors |
| **Assumptions** | That the driver is in Bristol and wants to travel to somewhere in Bristol |
| **Steps** | • The user makes a search for a car park in the area of their destination <br> • The system sends a request to a server with readings from sensors in the car parks to find car parks with free spaces <br> • The system then receives this result and shows the user some valid options <br> • The user then filters these results to suit their requirements <br> • The user selects a car park <br> • The system sends a request to a map provider server to get the route from the user’s location to the car park <br> • The user sets off |
| **Variations** | Destination will vary |
| **Non-functional** | • Easy to use GUI <br> • Intuitive filtering options <br> • A well-integrated maps function |
| **Issues** | N/A |



### Use-Case Diagram (UCD)      TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case-diagram.png)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.


### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
