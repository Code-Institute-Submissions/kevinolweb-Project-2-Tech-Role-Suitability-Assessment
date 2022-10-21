# Tech Role Suitability Assessment
![Project Preview](/assets/images/readme/role-suitability-final-outcome.jpg)

Nowadays due to the rumours of high salaries and work from home benefits, many people want to get a job working in Technology. This quiz has been developed to help people understand if a role in Tech is for them and at what level. Are you interested in a highly technical role like a software developer but unsure if it suits your interests and aptitude? Do you like technology but are less interested in the coding side? 

View the live application [here](https://kevinolweb.github.io/Project-2-Tech-Role-Suitability-Assessment/).

## Table of Contents
- [Intro](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#intro)
- [The Scoring System](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#the-scoring-system)
- [UX](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#ux)
- [Design](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#design)
- [Features](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#features)
- [Technologies](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#technologies)
- [Testing](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#testing)
- [Deployment](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#deployment)
- [Credits](https://github.com/kevinolweb/Project-2-Tech-Role-Suitability-Assessment/blob/main/README.md#credits)

## Intro
Our skills assessment accesses a person based on a series of questions which have been designed based on research. Opportunities exist for everyone in Tech but it’s important that somebody is matched with the right role. You may hate sitting behind a computer but love interacting with people. This could mean a project management role would be better suited to you than a programmer. 

This quiz will help you find the best role in Tech that suits your skills and interests. The tool can be sold as a branded application to Coding Bootcamps and colleges to be a lead generation tool for them or exist as its own entity to help people find the right career for them in Tech.

## The Scoring System
Following a review of numerous jobs and anecdotal research with developers in technical roles, I came up with a skillset which correlates highly to people who are successful in technical roles. The quiz was then designed around these skills so that people who score high on the technical skills are highly correlated to a technical role in “Tech”. The lower the score the more a person is more suited to other roles in Technology. The quiz is designed to be non-discriminatory in that fashion and not exclude anyone from a career in tech as different roles suit different people. 

### How it works
The scoring system is generally broken in two – High scores correlate highly to Hard Technical skills and low scores to Soft skills. The higher the score the more one is suited to a highly technical role like a programmer.
Quiz questions were designed post research which found the following skillsets/aptitudes to be highly correlated to success in highly technical roles:

| Aptitude/Skill | Correlation to Success |
|---|---|
| Attention to detail | High |
| Maths ability | High |
| Willingness to continually learn new skills | High |
| Problem Solving | High |
| Teamwork | High |
| Work Ethic | Medium-High |
| Patience | Medium-High |
| Working under Pressure/Meeting Deadlines | Medium-High |
| Creativity |  Medium-High |
| Passion for technology | Medium-High |

Each question in the quiz relates to each of these aptitudes and tries to elicit if a person has high levels or low. See 2 questions from the quiz below with an associated score in brackets:

*Q1. Which of the below represents how you like to work?*

a. I like to work by myself (7)<br/>
b.	I like to work by myself while also collaborating with others (10)<br/>
c.	I mostly prefer to work with other people every day (4)<br/>
d.	I don’t like working on my own (1)

*Q2 Are you good at Maths and numeric/statistics?*

a.	I hate Maths and statistics (1)<br/>
b.	I am relatively good at Maths but enjoy more creative pursuits (4)<br/>
c.	I enjoy Maths and never forget a date (7)<br/>
d.	Maths and statistics come easy to me and I love to open up an excel sheet (10)

If a participant selects option b from question 1 and a from question 2, they will have a running score of 11 (10+1). For the next question, if they continue to select answers with a score of 7 for each of the 8 remaining questions in the quiz (7x8=56), their total would be 67 (56+11). This result of 67 is then matched with the below result scoring system to provide the person with a personality label and associated image and description of what role in tech would suit them. In this example the person would be labelled a “Solution Developer” on the assessment result screen and receive additional related information.

| Score      | Personality Label | Suggested Roles |
| ----------- | ----------- | ----------- |
| 80 – 100 | “Problem Solver” | Highly Technical Roles |
| 60 – 79 | “Solution Developer” | Creative and Quiet Technical Roles |
| 40 – 59 | “Passionate Collaborator” | Analytical and Collaborative Roles |
| 0 - 39 | “Strategic Supporter” | Strategic Roles that are Non-Technical |
			
## UX		
To inform my approach to this project, I first created a number of different low fidelity wireframes to picture what the user experience would be like before beginning to code the application. See these below.

### Low Fidelity Wireframes
#### Start Screen
![Screen 1 Mock Up](/assets/images/readme/Screen-1.png)

#### Question Screen
![Question Screen Mock Up](/assets/images/readme/Screen2-mock.png)

#### Final Question Screen
![Screen 3 Mock Up](/assets/images/readme/Screen3mock.png)
#### Result Screen
![Result Screen Mock Up](/assets/images/readme/Screen4ResultScreen.png)



### User Stories 
I completed a number of User Stories to understand the user’s point of view and what features would be required in the project for it to work well.
- As a user, I want to complete the quiz quickly and easily and find out how I scored
- As a user, I want to be delivered a result at the end which tells me which kind of role suits my interests based on questions I answered
- As a user, I want the questions to be easily understandable and quick to complete
- As a user, I want to be delivered questions in an intuitive manner
- As a user, I do not want to be inundated with questions, be displayed too many at once or be unsure how to answer a question
- As a user, I expect to click the next button and be displayed a new question
- As a user, I wish to know how many questions I have completed and/or how many are left to complete
- As a user, I want to answer as accurately as possible to get the right result so expect the questions to be intelligently crafted so I do not click the “answer which looks right” or the answer that I believe I should pick to “win”
- As a user, I do not want to be insulted by taking this quiz and finding out a career in tech is “not for me”
- As a user, I want the quiz to be inclusive and cater for me if I am colour blind or must use a screen reader
- As a user, I want the quiz to be based on sound research as it may determine my choice of career
- As a user, on completing the quiz, I’d Love to find out more information on a career in tech or more info on the jobs that suit my aptitude
- As a user, I do not want to be displayed a question immediately but would like a quick “How to guide” and then a start button so I can begin when I am ready
- As a user, I do not want to be displayed my running “score” as it will only encourage me to cheat my picking the answer that I believe is most correlated to a career in tech rather than my honest answer
- As a user, once finished I do not want to take the quiz again as if I do it again, I will not answer it honestly

## Design
I wanted the design of the application to be as aesthetically pleasing as possible to encourage people to use it while also appearing very professional.

### Colour
I wanted to use a darker palette which is often associated with Technology websites while also allowing the quiz area to be white, so questions and answers are easy to read. The limited distraction a white background provides also encourages one to play. The colours I chose were:
![color palette](/assets/images/readme/colors.jpg)
- #22933e - A soft green for the play button
- #ED4558 - A muted red for the Finish button
- #F7D43B – A soft yellow for the horizontal line to separate the header from Quiz area
- #121a2e - A dark blue for font colour and outside the quiz container background area
- #9433D6 – A vibrant purple for quiz questions and results area highlights

### Fonts
I wanted an approachable, playful, and inviting font to use so I chose from a non-serif font. The font I eventually went with was Open Sans from Google Fonts which I felt presented a professional appearance while also encouraging you to play through its soft edges.

## Features
The quiz application has different features which each combine to provide a good user experience and help people to complete the quiz quickly and effectively.

### Existing Features
#### Opening Screen
![Screen 1 Image](/assets/images/readme/screen-1-final.jpg)

The opening screen is clean and minimalist to encourage people to take the quiz. It clearly sets out what the user has to do through brief instructions and how completing the quiz will help them. An input field is present which a person must submit in order to progress beyond the start page. If they do not enter their name an error message will display. Once they have filled in their name, they can click “Start” and will be displayed the first question.

#### Quiz Screen
![Question Screen Image](/assets/images/readme/screen-2-final.jpg)

The quiz screen itself displays on “Screen 2” once a person clicks play on the opening screen. Questions are displayed one at a time and the next question is displayed when a person click the next button. Question answers are completed via a radio button. On each quiz page you can see the question number you are on.


#### Final Question Screen
On reaching question 10, the quiz screen button text changes from “Next” to “Finish” to provide user feedback that this is the last question. The finish button background colour also toggles to Red.

#### Result Screen
![Result Screen Image](/assets/images/readme/result-screen-final.jpg)

The last screen displays the persons results and tells the user that the assessment is over. The participant is given a personality label based on their cumulative score calculated in the background of the application. They are also provided with a unique image related to the personality label as well as text of what kind of role in Tech would suit them. An external link to a website where they can find out more about these roles is also displayed at the end of the page.

#### Footer
The footer is present on every page and provides copyright information, so users know the quiz is current.

### Features Left to Implement
1. Further styling of the application to space out the answers better and give the quiz a general better visual presentation
2. Embed a timer functionality so a person only has a limited amount of time to answer a question making responses more likely to be honest
3. Embed charts on the result page to visually display persons result in a pivot table or otherwise
4. More precise research and better weighted questions to accurately identify a career in Tech for somebody

## Technologies
The following technologies were used to create the application:
- HTML
- CSS
- JavaScript
- GitHub
- Gitpod

## Testing
The website went through rigorous testing before being deployed. These included:

### Validator Testing
- HTML
    - No errors were returned when passing through the official W3C validator.
- CSS
    - No errors were found when passing through the official (Jigsaw) validator
- JSHint
    - No errors were found when code went through JS Hint. A comment was applied to JS code to ensure JS Hint recognised that the application was coded in JavaScript ES6 and had let variables and arrow function syntax.

### Accessibility
![Google Lighthouse Screenshot](/assets/images/readme/lighthouse.jpg)
The site scored well for accessibility and performance across all devices

### Manual Tests
I completed a number of manual functionality and UX Checks to ensure the tool is working as intended.

| Test completed      | Result  | 
| ----------- | ----------- | 
| Questions are displayed when one presses the “Start”, and “Next” buttons. | Passed | 
| Result is displayed when one answers all the questions and clicks “Finish”. | Passed | 
| On Start Screen, if a person does not enter a character into the input box, an error message is displayed, and they cannot continue. | Passed | 
| On Questions Screen, if a person does not select an answer, then an error message is displayed, and they are prevented from continuing. | Passed | 
| The tool performs and displays well across mobile, desktop and tablet. | Passed | 
| The quiz meets accessibility standards so it can be completed by a screen reader. | Passed | 
| The correct result message is displayed based on person’s score. | Passed | 

## Deployment
The site was deployed to GitHub pages. The following steps were used
1.	Once logged into GitHub, find the repository
2.	Locate the "settings" button and click it
3.	Select the "pages" button
4.	Click on the branch dropdown menu option and select main
5.	Click save
6.	Link to your deployed repository is displayed on screen

The live link can be found [here](https://kevinolweb.github.io/Project-2-Tech-Role-Suitability-Assessment/).

### Bugs
No technical bugs were found in the application. 
However, the questions are spaced quite close together which could lead to a person selecting the wrong answer accidentally. It could be styled with CSS to create better spacing and make options easier to select.

More focus could also be put on the CSS to stop the next button moving up and down (due to different answer lengths) when a person clicks the next button. It could be fixed to the bottom of the container with absolute positioning for a smoother UX.


## Credits
The quiz application was developed using research from external sources and media images from external websites. The coding aspect of the application was also supported by tutorials online via different platforms. All these sources are referenced below.

### Code
- I used the Code Institute’s demo project “Love Maths – Essentials Project” to understand JavaScript and how to structure a project.
- I also followed a number of different YouTube videos online where channel owners developed quiz applications on JavaScript. These included:
    - Web Dev Simplified - https://www.youtube.com/watch?v=riDzcEQbX6k
    - Brian Design - https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3735s
    - Coding Nepal - https://www.youtube.com/watch?v=pQr4O1OITJo&t=187s
    - Learn {to} Code - https://www.youtube.com/watch?v=icb9AUBeznQ

### Assessment Question and Answers Research
I used the following resources to help fashion questions and inform judging criteria:
- https://www.indeed.com/career-advice/interviewing/it-interview-questions
- https://gradireland.com/careers-advice/job-descriptions/programmersoftware-developer
- https://gradireland.com/careers-advice/job-descriptions/technical-support
- https://gradireland.com/careers-advice/job-descriptions/web-developerdesigner

### Media
All images used on the website were Open Source and free to use from Pixabay.com.


