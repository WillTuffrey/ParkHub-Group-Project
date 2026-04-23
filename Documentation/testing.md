# Testing

## Test Plan
This is the testing for the various functions of the webapp. Each test has a Use-Case ID and a PASS/FAIL status depending on the outcome.

### Automated tests
| Test ID | Test | Status |
| ------- | ---- | ------ |
| 1 | Car park locations loading when plan.html is entered | PASS |
| 2 | Car park locations loading when explore.html is entered | PASS |
| 3 | User location is requested when loading explore.html | PASS |
| 4 | If user location is not aquired in explore.html, don't show location pin | FAIL |

### Manual tests
| Test ID | Test | Status |
| ------- | ---- | ------ |
| 5 | If user location is not aquired on load of explore.html, location button pressed fetches user location and displays | PASS |
| 6 | Search bar in plan.html highlighting the car park named | FAIL |
| 7 | Side menu works with page scaling and buttons dirrect user to correct page | PASS |
| 8 | Filters in plan.html acurately build a API request to Open Data Bristol to display the filtered car parks | FAIL |
| 9 | Filters in plan.html get handled by the php server | FAIL - not implemented |
| 10 | In feedback.html feedback sent is handled via email protocol | FAIL - not implemented |

### Requirements Traceability Matrix
| Use-Case ID | Requirement ID | Test ID | Test Case | Status |
| ----------- | -------------- | ------- | --------- | ------ |
| UC1 | FR5 | 1 | Load the page | PASS |
| UC1 | FR5 | 2 | Load the page | PASS |
| UC1 | FR5 | 3 | Load the page | PASS |
| UC1 | FR5 | 4 | Load the page | FAIL |
| UC1 | FR5 | 5 | Pressing the button below the map for location | PASS |
| UC1 | FR2 | 6 | Search for "Cabot Circus" in the search bar | FAIL |
| UC1 | - | 7 | Interact with the menu | PASS |
| UC1 | FR2 | 8 | Tick several of the tick boxes and check if the form subbmitted reflects the filters selected | FAIL |
| UC1 | FR2 | 9 | Not implemented | FAIL |
| UC2 | FR4 | 10 | Not implemented | FAIL |
