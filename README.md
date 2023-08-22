# restRantProject
# Project REST-Rant

1. Main purpose of app:
    -REST-Rant is an app where users can review and rate restaurants.
2. Tech Usage:
    -CSS Framework: Bootstrap
    -stack: mongoDb, express, NodeJs
    -server-side rendering: JSX
    -node modules: method-override, dotenv, express-react-views
3. Routes:
    -Get:   /                 (home page)
    -Get:  /places            (index page listing all places)
    -Get:  /places/new        (new form for a place)
    -Post:  /place            (create a new place)
    -Get:  /places/:id        (Show one place in detail)
    -Get:  /places/:id/edit   (edit form for a place)
    -Put:  /places/:id        (make changes to existing place)
    -Delete:  /places/:id     (delete a place)
    -Post: /places/:id/rant   (add rant to a place)
    -Delete: /places/:id/rant/:id (delete a rant)

4. Databases:
    -_id: object id
    -name: string
    -city: string
    -state: string
    -cuisines: string
    -pic: string
    
    *Add, View and Delete on Places Page:
    -_id: object ID
    -place_id: ref(place) Object_id
    -rant: boolean
    -ranting: number (rating)
    -comment: string
    -reviewer: string

notes:
    add ratiing for a place as bonus or possibly a comment area

