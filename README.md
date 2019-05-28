# NoriginMediaDevTask


#Start the Project ( DEV ): 
    (Required)
    Node > v10
    Yarn > v1.13.0
    
    #Run Following commands to install the dependencies and start the application respectively. 
    $ yarn
    $ yarn start
    (This will start the mock data on port `1337` and the frontend on `3000`)
    
   >  http://localhost:3000
   
#What has been done as part of the task
    
    - The data is fetched and the same is displayed on the screen. 
    - The width represents the durations of each shows. 
    - The ongoing shows are highlighted with a different colorss from the rest.
    - There is an orange line in the middle of the screen / shows to represent the current time.
    - User may press `Now` button to reset the clock ( to present ) 
    - The time line and the ongoing shows , get updated with the delay of 5 seconds.
    - The channel sticks to the left of the screen to make it easier for user to reffer the channels along with shows. 
    - Its been noticed that the last show ends before 24:00 , so there is tile in the end with 'TBD' to fill the clock.
    - The application works on both mobile and desktop. 
    - Tried to keep the styling to the minimum and as simple as possible. I have used  icons from Fontaswesoms (https://fontawesome.com/). 
    
#I have make some assumptions 
 I have analyzed the mock data and so assumed that :

    * the first show starts at 00:00 hours and the data is sorted on the start and end time. 
    * their is no gap of shows in between. Only one at the end of the days. ( the former has been fixed ) .
  
    