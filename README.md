# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# APIs

```json
{
    "api": "https://aitecell.herokuapp.com/api/",
    "eventtypes": "https://aitecell.herokuapp.com/api/eventtypes/?format=json",
    "events": "https://aitecell.herokuapp.com/api/events/?format=json",
    "events/upcoming_events": "http://127.0.0.1:8000/api/events/upcoming_events/?format=json",
    "events/live_events": "http://127.0.0.1:8000/api/events/live_events/?format=json",
    "events/past_events": "http://127.0.0.1:8000/api/events/past_events/?format=json",
    "latestupdates": "https://aitecell.herokuapp.com/api/latestupdates/?format=json",
    "documents": "https://aitecell.herokuapp.com/api/documents/?format=json",
    "videos": "https://aitecell.herokuapp.com/api/videos/?format=json",
    "startups": "https://aitecell.herokuapp.com/api/startups/?format=json",
    "categories": "https://aitecell.herokuapp.com/api/categories/?format=json",
    "people": "https://aitecell.herokuapp.com/api/people/?format=json",
    "people/ecell_team": "http://127.0.0.1:8000/api/people/ecell_team/?format=json",
    "people/ecell_team_alumni": "http://127.0.0.1:8000/api/people/ecell_team_alumni/?format=json",
    "people/alumni_entrepreneur": "http://127.0.0.1:8000/api/people/alumni_entrepreneur/?format=json",
    "links": "https://aitecell.herokuapp.com/api/links/?format=json",
    "internships": "https://aitecell.herokuapp.com/api/internships/?format=json",
    "internships/is_active": "http://127.0.0.1:8000/api/internships/is_active//?format=json",
    "collaboration": "https://aitecell.herokuapp.com/api/collaboration/?format=json"
}

```

## API no. 1 - event_types
`GET /api/eventtypes/`
```json
[
    {
        "id": 1,
        "events": [
            {
                "id": 1,
                "event_type": "Event",
                "title": "Going from Mildly Successful to Wildly Successful",
                "description": "Discover the hidden keysto becoming an Outlier",
                "start_date": "2021-10-03T10:08:45Z",
                "end_date": "2021-10-03T12:00:00Z",
                "image_url": "",
                "meet_url": "",
                "others": "",
                "files_attachment": null,
                "comments": ""
            },
            {...},
            {...}
        ],
        "title": "Event"
    },
    {
        "id": 2,
        "events": [
            {
                "id": 4,
                "event_type": "Visit",
                "title": "Visits IIT Bombay",
                "description": "",
                "start_date": "2021-11-03T20:17:57Z",
                "end_date": "2021-11-03T20:17:59Z",
                "image_url": "",
                "meet_url": "",
                "others": "",
                "files_attachment": null,
                "comments": ""
            },
            {...},
            {...}
        ],
        "title": "Visit"
    },
    {
        "id": 3,
        "events": [
            {
                "id": 7,
                "event_type": "Session",
                "title": "Session on Entrepreneurship by Mr. Abhijeet Deogirikar",
                "description": "",
                "start_date": "2021-11-03T20:18:37Z",
                "end_date": "2021-11-03T20:18:38Z",
                "image_url": "",
                "meet_url": "",
                "others": "",
                "files_attachment": null,
                "comments": ""
            },
            {...},
            {...}
        ],
        "title": "Session"
    }
]
```

<!-- ############# -->

## API no. 2.1 - live_events
`GET /api/events/live_events/`
```json
[
    {
        "id": 11,
        "event_type": "Session",
        "title": "Entrepreneurship Cell Orientation to students",
        "description": "",
        "start_date": "2022-01-08T07:13:04Z",
        "end_date": "2022-03-08T07:11:37Z",
        "image_url": "",
        "meet_url": "",
        "others": "",
        "files_attachment": null,
        "comments": ""
    }
]
```

## API no. 2.2 - past_events
`GET /api/events/past_events/`
```json
[
    {
        "id": 2,
        "event_type": "Event",
        "title": "Startup Saga: A bug in Startup results are announced",
        "description": "congratulations to all winners.",
        "start_date": "2021-10-05T20:09:29Z",
        "end_date": "2021-11-06T20:09:31Z",
        "image_url": "",
        "meet_url": "",
        "others": "",
        "files_attachment": null,
        "comments": ""
    }
]
```
<!-- ############# -->

## API no. 3 - upcoming_events
`GET /api/events/upcoming_events/`
```json
[
    {
        "id": 2,
        "event_type": "Event",
        "title": "new event title",
        "description": "",
        "start_date": "2022-10-05T20:09:29Z",
        "end_date": "2022-11-06T20:09:31Z",
        "image_url": "",
        "meet_url": "",
        "others": "",
        "files_attachment": null,
        "comments": ""
    }
]
```
<!-- ############# -->

## API no. 3 - lastestupdates
`GET /api/latestupdates/`
```json
[
    {
        "id": 1,
        "title": "India Australia Circular Economy Hackathon for students/startups",
        "start_date": "2021-11-03T20:12:54Z",
        "end_date": "2021-11-06T20:12:55Z",
        "link": "https://aim.gov.in/iace-hackathon.php#:~:text=India%20Australia%20Circular%20Economy%20Hackathon,nations%20in%20fostering%20innovative%20solutions"
    }
]
```
<!-- ############# -->

## API no. 4 - documents
`GET /api/documents/`
```json
[
    {
        "id": 1,
        "title": "National Innovation Startup policy",
        "description": "",
        "document_link": "https://aitecell.in/assets/documents/AICTE_InnovStartupPolicyNISP_2019.pdf",
        "image": null
    }
]
```
<!-- ############# -->

## API no. 5 - videos
`GET /api/videos/`
```json
[
    {
        "id": 1,
        "title": "https://youtu.be/pDYsFS3a6eA",
        "description": "",
        "video_link": "https://youtu.be/pDYsFS3a6eA"
    }
]
```
<!-- ############# -->

## API no. 6 - startups
`GET /api/startups/`
```json
[
    {
        "id": 1,
        "title": "Tiltedbooks",
        "description": "",
        "image": null,
        "link": "https://www.tiltedbooks.in/"
    }
]
```
<!-- ############# -->

## API no. 7 - categories
`GET /api/categories/`
```json
[
    {
        "id": 1,
        "title": "Alumni Entrepreneur"
    }
]
```
<!-- ############# -->

## API no. 8 - people/ecell_team
`GET /api/people/ecell_team/`
```json
[
    {
        "id": 9,
        "category": [
            "Faculty Mentor",
            "Advisors"
        ],
        "name": "Dr Mrs. Sangeeta Jadhav,",
        "designation": "President IIC",
        "image": null,
        "description": "",
        "social_links": "",
        "active_during": 2022
    }
]
```
<!-- ############# -->

## API no. 8 - people/ecell_team_alumni
`GET /api/people/ecell_team_alumni/`
```json
[
    {
        "id": 14,
        "category": [
            "Team Member"
        ],
        "name": "Krunal Patil",
        "designation": "E-Cell Coordinator",
        "image": null,
        "description": "",
        "social_links": "https://www.linkedin.com/in/patilkrunal/",
        "active_during": 2021
    }
]
```
<!-- ############# -->

## API no. 8 - people/alumni_entrepreneur
`GET /api/people/alumni_entrepreneur/`
```json
[
    {
        "id": 11,
        "category": [
            "Alumni Entrepreneur",
            "Industrial Mentor",
            "Advisors"
        ],
        "name": "Mr Abhijeet Deogirikar",
        "designation": "Founder,Director CopperCloud Technologies",
        "image": null,
        "description": "",
        "social_links": "",
        "active_during": 2022
    },
]
```
<!-- ############# -->

## API no. 9 - links
`GET /api/links/`
```json
[
    {
        "id": 1,
        "title": "Email",
        "link": "http://ecell@aitpune.edu.in",
        "description": "",
        "logo_url": ""
    }
]
```
<!-- ############# -->

## API no. 10 - internships
`GET /api/internships/`
```json
[
    {
        "id": 1,
        "title": "Deep Info Lab - \"Enternship Program\"",
        "company_link": "",
        "description": "This is...",
        "image": null,
        "apply_link": "https://docs.google.com/forms/d/e/1FAIpQLSe8OtR53XvRF91h2GDiR2Ltj0GKUm7BEYINo_wC0EW8uLqV6g/viewform?usp=sf_link",
        "deadline": "2022-11-10T20:11:43Z"
    }
]
```
<!-- ############# -->

## API no. 10 - internships/is_active
`GET /api/internships/is_active/`
```json
[
    {
        "id": 2,
        "title": "Digital Persistent, a company by an AITian, for the AITians",
        "company_link": "",
        "description": "",
        "image": null,
        "apply_link": "",
        "deadline": "2022-02-08T08:25:51Z"
    }
]
```
<!-- ############# -->

## API no. 11 - collaborations
`GET /api/collaboration/`
```json
[
    {
        "id": 1,
        "title": "AICADT Baramati foundation",
        "description": "Atal Incubation Centre (AIC) set up at AIC-ADT BARAMATI FOUNDATION with the support of Atal Innovation Mission NITI Aayog with the aim of serving as an active catalyst for the development of promising entrepreneurs.",
        "image": null,
        "link": "https://www.aicadtbaramatifoundation.org/"
    }
]
```
