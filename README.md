# Telecom Customer Portal 

This application will serve as the customer portal for managing your account with a large telecommunications like Verizon or AT&T. You are encouraged to use your own mobile provider’s customer portal for inspiration. 

## Functional Requirements :heavy_check_mark:
- [x] Users can register for an account and login. Users will only see their information and not another user’s data. For simplicity, you may use Spring Security and Angular interceptors for this requirement. I suggest completing the remaining functionality first then adding security later. 

- [x] Users can manage their devices, adding and removing devices at-will, selecting their phone number for each device, and assigning the data plans associated with their bill. 
  - [ ] Users can add new devices and bring over their existing number or have a new number generated. This generated number must be unique (in your database). If an existing number is chosen, it must be removed from a previous device. 

- [x] There must be 3 data plans to choose from [(see for examples)](https://www.att.com/plans/wireless/). One plan must have different number of devices/lines available: for example, one plan with a single line, and the others having 4 lines. The rules for each plan must be enforced. Hint: validate the number of devices the user has.

- [x] Users can see an estimated total cost of the monthly bill based on their selected plan(s). Hint: user can have many plans.  
## Technical Requirements :computer:
### You must use the following technology: 
- Angular
- Spring Boot
- Spring Data
- MySQL
- HTML/CSS
- GitHub

The application must be a single-page application. The login screen may be a separate page if desired, however, the rest of the application must be routed by Angular. 

### Example links: 
* Home 
* Manage Devices
* Manage Plans
* My Bill

*Given that this is a customer portal, there will be keen attention placed on UI/UX.*


## Phone Plan Features 
| Base Plan     | Super         | Unlimited     |
| ------------- |:-------------:| -------------:|
| 1 line        | up to 4 lines | up to 6 lines |
| $50 flat rate | $35 flat rate | $60 flat rate |
| $0 per line   | $25 per line  | $20 per line  |
| ∞ talk/text   | ∞ talk/text   | ∞ talk/text   |
| 5G access     | 5G access     | 5G access     |
| 4GB of data   | 50GB of data  | 100GB of data |
| no Hotspot    | 10GB Hotspot  | 30GB Hotspot  |
